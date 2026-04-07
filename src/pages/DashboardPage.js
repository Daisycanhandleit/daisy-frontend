import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { dashboardAPI, remindersAPI, contactsAPI, habitsAPI } from '../lib/api';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { 
  Bell, 
  Users, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Plus,
  ArrowRight,
  MessageSquare,
  Target,
  Flame,
  Crown,
  CreditCard,
  Calendar,
  Settings,
  UserPlus,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { format, parseISO, differenceInDays } from 'date-fns';

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [habitStats, setHabitStats] = useState(null);
  const [recentReminders, setRecentReminders] = useState([]);
  const [pendingContacts, setPendingContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, remindersRes, contactsRes, habitsRes] = await Promise.all([
        dashboardAPI.getStats(),
        remindersAPI.getAll(),
        contactsAPI.getAll(),
        habitsAPI.getStats().catch(() => ({ data: null })),
      ]);
      setStats(statsRes.data);
      setHabitStats(habitsRes.data);
      setRecentReminders(remindersRes.data.slice(0, 5));
      setAllContacts(contactsRes.data || []);
      setPendingContacts(contactsRes.data.filter(c => c.consent_status === 'pending').slice(0, 3));
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'acknowledged': return 'bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] border-[hsl(var(--success))]/20';
      case 'sent': return 'bg-[hsl(var(--info))]/10 text-[hsl(var(--info))] border-[hsl(var(--info))]/20';
      case 'pending': return 'bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] border-[hsl(var(--warning))]/20';
      case 'failed': return 'bg-[hsl(var(--destructive))]/10 text-[hsl(var(--destructive))] border-[hsl(var(--destructive))]/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const trialDaysLeft = user?.trial_end 
    ? Math.max(0, differenceInDays(parseISO(user.trial_end), new Date()))
    : 0;
  
  const trialProgress = user?.trial_end 
    ? Math.min(100, ((30 - trialDaysLeft) / 30) * 100)
    : 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-muted-foreground">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in" data-testid="dashboard-page">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[hsl(var(--brown))]">
            Welcome back, {user?.name?.split(' ')[0]}!
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your reminders today.
          </p>
        </div>
        <Link to="/reminders">
          <Button 
            className="rounded-full px-6 py-5 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 transition-all hover:scale-105"
            data-testid="create-reminder-btn"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Reminder
          </Button>
        </Link>
      </div>

      {/* Subscription & Plan Card */}
      <Card className="rounded-3xl border-0 shadow-soft bg-gradient-to-r from-[hsl(var(--primary))]/5 via-[hsl(var(--secondary))]/10 to-[hsl(var(--primary))]/5">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[hsl(var(--secondary))]/20">
                <Crown className="h-8 w-8 text-[hsl(var(--secondary-foreground))]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-lg font-semibold">Your Plan</h3>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${user?.subscription_status === 'trial' 
                        ? 'bg-[hsl(var(--info))]/10 text-[hsl(var(--info))] border-[hsl(var(--info))]/20' 
                        : 'bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] border-[hsl(var(--success))]/20'}
                    `}
                  >
                    {user?.subscription_status === 'trial' ? 'Free Trial' : user?.subscription_status || 'Active'}
                  </Badge>
                </div>
                {user?.subscription_status === 'trial' && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {trialDaysLeft} days remaining • Ends {user?.trial_end && format(parseISO(user.trial_end), 'MMM d, yyyy')}
                  </p>
                )}
              </div>
            </div>
            
            {user?.subscription_status === 'trial' && (
              <div className="flex-1 max-w-xs">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Trial progress</span>
                  <span className="font-medium">{30 - trialDaysLeft}/30 days</span>
                </div>
                <Progress value={trialProgress} className="h-2" />
              </div>
            )}
            
            <div className="flex gap-3">
              {user?.subscription_status === 'trial' && (
                <Button 
                  className="rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90"
                  data-testid="upgrade-plan-btn"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Upgrade Plan
                </Button>
              )}
              <Link to="/settings">
                <Button variant="outline" className="rounded-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/10">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Reminders</p>
                <p className="text-4xl font-heading font-semibold mt-2">{stats?.total_reminders || 0}</p>
              </div>
              <div className="p-3 rounded-2xl bg-[hsl(var(--primary))]/10">
                <Bell className="h-6 w-6 text-[hsl(var(--primary))]" strokeWidth={1.5} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-[hsl(var(--warning))]/5 to-[hsl(var(--warning))]/10">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-4xl font-heading font-semibold mt-2">{stats?.pending_reminders || 0}</p>
              </div>
              <div className="p-3 rounded-2xl bg-[hsl(var(--warning))]/10">
                <Clock className="h-6 w-6 text-[hsl(var(--warning))]" strokeWidth={1.5} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-[hsl(var(--success))]/5 to-[hsl(var(--success))]/10">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed Today</p>
                <p className="text-4xl font-heading font-semibold mt-2">{stats?.acknowledged_today || 0}</p>
              </div>
              <div className="p-3 rounded-2xl bg-[hsl(var(--success))]/10">
                <CheckCircle2 className="h-6 w-6 text-[hsl(var(--success))]" strokeWidth={1.5} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-[hsl(var(--secondary))]/10 to-[hsl(var(--secondary))]/20">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Team Members</p>
                <p className="text-4xl font-heading font-semibold mt-2">{allContacts.length || 0}</p>
              </div>
              <div className="p-3 rounded-2xl bg-[hsl(var(--secondary))]/20">
                <Users className="h-6 w-6 text-[hsl(var(--secondary-foreground))]" strokeWidth={1.5} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Habit Summary Widget */}
      {habitStats?.summary && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Habits</p>
                  <p className="text-4xl font-heading font-semibold mt-2">{habitStats.summary.total_habits || 0}</p>
                </div>
                <div className="p-3 rounded-2xl bg-orange-500/10">
                  <Target className="h-6 w-6 text-orange-500" strokeWidth={1.5} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-red-500/5 to-red-500/10">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Best Streak</p>
                  <p className="text-4xl font-heading font-semibold mt-2">{habitStats.summary.best_current_streak || 0}</p>
                </div>
                <div className="p-3 rounded-2xl bg-red-500/10">
                  <Flame className="h-6 w-6 text-red-500" strokeWidth={1.5} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-green-500/5 to-green-500/10">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completion Rate</p>
                  <p className="text-4xl font-heading font-semibold mt-2">{habitStats.summary.overall_completion_rate || 0}%</p>
                </div>
                <div className="p-3 rounded-2xl bg-green-500/10">
                  <CheckCircle2 className="h-6 w-6 text-green-500" strokeWidth={1.5} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Link to="/habits" className="block">
            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/10 h-full cursor-pointer">
              <CardContent className="p-6 flex flex-col justify-center items-center h-full">
                <p className="text-sm font-medium text-muted-foreground mb-2">View All Habits</p>
                <ArrowRight className="h-8 w-8 text-[hsl(var(--primary))]" strokeWidth={1.5} />
              </CardContent>
            </Card>
          </Link>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Reminders */}
        <Card className="lg:col-span-2 rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="font-heading text-xl">Recent Reminders</CardTitle>
              <Link to="/reminders" className="text-sm text-[hsl(var(--primary))] hover:underline flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentReminders.length === 0 ? (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">No reminders yet</p>
                <Link to="/reminders">
                  <Button variant="link" className="mt-2 text-[hsl(var(--primary))]">
                    Create your first reminder
                  </Button>
                </Link>
              </div>
            ) : (
              recentReminders.map((reminder, index) => (
                <div 
                  key={reminder.id}
                  className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{reminder.message}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      To: {reminder.recipient_name || reminder.recipient_phone}
                      {' • '}
                      {format(parseISO(reminder.scheduled_time), 'MMM d, h:mm a')}
                    </p>
                  </div>
                  <Badge variant="outline" className={`ml-4 ${getStatusColor(reminder.status)}`}>
                    {reminder.status}
                  </Badge>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Team Members / Contacts */}
        <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="font-heading text-xl">Your Team</CardTitle>
              <Link to="/contacts" className="text-sm text-[hsl(var(--primary))] hover:underline flex items-center gap-1">
                Manage <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <CardDescription>People you send reminders to</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {allContacts.length === 0 ? (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">No team members yet</p>
                <Link to="/contacts">
                  <Button variant="link" className="mt-2 text-[hsl(var(--primary))]">
                    Add your first contact
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                {allContacts.slice(0, 4).map((contact) => (
                  <div 
                    key={contact.id}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                      <span className="font-semibold text-[hsl(var(--primary))]">
                        {contact.name?.charAt(0)?.toUpperCase() || 'U'}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.phone}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={
                        contact.consent_status === 'approved' 
                          ? 'bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] border-[hsl(var(--success))]/20' 
                          : 'bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] border-[hsl(var(--warning))]/20'
                      }
                    >
                      {contact.consent_status}
                    </Badge>
                  </div>
                ))}
                {allContacts.length > 4 && (
                  <Link to="/contacts">
                    <Button variant="ghost" className="w-full rounded-full text-muted-foreground">
                      View all {allContacts.length} contacts
                    </Button>
                  </Link>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Pending Consents Alert */}
      {pendingContacts.length > 0 && (
        <Card className="rounded-3xl border-0 shadow-soft bg-gradient-to-r from-[hsl(var(--warning))]/5 to-[hsl(var(--warning))]/10 border border-[hsl(var(--warning))]/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[hsl(var(--warning))]/10">
                <AlertCircle className="h-6 w-6 text-[hsl(var(--warning))]" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold">Pending Consents</h3>
                <p className="text-sm text-muted-foreground">
                  {pendingContacts.length} contact{pendingContacts.length > 1 ? 's' : ''} haven't responded to your reminder consent request yet.
                </p>
              </div>
              <Link to="/contacts">
                <Button variant="outline" className="rounded-full border-[hsl(var(--warning))] text-[hsl(var(--warning))] hover:bg-[hsl(var(--warning))] hover:text-white">
                  View Pending
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <Card className="rounded-3xl border-0 shadow-soft bg-gradient-to-r from-[hsl(var(--primary))]/5 via-[hsl(var(--secondary))]/5 to-[hsl(var(--primary))]/5">
        <CardContent className="p-8">
          <h3 className="font-heading text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/reminders">
              <Button variant="outline" className="rounded-full border-2 hover:bg-[hsl(var(--primary))] hover:text-white hover:border-[hsl(var(--primary))] transition-all">
                <Bell className="mr-2 h-4 w-4" />
                Manage Reminders
              </Button>
            </Link>
            <Link to="/contacts">
              <Button variant="outline" className="rounded-full border-2 hover:bg-[hsl(var(--primary))] hover:text-white hover:border-[hsl(var(--primary))] transition-all">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Contact
              </Button>
            </Link>
            <Link to="/habits">
              <Button variant="outline" className="rounded-full border-2 hover:bg-[hsl(var(--primary))] hover:text-white hover:border-[hsl(var(--primary))] transition-all">
                <Target className="mr-2 h-4 w-4" />
                Track Habits
              </Button>
            </Link>
            <Link to="/messages">
              <Button variant="outline" className="rounded-full border-2 hover:bg-[hsl(var(--primary))] hover:text-white hover:border-[hsl(var(--primary))] transition-all">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message History
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
