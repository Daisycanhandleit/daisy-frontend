import { useState, useEffect } from 'react';
import { remindersAPI, contactsAPI } from '../lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { 
  Plus, 
  Calendar as CalendarIcon, 
  Clock, 
  Phone,
  User,
  Bell,
  Trash2,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';
import { format, parseISO, set } from 'date-fns';
import { cn } from '../lib/utils';

export default function RemindersPage() {
  const [reminders, setReminders] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [filter, setFilter] = useState('all');

  const [formData, setFormData] = useState({
    message: '',
    recipient_phone: '',
    recipient_name: '',
    scheduled_date: new Date(),
    scheduled_time: '09:00',
    recurrence: 'once',
  });

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {
    try {
      const [remindersRes, contactsRes] = await Promise.all([
        remindersAPI.getAll(filter !== 'all' ? filter : null),
        contactsAPI.getAll(),
      ]);
      setReminders(remindersRes.data);
      setContacts(contactsRes.data);
    } catch (error) {
      toast.error('Failed to fetch reminders');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);

    try {
      // Combine date and time
      const [hours, minutes] = formData.scheduled_time.split(':');
      const scheduledDateTime = set(formData.scheduled_date, {
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: 0,
      });

      await remindersAPI.create({
        message: formData.message,
        recipient_phone: formData.recipient_phone,
        recipient_name: formData.recipient_name,
        scheduled_time: scheduledDateTime.toISOString(),
        recurrence: formData.recurrence,
      });

      toast.success('Reminder created successfully!');
      setIsDialogOpen(false);
      setFormData({
        message: '',
        recipient_phone: '',
        recipient_name: '',
        scheduled_date: new Date(),
        scheduled_time: '09:00',
        recurrence: 'once',
      });
      fetchData();
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to create reminder');
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await remindersAPI.delete(id);
      toast.success('Reminder cancelled');
      fetchData();
    } catch (error) {
      toast.error('Failed to cancel reminder');
    }
  };

  const handleContactSelect = (phone) => {
    const contact = contacts.find(c => c.phone === phone);
    if (contact) {
      setFormData({
        ...formData,
        recipient_phone: contact.phone,
        recipient_name: contact.name,
      });
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'acknowledged': return <CheckCircle2 className="h-4 w-4 text-success" />;
      case 'sent': return <Bell className="h-4 w-4 text-info" />;
      case 'pending': return <Clock className="h-4 w-4 text-warning" />;
      case 'failed': return <AlertCircle className="h-4 w-4 text-destructive" />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'acknowledged': return 'bg-success/10 text-success border-success/20';
      case 'sent': return 'bg-info/10 text-info border-info/20';
      case 'pending': return 'bg-warning/10 text-warning border-warning/20';
      case 'failed': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'cancelled': return 'bg-muted text-muted-foreground border-muted';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getRecurrenceLabel = (recurrence) => {
    switch (recurrence) {
      case 'daily': return 'Daily';
      case 'weekly': return 'Weekly';
      case 'monthly': return 'Monthly';
      default: return 'One-time';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in" data-testid="reminders-page">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">
            Reminders
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your reminders and delegate tasks to others.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="rounded-full px-6 py-5 bg-primary hover:bg-primary/90 transition-all hover:scale-105"
              data-testid="new-reminder-btn"
            >
              <Plus className="mr-2 h-4 w-4" />
              New Reminder
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] rounded-3xl">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Create Reminder</DialogTitle>
              <DialogDescription>
                Set up a new reminder for yourself or delegate to someone else.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              <div className="space-y-2">
                <Label htmlFor="message">What to remind about?</Label>
                <Textarea
                  id="message"
                  placeholder="e.g., Take blood pressure medicine"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl min-h-[80px] resize-none"
                  data-testid="reminder-message-input"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Recipient Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="+1234567890"
                      value={formData.recipient_phone}
                      onChange={(e) => setFormData({ ...formData, recipient_phone: e.target.value })}
                      className="pl-9 rounded-xl"
                      data-testid="reminder-phone-input"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Recipient Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Mom"
                      value={formData.recipient_name}
                      onChange={(e) => setFormData({ ...formData, recipient_name: e.target.value })}
                      className="pl-9 rounded-xl"
                      data-testid="reminder-name-input"
                    />
                  </div>
                </div>
              </div>

              {contacts.length > 0 && (
                <div className="space-y-2">
                  <Label>Or select from contacts</Label>
                  <Select onValueChange={handleContactSelect}>
                    <SelectTrigger className="rounded-xl" data-testid="contact-select">
                      <SelectValue placeholder="Select a contact" />
                    </SelectTrigger>
                    <SelectContent>
                      {contacts.map((contact) => (
                        <SelectItem key={contact.id} value={contact.phone}>
                          {contact.name} ({contact.phone})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-xl",
                          !formData.scheduled_date && "text-muted-foreground"
                        )}
                        data-testid="reminder-date-btn"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.scheduled_date ? format(formData.scheduled_date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 rounded-xl" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.scheduled_date}
                        onSelect={(date) => date && setFormData({ ...formData, scheduled_date: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="time"
                      value={formData.scheduled_time}
                      onChange={(e) => setFormData({ ...formData, scheduled_time: e.target.value })}
                      className="pl-9 rounded-xl"
                      data-testid="reminder-time-input"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Recurrence</Label>
                <Select 
                  value={formData.recurrence} 
                  onValueChange={(value) => setFormData({ ...formData, recurrence: value })}
                >
                  <SelectTrigger className="rounded-xl" data-testid="recurrence-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="once">One-time</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={creating}
                className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 transition-all"
                data-testid="create-reminder-submit"
              >
                {creating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  'Create Reminder'
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {['all', 'pending', 'sent', 'acknowledged', 'cancelled'].map((status) => (
          <Button
            key={status}
            variant={filter === status ? 'default' : 'outline'}
            size="sm"
            className={cn(
              "rounded-full capitalize",
              filter === status && "bg-primary text-white"
            )}
            onClick={() => setFilter(status)}
            data-testid={`filter-${status}-btn`}
          >
            {status}
          </Button>
        ))}
      </div>

      {/* Reminders List */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-muted-foreground">Loading reminders...</div>
        </div>
      ) : reminders.length === 0 ? (
        <Card className="rounded-3xl border-0 shadow-soft">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Bell className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <h3 className="font-heading text-xl font-medium">No reminders yet</h3>
            <p className="text-muted-foreground mt-2 text-center max-w-md">
              Create your first reminder to start delegating tasks and never forget important things again.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {reminders.map((reminder, index) => (
            <Card 
              key={reminder.id}
              className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-primary/10 mt-1">
                        <Bell className="h-5 w-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-lg">{reminder.message}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {reminder.recipient_name || reminder.recipient_phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            {format(parseISO(reminder.scheduled_time), 'MMM d, yyyy')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {format(parseISO(reminder.scheduled_time), 'h:mm a')}
                          </span>
                          {reminder.recurrence !== 'once' && (
                            <span className="flex items-center gap-1">
                              <RefreshCw className="h-4 w-4" />
                              {getRecurrenceLabel(reminder.recurrence)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="outline" 
                      className={cn("flex items-center gap-1", getStatusColor(reminder.status))}
                    >
                      {getStatusIcon(reminder.status)}
                      {reminder.status}
                    </Badge>
                    {reminder.status !== 'cancelled' && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-destructive/10 hover:text-destructive"
                        onClick={() => handleDelete(reminder.id)}
                        data-testid={`delete-reminder-${reminder.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                {reminder.follow_up_count > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/50 text-sm text-muted-foreground">
                    Follow-up attempts: {reminder.follow_up_count}
                    {reminder.acknowledgment && (
                      <span className="ml-4 text-success">
                        Response: "{reminder.acknowledgment}"
                      </span>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
