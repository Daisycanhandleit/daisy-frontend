import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  MessageSquare, 
  Bell, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  Sparkles,
  Heart,
  Target,
  Mic
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(35,25%,94%)] to-[hsl(var(--soft-pink))]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between glass-card rounded-full px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://customer-assets.emergentagent.com/job_acdec2a8-84c0-4800-bcf1-87a6f1182559/artifacts/vhma62te_daisy.png" alt="Daisy" className="h-8 w-8 rounded-full" />
            <span className="font-heading text-xl font-semibold text-[hsl(var(--brown))]">Daisy</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="rounded-full" data-testid="nav-login-btn">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 px-6" data-testid="nav-signup-btn">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Your AI-Powered Digital Caregiver
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[hsl(var(--brown))] leading-tight">
            Daisy will handle it.
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your warm, caring AI assistant on WhatsApp. Set reminders, build habits, 
            and care for your family — all through natural conversation.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/start">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                data-testid="hero-cta-btn"
              >
                Start Free on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              30 days free • No credit card required
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--secondary))]/30 border-2 border-white flex items-center justify-center text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Trusted by families across Australia</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[hsl(var(--brown))]">
              Why families love Daisy
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              More than just reminders — Daisy is your family's digital caregiver who never forgets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-6">
                  <MessageSquare className="h-7 w-7 text-[hsl(var(--primary))]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">WhatsApp Native</h3>
                <p className="text-muted-foreground">
                  Text or send voice notes to Daisy just like a real friend. No app to download.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--secondary))]/30 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-[hsl(var(--secondary-foreground))]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Care for Family</h3>
                <p className="text-muted-foreground">
                  Set reminders for parents, kids, or anyone you care about — with their consent.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--success))]/10 flex items-center justify-center mb-6">
                  <Bell className="h-7 w-7 text-[hsl(var(--success))]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Smart Reminders</h3>
                <p className="text-muted-foreground">
                  Tap "Done" or "Snooze" right in WhatsApp. Daisy follows up until it's handled.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--info))]/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-[hsl(var(--info))]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Habit Tracking</h3>
                <p className="text-muted-foreground">
                  Build healthy habits with daily reminders and weekly progress reports.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--warning))]/10 flex items-center justify-center mb-6">
                  <Clock className="h-7 w-7 text-[hsl(var(--warning))]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Morning & Evening</h3>
                <p className="text-muted-foreground">
                  Get a morning agenda and evening summary — no notification overload.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="rounded-3xl border-0 shadow-soft hover:shadow-floating transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--primary))]/5 flex items-center justify-center mb-6">
                  <Mic className="h-7 w-7 text-[hsl(var(--primary))]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Voice Commands</h3>
                <p className="text-muted-foreground">
                  Send voice notes in English or Hindi — Daisy understands and responds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[hsl(var(--brown))]">
              Perfect for every family
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-3xl border-0 shadow-floating bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/10 overflow-hidden">
              <CardContent className="p-8">
                <Heart className="h-8 w-8 text-[hsl(var(--primary))] mb-4" />
                <h3 className="font-heading text-2xl font-semibold mb-4">For Elderly Care</h3>
                <p className="text-muted-foreground mb-6">
                  "Hey Daisy, remind my mom to take her blood pressure medicine every day at 9 AM."
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--success))]" />
                    <span className="text-sm">Mom receives gentle reminder</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--success))]" />
                    <span className="text-sm">She taps "Done" when complete</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--success))]" />
                    <span className="text-sm">You get notified she took it</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-floating bg-gradient-to-br from-[hsl(var(--secondary))]/10 to-[hsl(var(--secondary))]/20 overflow-hidden">
              <CardContent className="p-8">
                <Users className="h-8 w-8 text-[hsl(var(--secondary-foreground))] mb-4" />
                <h3 className="font-heading text-2xl font-semibold mb-4">For Busy Parents</h3>
                <p className="text-muted-foreground mb-6">
                  "Daisy, remind my son to finish his homework by 5 PM every weekday."
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--success))]" />
                    <span className="text-sm">Your child gets a friendly nudge</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--success))]" />
                    <span className="text-sm">Smart follow-up if not done</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--success))]" />
                    <span className="text-sm">Build responsibility together</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="rounded-3xl border-0 shadow-floating bg-white/80 backdrop-blur-xl overflow-hidden">
            <CardContent className="p-12">
              <img 
                src="https://customer-assets.emergentagent.com/job_acdec2a8-84c0-4800-bcf1-87a6f1182559/artifacts/vhma62te_daisy.png" 
                alt="Daisy" 
                className="w-24 h-24 rounded-full mx-auto mb-6 shadow-soft"
              />
              <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[hsl(var(--brown))] mb-4">
                Ready to let Daisy help your family?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Start your 30-day free trial today. No credit card required.
              </p>
              <Link to="/start">
                <Button 
                  size="lg" 
                  className="rounded-full px-10 py-6 text-lg bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  data-testid="cta-signup-btn"
                >
                  Chat with Daisy Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-white/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="https://customer-assets.emergentagent.com/job_acdec2a8-84c0-4800-bcf1-87a6f1182559/artifacts/vhma62te_daisy.png" alt="Daisy" className="h-6 w-6 rounded-full" />
            <span className="font-heading font-medium">Daisy</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Daisy. Your caring AI life concierge.
          </p>
        </div>
      </footer>
    </div>
  );
}
