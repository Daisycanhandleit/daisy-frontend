import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  Bell,
  MessageSquare,
  Sparkles,
  Target,
  Clock,
  Shield,
  CheckCircle
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(35,25%,94%)] to-[hsl(var(--soft-pink))]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between glass-card rounded-full px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://customer-assets.emergentagent.com/job_acdec2a8-84c0-4800-bcf1-87a6f1182559/artifacts/vhma62te_daisy.png" alt="Daisy" className="h-8 w-8 rounded-full" />
            <span className="font-heading text-xl font-semibold text-[hsl(var(--brown))]">Daisy</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" className="rounded-full gap-2" data-testid="back-home-btn">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/login">
              <Button className="rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 px-6" data-testid="get-started-btn">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            Your Digital Caregiver
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-[hsl(var(--brown))] leading-tight">
            Meet Daisy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Daisy is your warm, caring AI companion who helps you and your family stay organized, 
            healthy, and connected. Think of her as a thoughtful friend who never forgets.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="rounded-3xl border-0 shadow-floating bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[hsl(var(--brown))] mb-4">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Life gets busy. Between work, family, and everything in between, it's easy to forget 
                    the little things that matter most — taking medication on time, following up with loved ones, 
                    or building healthy habits.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Daisy was created to be the gentle reminder you need, delivered through the app you already use 
                    every day: WhatsApp. No complicated apps to download, no learning curve — just natural conversations 
                    with an assistant who truly cares.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_acdec2a8-84c0-4800-bcf1-87a6f1182559/artifacts/vhma62te_daisy.png" 
                    alt="Daisy" 
                    className="w-64 h-64 rounded-3xl shadow-soft"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[hsl(var(--brown))]">
              How Daisy Works
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Simple, natural, and effective. Here's how Daisy helps you stay on top of everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <Card className="rounded-3xl border-0 shadow-soft bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <div className="text-sm font-medium text-[hsl(var(--primary))] mb-2">Step 1</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Just Message Daisy</h3>
                <p className="text-muted-foreground">
                  "Remind me to call Mom at 6 PM" or "Remind my dad to take his medicine every morning at 9 AM"
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="rounded-3xl border-0 shadow-soft bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--secondary))]/20 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-[hsl(var(--secondary-foreground))]" />
                </div>
                <div className="text-sm font-medium text-[hsl(var(--secondary-foreground))] mb-2">Step 2</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Daisy Understands</h3>
                <p className="text-muted-foreground">
                  Daisy uses AI to understand your natural language — no special commands needed. Text or voice, she gets it.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="rounded-3xl border-0 shadow-soft bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--success))]/10 flex items-center justify-center mb-6">
                  <Bell className="h-6 w-6 text-[hsl(var(--success))]" />
                </div>
                <div className="text-sm font-medium text-[hsl(var(--success))] mb-2">Step 3</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Never Miss a Thing</h3>
                <p className="text-muted-foreground">
                  Daisy sends timely reminders with smart follow-ups. Mark tasks done, snooze, or skip — all with a tap.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[hsl(var(--brown))]">
              What Makes Daisy Special
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <Card className="rounded-3xl border-0 shadow-soft bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/10">
              <CardContent className="p-8">
                <Users className="h-8 w-8 text-[hsl(var(--primary))] mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">Family Care</h3>
                <p className="text-muted-foreground mb-4">
                  Set reminders for your loved ones with their consent. Perfect for helping elderly parents 
                  with medication reminders or keeping kids on schedule.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--success))]" />
                    <span>Consent-based delegation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--success))]" />
                    <span>Get notified when tasks are done</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="rounded-3xl border-0 shadow-soft bg-gradient-to-br from-[hsl(var(--secondary))]/10 to-[hsl(var(--secondary))]/20">
              <CardContent className="p-8">
                <Target className="h-8 w-8 text-[hsl(var(--secondary-foreground))] mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">Habit Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  Build healthy habits with gentle daily reminders and motivating streak tracking. 
                  Daisy celebrates your wins and encourages you on tough days.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--success))]" />
                    <span>Daily habit reminders</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--success))]" />
                    <span>Weekly progress reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="rounded-3xl border-0 shadow-soft bg-gradient-to-br from-[hsl(var(--info))]/5 to-[hsl(var(--info))]/10">
              <CardContent className="p-8">
                <Clock className="h-8 w-8 text-[hsl(var(--info))] mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">Smart Agendas</h3>
                <p className="text-muted-foreground mb-4">
                  Start your day with a morning briefing of all your tasks, and end it with an evening 
                  summary of what you accomplished.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--success))]" />
                    <span>Customizable agenda times</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--success))]" />
                    <span>No notification overload</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="rounded-3xl border-0 shadow-soft bg-gradient-to-br from-[hsl(var(--success))]/5 to-[hsl(var(--success))]/10">
              <CardContent className="p-8">
                <Shield className="h-8 w-8 text-[hsl(var(--success))] mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">Privacy First</h3>
                <p className="text-muted-foreground mb-4">
                  Your data stays safe. We don't sell your information or use it for advertising. 
                  Daisy is here to help, not to spy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--success))]" />
                    <span>Encrypted conversations</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--success))]" />
                    <span>Easy data deletion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="rounded-3xl border-0 shadow-floating bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--secondary))]/10 overflow-hidden">
            <CardContent className="p-12">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[hsl(var(--brown))] mb-4">
                Ready to Let Daisy Help?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Start your 30-day free trial today. No credit card required, no commitment.
              </p>
              <Link to="/start">
                <Button 
                  size="lg" 
                  className="rounded-full px-10 py-6 text-lg bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  data-testid="cta-start-btn"
                >
                  Start Free Trial
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
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Made with <Heart className="inline h-4 w-4 text-[hsl(var(--primary))]" /> in Sydney
          </p>
        </div>
      </footer>
    </div>
  );
}
