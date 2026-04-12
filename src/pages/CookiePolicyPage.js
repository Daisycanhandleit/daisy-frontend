import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Cookie, Eye, Settings, Shield } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(35,25%,94%)] to-[hsl(var(--soft-pink))]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between glass-card rounded-full px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://customer-assets.emergentagent.com/job_acdec2a8-84c0-4800-bcf1-87a6f1182559/artifacts/vhma62te_daisy.png" alt="Daisy" className="h-8 w-8 rounded-full" />
            <span className="font-heading text-xl font-semibold text-[hsl(var(--brown))]">Daisy</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="rounded-full gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-3xl border-0 shadow-soft bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[hsl(var(--primary))]/10 mb-4">
                  <Cookie className="h-8 w-8 text-[hsl(var(--primary))]" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-[hsl(var(--brown))]">
                  Cookie & Tracking Policy
                </h1>
                <p className="text-muted-foreground mt-2">Last updated: April 2026</p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-[hsl(var(--foreground))]">
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Cookie className="h-5 w-5 text-[hsl(var(--primary))]" />
                    What Are Cookies?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Cookies We Use
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Essential Cookies</h3>
                      <p className="text-muted-foreground">Required for the website to function. These include authentication cookies that keep you logged in and security cookies. You cannot opt out of essential cookies.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Functional Cookies</h3>
                      <p className="text-muted-foreground">Remember your preferences (like timezone settings) to personalize your experience.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Analytics Cookies</h3>
                      <p className="text-muted-foreground">Help us understand how visitors use our website so we can improve it. We use privacy-focused analytics that do not track individuals.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Third-Party Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We do not use third-party advertising or tracking cookies. We do not sell your data to advertisers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    However, some third-party services we use (like payment processors) may set their own cookies when you interact with them.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Managing Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Most browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>View what cookies are stored on your device</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Delete all or specific cookies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Block cookies from specific websites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Block all cookies (note: this may affect website functionality)</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">WhatsApp & Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    When you use Daisy through WhatsApp, no cookies are involved as WhatsApp is a separate application. WhatsApp has its own privacy policy which governs your use of their platform.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about our use of cookies, please contact us at{' '}
                    <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a>
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[hsl(var(--brown))]/10">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/privacy" className="hover:text-[hsl(var(--primary))]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[hsl(var(--primary))]">Terms & Conditions</Link>
            <Link to="/cookies" className="hover:text-[hsl(var(--primary))]">Cookie Policy</Link>
            <Link to="/refund" className="hover:text-[hsl(var(--primary))]">Refund Policy</Link>
            <Link to="/ai-disclosure" className="hover:text-[hsl(var(--primary))]">AI Disclosure</Link>
            <Link to="/contact" className="hover:text-[hsl(var(--primary))]">Contact</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Daisy Can Handle It Pty Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
