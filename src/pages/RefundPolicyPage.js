import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, RotateCcw, Shield, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';

export default function RefundPolicyPage() {
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
                  <RotateCcw className="h-8 w-8 text-[hsl(var(--primary))]" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-[hsl(var(--brown))]">
                  Refund Policy
                </h1>
                <p className="text-muted-foreground mt-2">Last updated: April 2026</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Compliant with Australian Consumer Law
                </p>
              </div>

              {/* Consumer Guarantee Box */}
              <div className="p-6 rounded-2xl bg-green-50 border-2 border-green-300 mb-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-green-800 mb-2">
                      Your Consumer Guarantee Rights
                    </h2>
                    <p className="text-green-900 leading-relaxed">
                      Under Australian Consumer Law, you have consumer guarantee rights that cannot be excluded. If our services fail to meet these guarantees, you may be entitled to a refund, replacement, or repair. Nothing in this policy limits your statutory rights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-[hsl(var(--foreground))]">
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Free Trial
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Daisy offers a <strong>30-day free trial</strong> with full access to all features. No payment is required during the trial period, so no refund is applicable for trial usage.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--primary))]" />
                    When You're Entitled to a Refund
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Major Failure</h3>
                      <p className="text-muted-foreground">If our service has a major failure (e.g., the service is fundamentally different from what was described, or cannot be fixed in a reasonable time), you are entitled to a full refund.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Minor Failure</h3>
                      <p className="text-muted-foreground">For minor failures, we will attempt to fix the issue within a reasonable time. If we cannot, you may be entitled to a partial refund.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Service Not Provided</h3>
                      <p className="text-muted-foreground">If we charge you for a subscription period but fail to provide the service, you are entitled to a refund for that period.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-[hsl(var(--primary))]" />
                    When Refunds May Not Apply
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Refunds generally do not apply in these circumstances:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>You simply changed your mind after subscribing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>You didn't use the service during your subscription period</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Issues caused by your own actions (e.g., providing incorrect phone numbers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Issues with third-party services (WhatsApp, your phone carrier)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>You violated our Terms & Conditions and were terminated</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">How to Request a Refund</h2>
                  <div className="p-4 rounded-2xl bg-muted/30">
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      To request a refund, please contact us with:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                        <span>Your name and phone number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                        <span>Date of purchase/subscription</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                        <span>Reason for the refund request</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 rounded-xl bg-[hsl(var(--primary))]/10">
                      <p className="text-muted-foreground">
                        <strong>Contact:</strong>{' '}
                        <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a>
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Processing Time</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We will acknowledge your refund request within <strong>7 business days</strong> and process approved refunds within <strong>14 business days</strong>. Refunds will be credited to the original payment method.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Cancellation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You can cancel your subscription at any time. Your access will continue until the end of your current billing period. We do not provide partial refunds for unused portions of a subscription period (except as required by Australian Consumer Law).
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Disputes</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you're not satisfied with our refund decision, please see our{' '}
                    <Link to="/complaints" className="text-[hsl(var(--primary))] hover:underline">Complaints & Dispute Resolution Policy</Link>.
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
