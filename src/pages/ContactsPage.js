import { useState, useEffect } from 'react';
import { contactsAPI } from '../lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Plus, 
  Phone,
  User,
  Users,
  Trash2,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Clock,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';
import { format, parseISO } from 'date-fns';
import { cn } from '../lib/utils';

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [creating, setCreating] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    relationship: '',
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await contactsAPI.getAll();
      setContacts(response.data);
    } catch (error) {
      toast.error('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);

    try {
      await contactsAPI.create(formData);
      toast.success('Contact added successfully!');
      setIsDialogOpen(false);
      setFormData({ name: '', phone: '', relationship: '' });
      fetchContacts();
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to add contact');
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await contactsAPI.delete(id);
      toast.success('Contact deleted');
      fetchContacts();
    } catch (error) {
      toast.error('Failed to delete contact');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle2 className="h-4 w-4 text-success" />;
      case 'pending': return <Clock className="h-4 w-4 text-warning" />;
      case 'declined': return <XCircle className="h-4 w-4 text-destructive" />;
      case 'revoked': return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-success/10 text-success border-success/20';
      case 'pending': return 'bg-warning/10 text-warning border-warning/20';
      case 'declined': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'revoked': return 'bg-muted text-muted-foreground border-muted';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const stats = {
    total: contacts.length,
    approved: contacts.filter(c => c.consent_status === 'approved').length,
    pending: contacts.filter(c => c.consent_status === 'pending').length,
  };

  return (
    <div className="space-y-8 animate-fade-in" data-testid="contacts-page">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">
            Contacts
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your contacts and their consent status.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="rounded-full px-6 py-5 bg-primary hover:bg-primary/90 transition-all hover:scale-105"
              data-testid="add-contact-btn"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] rounded-3xl">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Add Contact</DialogTitle>
              <DialogDescription>
                Add a new contact to send reminders to. They will receive a consent request.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="Mom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-9 rounded-xl"
                    data-testid="contact-name-input"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    placeholder="+1234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-9 rounded-xl"
                    data-testid="contact-phone-input"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Include country code (e.g., +1 for US, +91 for India)
                </p>
              </div>

              <div className="space-y-2">
                <Label>Relationship (Optional)</Label>
                <Select 
                  value={formData.relationship} 
                  onValueChange={(value) => setFormData({ ...formData, relationship: value })}
                >
                  <SelectTrigger className="rounded-xl" data-testid="relationship-select">
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Family Member</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="colleague">Colleague</SelectItem>
                    <SelectItem value="team_member">Team Member</SelectItem>
                    <SelectItem value="subordinate">Subordinate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={creating}
                className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 transition-all"
                data-testid="add-contact-submit"
              >
                {creating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  'Add Contact'
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-2xl border-0 shadow-soft bg-gradient-to-br from-secondary/10 to-secondary/20">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Contacts</p>
                <p className="text-3xl font-heading font-semibold mt-1">{stats.total}</p>
              </div>
              <div className="p-3 rounded-xl bg-secondary/20">
                <Users className="h-5 w-5 text-secondary-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-soft bg-gradient-to-br from-success/5 to-success/10">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-3xl font-heading font-semibold mt-1">{stats.approved}</p>
              </div>
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-soft bg-gradient-to-br from-warning/5 to-warning/10">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Consent</p>
                <p className="text-3xl font-heading font-semibold mt-1">{stats.pending}</p>
              </div>
              <div className="p-3 rounded-xl bg-warning/10">
                <Clock className="h-5 w-5 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contacts List */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-muted-foreground">Loading contacts...</div>
        </div>
      ) : contacts.length === 0 ? (
        <Card className="rounded-3xl border-0 shadow-soft">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Users className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <h3 className="font-heading text-xl font-medium">No contacts yet</h3>
            <p className="text-muted-foreground mt-2 text-center max-w-md">
              Add your first contact to start sending reminders. They'll receive a consent request via WhatsApp.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {contacts.map((contact, index) => (
            <Card 
              key={contact.id}
              className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-lg">{contact.name}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {contact.phone}
                        </span>
                        {contact.relationship && (
                          <Badge variant="secondary" className="rounded-full capitalize">
                            {contact.relationship.replace('_', ' ')}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="outline" 
                      className={cn("flex items-center gap-1", getStatusColor(contact.consent_status))}
                    >
                      {getStatusIcon(contact.consent_status)}
                      {contact.consent_status === 'approved' ? 'Consented' : contact.consent_status}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => handleDelete(contact.id)}
                      data-testid={`delete-contact-${contact.id}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {contact.consent_date && (
                  <div className="mt-4 pt-4 border-t border-border/50 text-sm text-muted-foreground">
                    Consent given: {format(parseISO(contact.consent_date), 'PPP')}
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
