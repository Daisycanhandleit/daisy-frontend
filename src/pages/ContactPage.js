import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  ArrowLeft, 
  Mail, 
  MessageSquare, 
  Send, 
  MapPin,
  Clock,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending (in production, this would be an API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSending(false);
    setSent(true);
    toast.success('Message sent! We\'ll get back to you soon.');
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSent(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(35,25%,94%)] to-[hsl(var(--soft-green))]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between glass-card rounded-full px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://customer-assets.emergentagent.com/job_acdec2a8-84c0-4800-bcf1-87a6f1182559/artifacts/vhma62te_daisy.png" alt="Daisy" className="h-8 w-8 rounded-full" />
            <span className="font-heading text-xl font-semibold text-[hsl(var(--brown))]">Daisy</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="rounded-full gap-2" data-testid="back-home-btn">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[hsl(var(--primary))]/10 mb-4">
              <MessageSquare className="h-8 w-8 text-[hsl(var(--primary))]" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-[hsl(var(--brown))]">
              Get in Touch
            </h1>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              Have questions about Daisy? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              {/* Email Card */}
              <Card className="rounded-3xl border-0 shadow-soft bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-[hsl(var(--primary))]/10">
                      <Mail className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">Email Us</h3>
                      <p className="text-muted-foreground text-sm">hello@daisycanhandleit.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="rounded-3xl border-0 shadow-soft bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-[hsl(var(--success))]/10">
                      <MessageSquare className="h-6 w-6 text-[hsl(var(--success))]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">Chat with Daisy</h3>
                      <p className="text-muted-foreground text-sm">Message us on WhatsApp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="rounded-3xl border-0 shadow-soft bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-[hsl(var(--secondary))]/20">
                      <Clock className="h-6 w-6 text-[hsl(var(--secondary-foreground))]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">Response Time</h3>
                      <p className="text-muted-foreground text-sm">Usually within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="rounded-3xl border-0 shadow-soft bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-[hsl(var(--info))]/10">
                      <MapPin className="h-6 w-6 text-[hsl(var(--info))]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">Location</h3>
                      <p className="text-muted-foreground text-sm">Sydney, Australia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <Card className="rounded-3xl border-0 shadow-soft bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="font-heading text-xl font-semibold mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-xl"
                          required
                          data-testid="contact-name-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl"
                          required
                          data-testid="contact-email-input"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="rounded-xl"
                        required
                        data-testid="contact-subject-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl min-h-[150px]"
                        required
                        data-testid="contact-message-input"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={sending || sent}
                      className="w-full rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 py-6"
                      data-testid="contact-submit-btn"
                    >
                      {sent ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Message Sent!
                        </>
                      ) : sending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Looking for answers? Check out our{' '}
                  <Link to="/about" className="text-[hsl(var(--primary))] hover:underline">
                    About page
                  </Link>{' '}
                  for more information about how Daisy works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border/50 bg-white/50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="https://customer-assets.emergentagent.com/job_acdec2a8-84c0-4800-bcf1-87a6f1182559/artifacts/vhma62te_daisy.png" alt="Daisy" className="h-6 w-6 rounded-full" />
            <span className="font-heading font-medium">Daisy</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
