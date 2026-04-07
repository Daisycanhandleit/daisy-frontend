import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { authAPI, settingsAPI } from '../lib/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { 
  User,
  Phone,
  Globe,
  Settings2,
  MessageSquareText,
  CheckCircle2,
  XCircle,
  Loader2,
  Crown,
  Clock,
  Sun,
  Moon,
  Bell,
  CreditCard
} from 'lucide-react';
import { toast } from 'sonner';
import { format, parseISO, differenceInDays } from 'date-fns';

export default function SettingsPage() {
  const { user, updateUser } = useAuth();
  const [twilioConfigured, setTwilioConfigured] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMessaging, setLoadingMessaging] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    timezone: user?.timezone || 'Australia/Sydney',
  });
  const [messagingSettings, setMessagingSettings] = useState({
    morning_agenda_time: '07:00',
    evening_wrapup_time: '21:00',
    agenda_enabled: true
  });

  useEffect(() => {
    checkTwilioStatus();
    fetchMessagingSettings();
  }, []);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
        timezone: user.timezone || 'Australia/Sydney',
      });
    }
  }, [user]);

  const checkTwilioStatus = async () => {
    try {
      const response = await settingsAPI.getTwilioStatus();
      setTwilioConfigured(response.data.configured);
    } catch (error) {
      console.error('Failed to check Twilio status:', error);
    }
  };

  const fetchMessagingSettings = async () => {
    try {
      const response = await settingsAPI.getSmartMessaging();
      setMessagingSettings(response.data);
    } catch (error) {
      console.error('Failed to fetch messaging settings:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authAPI.updateProfile({
        name: formData.name,
        phone: formData.phone,
        timezone_str: formData.timezone,
      });
      
      updateUser({
        ...user,
        name: formData.name,
        phone: formData.phone,
        timezone: formData.timezone,
      });
      
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleMessagingSubmit = async (e) => {
    e.preventDefault();
    setLoadingMessaging(true);

    try {
      await settingsAPI.updateSmartMessaging(messagingSettings);
      toast.success('Messaging settings updated!');
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to update messaging settings');
    } finally {
      setLoadingMessaging(false);
    }
  };

  const trialDaysLeft = user?.trial_end 
    ? Math.max(0, differenceInDays(parseISO(user.trial_end), new Date()))
    : 0;

  return (
    <div className="space-y-8 animate-fade-in" data-testid="settings-page">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[hsl(var(--brown))]">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your account, preferences, and notification settings.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile Settings */}
        <Card className="rounded-3xl border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center gap-2">
              <User className="h-5 w-5 text-[hsl(var(--primary))]" />
              Profile Settings
            </CardTitle>
            <CardDescription>
              Update your personal information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl"
                  data-testid="settings-name-input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    placeholder="+61400000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-9 rounded-xl"
                    data-testid="settings-phone-input"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  This connects your account to Daisy on WhatsApp
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="timezone"
                    placeholder="Australia/Sydney"
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                    className="pl-9 rounded-xl"
                    data-testid="settings-timezone-input"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  All reminders will be scheduled in this timezone
                </p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90"
                data-testid="save-settings-btn"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Subscription Status */}
        <Card className="rounded-3xl border-0 shadow-soft bg-gradient-to-br from-[hsl(var(--secondary))]/10 to-[hsl(var(--secondary))]/20">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center gap-2">
              <Crown className="h-5 w-5 text-[hsl(var(--secondary-foreground))]" />
              Subscription
            </CardTitle>
            <CardDescription>
              Your current plan and billing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-2xl bg-white/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Current Plan</span>
                <Badge 
                  variant="outline" 
                  className={`
                    ${user?.subscription_status === 'trial' 
                      ? 'bg-[hsl(var(--info))]/10 text-[hsl(var(--info))] border-[hsl(var(--info))]/20' 
                      : 'bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] border-[hsl(var(--success))]/20'}
                  `}
                >
                  {user?.subscription_status === 'trial' ? 'Free Trial' : user?.subscription_status}
                </Badge>
              </div>
              {user?.subscription_status === 'trial' && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Trial ends</span>
                    <span className="font-medium">
                      {user?.trial_end && format(parseISO(user.trial_end), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <div className="mt-2 p-3 rounded-xl bg-[hsl(var(--warning))]/10 text-sm">
                    <span className="font-medium text-[hsl(var(--warning))]">{trialDaysLeft} days</span>
                    <span className="text-muted-foreground"> remaining in your trial</span>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/30">
                <span className="text-sm">Started</span>
                <span className="text-sm font-medium">
                  {user?.created_at && format(parseISO(user.created_at), 'MMM d, yyyy')}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/30">
                <span className="text-sm">Email</span>
                <span className="text-sm font-medium">{user?.email}</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full rounded-full border-2 hover:bg-[hsl(var(--primary))] hover:text-white hover:border-[hsl(var(--primary))]"
              data-testid="upgrade-btn"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              {user?.subscription_status === 'trial' ? 'Upgrade Plan' : 'Manage Billing'}
            </Button>
          </CardContent>
        </Card>

        {/* Smart Messaging Settings */}
        <Card className="rounded-3xl border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center gap-2">
              <Bell className="h-5 w-5 text-[hsl(var(--primary))]" />
              Smart Messaging
            </CardTitle>
            <CardDescription>
              Configure your morning agenda and evening wrap-up times
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleMessagingSubmit} className="space-y-5">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Daily Agenda & Wrap-up</p>
                    <p className="text-sm text-muted-foreground">Receive daily summaries</p>
                  </div>
                </div>
                <Switch
                  checked={messagingSettings.agenda_enabled}
                  onCheckedChange={(checked) => setMessagingSettings({ ...messagingSettings, agenda_enabled: checked })}
                  data-testid="agenda-enabled-switch"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="morning_time" className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-[hsl(var(--warning))]" />
                  Morning Agenda Time
                </Label>
                <Input
                  id="morning_time"
                  type="time"
                  value={messagingSettings.morning_agenda_time}
                  onChange={(e) => setMessagingSettings({ ...messagingSettings, morning_agenda_time: e.target.value })}
                  className="rounded-xl"
                  disabled={!messagingSettings.agenda_enabled}
                  data-testid="morning-agenda-time"
                />
                <p className="text-xs text-muted-foreground">
                  Get a summary of today's reminders and tasks
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="evening_time" className="flex items-center gap-2">
                  <Moon className="h-4 w-4 text-[hsl(var(--info))]" />
                  Evening Wrap-up Time
                </Label>
                <Input
                  id="evening_time"
                  type="time"
                  value={messagingSettings.evening_wrapup_time}
                  onChange={(e) => setMessagingSettings({ ...messagingSettings, evening_wrapup_time: e.target.value })}
                  className="rounded-xl"
                  disabled={!messagingSettings.agenda_enabled}
                  data-testid="evening-wrapup-time"
                />
                <p className="text-xs text-muted-foreground">
                  Review what you completed and what's pending
                </p>
              </div>

              <Button
                type="submit"
                disabled={loadingMessaging}
                className="w-full rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90"
                data-testid="save-messaging-btn"
              >
                {loadingMessaging ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Messaging Settings'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* WhatsApp Integration Status */}
        <Card className="rounded-3xl border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center gap-2">
              <MessageSquareText className="h-5 w-5 text-[hsl(var(--primary))]" />
              WhatsApp Connection
            </CardTitle>
            <CardDescription>
              Your WhatsApp integration status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30">
              {twilioConfigured ? (
                <>
                  <div className="p-3 rounded-full bg-[hsl(var(--success))]/10">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--success))]" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp is Connected</p>
                    <p className="text-sm text-muted-foreground">
                      Daisy can send and receive WhatsApp messages
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 rounded-full bg-[hsl(var(--warning))]/10">
                    <XCircle className="h-6 w-6 text-[hsl(var(--warning))]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">WhatsApp Not Configured</p>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp integration is being set up by the admin
                    </p>
                  </div>
                </>
              )}
            </div>

            {formData.phone && (
              <div className="mt-4 p-4 rounded-2xl bg-[hsl(var(--success))]/5 border border-[hsl(var(--success))]/10">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[hsl(var(--success))]" />
                  <div>
                    <p className="text-sm text-muted-foreground">Linked Phone Number</p>
                    <p className="font-semibold text-[hsl(var(--success))]">{formData.phone}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="rounded-3xl border-0 shadow-soft border border-[hsl(var(--destructive))]/20">
        <CardHeader>
          <CardTitle className="font-heading text-xl text-[hsl(var(--destructive))]">
            Danger Zone
          </CardTitle>
          <CardDescription>
            Irreversible actions for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[hsl(var(--destructive))]/5">
            <div>
              <p className="font-medium">Delete Account</p>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all associated data
              </p>
            </div>
            <Button 
              variant="outline" 
              className="rounded-full border-[hsl(var(--destructive))] text-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive))] hover:text-white"
              data-testid="delete-account-btn"
            >
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
