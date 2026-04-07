import { useState, useEffect } from 'react';
import { adminAPI } from '../lib/api';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ScrollArea } from '../components/ui/scroll-area';
import { 
  LayoutDashboard,
  Users,
  MessageSquare,
  Bell,
  Target,
  Activity,
  Server,
  Database,
  Shield,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Clock,
  CreditCard,
  AlertTriangle,
  RefreshCw,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Zap,
  Globe,
  Key,
  Send,
  QrCode,
  Link,
  UserPlus,
  Copy
} from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function AdminPage() {
  const [overview, setOverview] = useState(null);
  const [systemHealth, setSystemHealth] = useState(null);
  const [subscriptions, setSubscriptions] = useState(null);
  const [activityLog, setActivityLog] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [users, setUsers] = useState([]);
  const [whatsappLink, setWhatsappLink] = useState(null);
  const [onboardingStats, setOnboardingStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setRefreshing(true);
    try {
      const [overviewRes, healthRes, subsRes, activityRes, analyticsRes, usersRes, linkRes, onboardRes] = await Promise.all([
        adminAPI.getOverview(),
        adminAPI.getSystemHealth(),
        adminAPI.getSubscriptions(),
        adminAPI.getActivityLog(30),
        adminAPI.getAnalytics(),
        adminAPI.getUsers(),
        adminAPI.getWhatsAppLink(),
        adminAPI.getOnboardingStats()
      ]);
      setOverview(overviewRes.data);
      setSystemHealth(healthRes.data);
      setSubscriptions(subsRes.data);
      setActivityLog(activityRes.data.activities || []);
      setAnalytics(analyticsRes.data);
      setUsers(usersRes.data.users || []);
      setWhatsappLink(linkRes.data);
      setOnboardingStats(onboardRes.data);
    } catch (error) {
      console.error('Failed to fetch admin data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    try {
      return format(parseISO(dateStr), 'MMM d, yyyy HH:mm');
    } catch {
      return dateStr;
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'healthy': 'bg-green-500/10 text-green-600 border-green-500/20',
      'degraded': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      'error': 'bg-red-500/10 text-red-600 border-red-500/20',
      'trial': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      'active': 'bg-green-500/10 text-green-600 border-green-500/20',
      'expired': 'bg-red-500/10 text-red-600 border-red-500/20',
      'cancelled': 'bg-gray-500/10 text-gray-600 border-gray-500/20',
      'pending': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      'sent': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      'acknowledged': 'bg-green-500/10 text-green-600 border-green-500/20',
      'completed': 'bg-green-500/10 text-green-600 border-green-500/20',
      'missed': 'bg-red-500/10 text-red-600 border-red-500/20',
    };
    return colors[status] || 'bg-gray-500/10 text-gray-600 border-gray-500/20';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-muted-foreground">Loading admin dashboard...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in" data-testid="admin-page">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            System overview and management for Daisy
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={fetchAllData}
          disabled={refreshing}
          className="gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          Refresh Data
        </Button>
      </div>

      {/* System Health Banner */}
      <Card className={`rounded-2xl border-0 shadow-soft ${
        systemHealth?.status === 'healthy' 
          ? 'bg-gradient-to-r from-green-500/10 to-green-500/5' 
          : 'bg-gradient-to-r from-yellow-500/10 to-yellow-500/5'
      }`}>
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl ${
                systemHealth?.status === 'healthy' ? 'bg-green-500/10' : 'bg-yellow-500/10'
              }`}>
                {systemHealth?.status === 'healthy' 
                  ? <CheckCircle className="h-6 w-6 text-green-500" />
                  : <AlertTriangle className="h-6 w-6 text-yellow-500" />
                }
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  System Status: <span className={systemHealth?.status === 'healthy' ? 'text-green-600' : 'text-yellow-600'}>
                    {systemHealth?.status?.toUpperCase()}
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Last checked: {formatDate(systemHealth?.timestamp)}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className={getStatusColor(systemHealth?.integrations?.twilio?.configured ? 'healthy' : 'error')}>
                <Phone className="h-3 w-3 mr-1" />
                Twilio: {systemHealth?.integrations?.twilio?.configured ? 'Connected' : 'Not configured'}
              </Badge>
              <Badge variant="outline" className={getStatusColor(systemHealth?.integrations?.openai?.configured ? 'healthy' : 'error')}>
                <Zap className="h-3 w-3 mr-1" />
                OpenAI: {systemHealth?.integrations?.openai?.configured ? 'Connected' : 'Not configured'}
              </Badge>
              <Badge variant="outline" className={getStatusColor(systemHealth?.scheduler?.running ? 'healthy' : 'error')}>
                <Clock className="h-3 w-3 mr-1" />
                Scheduler: {systemHealth?.scheduler?.running ? 'Running' : 'Stopped'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted/50 p-1 rounded-2xl">
          <TabsTrigger value="overview" className="rounded-xl data-[state=active]:bg-background">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="onboarding" className="rounded-xl data-[state=active]:bg-background">
            <QrCode className="h-4 w-4 mr-2" />
            Onboarding
          </TabsTrigger>
          <TabsTrigger value="users" className="rounded-xl data-[state=active]:bg-background">
            <Users className="h-4 w-4 mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger value="activity" className="rounded-xl data-[state=active]:bg-background">
            <Activity className="h-4 w-4 mr-2" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="integrations" className="rounded-xl data-[state=active]:bg-background">
            <Server className="h-4 w-4 mr-2" />
            Integrations
          </TabsTrigger>
        </TabsList>

        {/* Onboarding Tab */}
        <TabsContent value="onboarding" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* QR Code & Links */}
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Share Daisy
                </CardTitle>
                <CardDescription>
                  Let users find and start using Daisy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* QR Code */}
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-white rounded-2xl shadow-soft">
                    <img 
                      src={whatsappLink?.qr_codes?.medium?.url || whatsappLink?.qr_code_url} 
                      alt="Scan to chat with Daisy" 
                      className="w-48 h-48"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Scan to start chatting with Daisy
                  </p>
                </div>

                {/* QR Code Download Options */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Download QR Code</label>
                  <div className="grid grid-cols-2 gap-2">
                    {whatsappLink?.qr_codes && Object.entries(whatsappLink.qr_codes).map(([size, data]) => (
                      <a
                        key={size}
                        href={data.url}
                        download={`daisy-qr-${size}.png`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-sm"
                      >
                        <span className="capitalize">{size}</span>
                        <Badge variant="outline" className="text-xs">{data.size}</Badge>
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Right-click and "Save image as" to download
                  </p>
                </div>

                {/* Landing Page Link */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Shareable Landing Page</label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 p-3 bg-muted/50 rounded-xl font-mono text-sm truncate">
                      {window.location.origin}/start
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(`${window.location.origin}/start`)}
                      className="shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Share this link for users to find Daisy with QR code and chat button
                  </p>
                </div>

                {/* Click-to-Chat Link */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Click-to-Chat Link</label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 p-3 bg-muted/50 rounded-xl font-mono text-sm truncate">
                      {whatsappLink?.click_to_chat_link}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(whatsappLink?.click_to_chat_link)}
                      className="shrink-0"
                    >
                      {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Daisy's WhatsApp Number</p>
                      <p className="font-semibold text-green-600">{whatsappLink?.whatsapp_number}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Onboarding Stats */}
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  User Onboarding Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* User Type Breakdown */}
                <div>
                  <h4 className="text-sm font-medium mb-3">User Types</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-green-500/10">
                      <p className="text-2xl font-semibold text-green-600">
                        {onboardingStats?.user_type_breakdown?.active_users || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Active Users</p>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-500/10">
                      <p className="text-2xl font-semibold text-blue-600">
                        {onboardingStats?.user_type_breakdown?.recipients_only || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Recipients Only (Free)</p>
                    </div>
                    <div className="p-4 rounded-xl bg-yellow-500/10">
                      <p className="text-2xl font-semibold text-yellow-600">
                        {onboardingStats?.user_type_breakdown?.pending_consent || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Pending Consent</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-500/10">
                      <p className="text-2xl font-semibold text-gray-600">
                        {onboardingStats?.user_type_breakdown?.declined || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Declined</p>
                    </div>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Conversion Rate</p>
                      <p className="text-3xl font-semibold">{onboardingStats?.conversion_rate || 0}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-primary/50" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    WhatsApp users → Active users
                  </p>
                </div>

                {/* Subscription Breakdown */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Subscriptions</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm">Trial</span>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-600">
                        {onboardingStats?.subscription_breakdown?.trial || 0}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm">Paid</span>
                      <Badge variant="outline" className="bg-green-500/10 text-green-600">
                        {onboardingStats?.subscription_breakdown?.paid || 0}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm">Expired</span>
                      <Badge variant="outline" className="bg-red-500/10 text-red-600">
                        {onboardingStats?.subscription_breakdown?.expired || 0}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* User Flow Explanation */}
          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="font-heading text-lg">User Onboarding Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">1</div>
                    <h4 className="font-medium">New User</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    User scans QR or clicks link → Sends first message → Receives privacy consent request
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">2</div>
                    <h4 className="font-medium">Active User</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    User replies "AGREE" → 30-day trial starts → Can use all Daisy features
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">3</div>
                    <h4 className="font-medium">Recipient</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receives reminders from others → FREE forever → Can upgrade to user anytime
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Card className="rounded-2xl border-0 shadow-soft hover:shadow-floating transition-all">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <Badge variant="outline" className="text-xs">Total</Badge>
                </div>
                <p className="text-3xl font-heading font-semibold">{overview?.overview?.total_registered_users || 0}</p>
                <p className="text-xs text-muted-foreground">Web Users</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft hover:shadow-floating transition-all">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Phone className="h-5 w-5 text-green-500" />
                  <Badge variant="outline" className="text-xs">WhatsApp</Badge>
                </div>
                <p className="text-3xl font-heading font-semibold">{overview?.overview?.total_whatsapp_users || 0}</p>
                <p className="text-xs text-muted-foreground">WA Users</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft hover:shadow-floating transition-all">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Bell className="h-5 w-5 text-orange-500" />
                  <Badge variant="outline" className="text-xs">Total</Badge>
                </div>
                <p className="text-3xl font-heading font-semibold">{overview?.overview?.total_reminders || 0}</p>
                <p className="text-xs text-muted-foreground">Reminders</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft hover:shadow-floating transition-all">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Target className="h-5 w-5 text-purple-500" />
                  <Badge variant="outline" className="text-xs">Active</Badge>
                </div>
                <p className="text-3xl font-heading font-semibold">{overview?.habits_breakdown?.active || 0}</p>
                <p className="text-xs text-muted-foreground">Habits</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft hover:shadow-floating transition-all">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <MessageSquare className="h-5 w-5 text-cyan-500" />
                  <Badge variant="outline" className="text-xs">Total</Badge>
                </div>
                <p className="text-3xl font-heading font-semibold">{overview?.overview?.total_messages || 0}</p>
                <p className="text-xs text-muted-foreground">Messages</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft hover:shadow-floating transition-all">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-5 w-5 text-pink-500" />
                  <Badge variant="outline" className="text-xs">Teams</Badge>
                </div>
                <p className="text-3xl font-heading font-semibold">{overview?.overview?.total_teams || 0}</p>
                <p className="text-xs text-muted-foreground">Teams</p>
              </CardContent>
            </Card>
          </div>

          {/* Subscriptions & Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Subscription Summary */}
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Subscription Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-blue-500/10">
                    <p className="text-sm text-muted-foreground mb-1">Trial Users</p>
                    <p className="text-2xl font-semibold text-blue-600">{subscriptions?.summary?.trial || 0}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10">
                    <p className="text-sm text-muted-foreground mb-1">Active Paid</p>
                    <p className="text-2xl font-semibold text-green-600">{subscriptions?.summary?.active || 0}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-500/10">
                    <p className="text-sm text-muted-foreground mb-1">Expired</p>
                    <p className="text-2xl font-semibold text-red-600">{subscriptions?.summary?.expired || 0}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-500/10">
                    <p className="text-sm text-muted-foreground mb-1">Cancelled</p>
                    <p className="text-2xl font-semibold text-gray-600">{subscriptions?.summary?.cancelled || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reminders Breakdown */}
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Reminders Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-yellow-500/10">
                    <p className="text-sm text-muted-foreground mb-1">Pending</p>
                    <p className="text-2xl font-semibold text-yellow-600">{overview?.reminders_breakdown?.pending || 0}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-500/10">
                    <p className="text-sm text-muted-foreground mb-1">Sent</p>
                    <p className="text-2xl font-semibold text-blue-600">{overview?.reminders_breakdown?.sent || 0}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10">
                    <p className="text-sm text-muted-foreground mb-1">Acknowledged</p>
                    <p className="text-2xl font-semibold text-green-600">{overview?.reminders_breakdown?.acknowledged || 0}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-orange-500/10">
                    <p className="text-sm text-muted-foreground mb-1">Awaiting Consent</p>
                    <p className="text-2xl font-semibold text-orange-600">{overview?.reminders_breakdown?.awaiting_consent || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Habits & Contacts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Habits Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-green-500/10">
                    <p className="text-2xl font-semibold text-green-600">{overview?.habits_breakdown?.active || 0}</p>
                    <p className="text-xs text-muted-foreground">Active</p>
                  </div>
                  <div className="p-4 rounded-xl bg-yellow-500/10">
                    <p className="text-2xl font-semibold text-yellow-600">{overview?.habits_breakdown?.paused || 0}</p>
                    <p className="text-xs text-muted-foreground">Paused</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-500/10">
                    <p className="text-2xl font-semibold text-blue-600">{overview?.habits_breakdown?.total_logs || 0}</p>
                    <p className="text-xs text-muted-foreground">Total Logs</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Completion Rate</span>
                  <span className="font-medium">
                    {overview?.habits_breakdown?.total_logs > 0 
                      ? Math.round((overview?.habits_breakdown?.completed_logs / overview?.habits_breakdown?.total_logs) * 100)
                      : 0}%
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Contacts & Consent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="text-2xl font-semibold">{overview?.overview?.total_contacts || 0}</p>
                    <p className="text-xs text-muted-foreground">Total</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10">
                    <p className="text-2xl font-semibold text-green-600">{overview?.contacts_breakdown?.approved || 0}</p>
                    <p className="text-xs text-muted-foreground">Approved</p>
                  </div>
                  <div className="p-4 rounded-xl bg-yellow-500/10">
                    <p className="text-2xl font-semibold text-yellow-600">{overview?.contacts_breakdown?.pending || 0}</p>
                    <p className="text-xs text-muted-foreground">Pending</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 30-Day Analytics */}
          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                30-Day Activity Summary
              </CardTitle>
              <CardDescription>
                {analytics?.period?.start ? `${formatDate(analytics.period.start).split(',')[0]} - ${formatDate(analytics.period.end).split(',')[0]}` : ''}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-heading font-semibold text-cyan-600">{analytics?.totals?.messages || 0}</p>
                  <p className="text-sm text-muted-foreground">Messages</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-heading font-semibold text-orange-600">{analytics?.totals?.reminders || 0}</p>
                  <p className="text-sm text-muted-foreground">Reminders Created</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-heading font-semibold text-blue-600">{analytics?.totals?.signups || 0}</p>
                  <p className="text-sm text-muted-foreground">New Signups</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-heading font-semibold text-purple-600">{analytics?.totals?.habit_logs || 0}</p>
                  <p className="text-sm text-muted-foreground">Habit Logs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-6">
          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Registered Users</CardTitle>
              <CardDescription>{users.length} total users</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <div className="space-y-3">
                  {users.map((user, index) => (
                    <div 
                      key={user.id} 
                      className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold truncate">{user.name}</h4>
                            <Badge variant="outline" className={getStatusColor(user.subscription_status || 'trial')}>
                              {user.subscription_status || 'trial'}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Mail className="h-3.5 w-3.5" />
                              {user.email}
                            </span>
                            {user.phone && (
                              <span className="flex items-center gap-1">
                                <Phone className="h-3.5 w-3.5" />
                                {user.phone}
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              Joined: {formatDate(user.created_at).split(',')[0]}
                            </span>
                          </div>
                        </div>
                        {user.trial_end && (
                          <div className="text-right text-sm">
                            <p className="text-muted-foreground">Trial ends</p>
                            <p className="font-medium">{formatDate(user.trial_end).split(',')[0]}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {users.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No users found
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Trial Users Alert */}
          {subscriptions?.trial_users?.length > 0 && (
            <Card className="rounded-2xl border-0 shadow-soft bg-gradient-to-r from-blue-500/5 to-blue-500/10">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Users on Trial ({subscriptions.trial_users.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {subscriptions.trial_users.slice(0, 5).map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-600">
                        {user.days_remaining} days left
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-6">
          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Last 30 system events</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-3">
                  {activityLog.map((activity, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <div className={`p-2 rounded-xl ${
                        activity.type === 'message' ? 'bg-cyan-500/10' :
                        activity.type === 'reminder' ? 'bg-orange-500/10' :
                        'bg-purple-500/10'
                      }`}>
                        {activity.type === 'message' ? <MessageSquare className="h-4 w-4 text-cyan-500" /> :
                         activity.type === 'reminder' ? <Bell className="h-4 w-4 text-orange-500" /> :
                         <Target className="h-4 w-4 text-purple-500" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className={getStatusColor(activity.status || activity.direction)}>
                            {activity.status || activity.direction}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(activity.timestamp)}
                          </span>
                        </div>
                        {activity.type === 'message' && (
                          <p className="text-sm truncate">{activity.from} → {activity.to}: {activity.preview}</p>
                        )}
                        {activity.type === 'reminder' && (
                          <p className="text-sm truncate">To {activity.recipient}: {activity.message}</p>
                        )}
                        {activity.type === 'habit' && (
                          <p className="text-sm truncate">{activity.habit_name} - {activity.user_phone}</p>
                        )}
                      </div>
                    </div>
                  ))}
                  {activityLog.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No recent activity
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Twilio Integration */}
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Twilio (WhatsApp)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="outline" className={getStatusColor(systemHealth?.integrations?.twilio?.configured ? 'healthy' : 'error')}>
                    {systemHealth?.integrations?.twilio?.configured ? 'Connected' : 'Not Configured'}
                  </Badge>
                </div>
                {systemHealth?.integrations?.twilio?.whatsapp_number && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">WhatsApp Number</span>
                    <span className="font-mono text-sm">{systemHealth.integrations.twilio.whatsapp_number}</span>
                  </div>
                )}
                <div className="p-4 rounded-xl bg-muted/30">
                  <p className="text-sm text-muted-foreground mb-2">Usage (30 days)</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-semibold">{analytics?.totals?.messages || 0}</p>
                      <p className="text-xs text-muted-foreground">Total Messages</p>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">{analytics?.totals?.reminders || 0}</p>
                      <p className="text-xs text-muted-foreground">Reminders Sent</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OpenAI Integration */}
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  OpenAI (GPT-5.2)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="outline" className={getStatusColor(systemHealth?.integrations?.openai?.configured ? 'healthy' : 'error')}>
                    {systemHealth?.integrations?.openai?.configured ? 'Connected' : 'Not Configured'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Model</span>
                  <span className="font-mono text-sm">{systemHealth?.integrations?.openai?.model || 'N/A'}</span>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <p className="text-sm text-muted-foreground mb-2">Key Info</p>
                  <div className="flex items-center gap-2">
                    <Key className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Using Emergent LLM Key</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Monitor usage at Profile → Universal Key
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Database Info */}
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Database (MongoDB)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="outline" className={getStatusColor(systemHealth?.database?.status === 'healthy' ? 'healthy' : 'error')}>
                    {systemHealth?.database?.status || 'Unknown'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Database Name</span>
                  <span className="font-mono text-sm">{systemHealth?.database?.name || 'N/A'}</span>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <p className="text-sm text-muted-foreground mb-2">Collections</p>
                  <div className="flex flex-wrap gap-2">
                    {overview?.database?.collections?.map((col) => (
                      <Badge key={col} variant="outline" className="text-xs">{col}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scheduler Info */}
            <Card className="rounded-2xl border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Background Scheduler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="outline" className={getStatusColor(systemHealth?.scheduler?.running ? 'healthy' : 'error')}>
                    {systemHealth?.scheduler?.running ? 'Running' : 'Stopped'}
                  </Badge>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <p className="text-sm text-muted-foreground mb-2">Active Jobs</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Reminder Checker (1 min)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Habit Reminder (1 min)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Follow-up Checker (5 min)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Consent Reminders (1 hour)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Environment Info */}
          <Card className="rounded-2xl border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="font-heading text-lg flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Environment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <span className="text-muted-foreground">Frontend URL</span>
                  <span className="font-mono text-sm truncate max-w-[300px]">{systemHealth?.environment?.frontend_url || 'Not set'}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <span className="text-muted-foreground">CORS Origins</span>
                  <span className="font-mono text-sm">{systemHealth?.environment?.cors_origins || '*'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
