import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, CreditCard, Ban, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(35,25%,94%)] to-[hsl(var(--soft-blue))]">
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
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-3xl border-0 shadow-soft bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[hsl(var(--secondary))]/20 mb-4">
                  <FileText className="h-8 w-8 text-[hsl(var(--secondary-foreground))]" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-[hsl(var(--brown))]">
                  Terms & Conditions
                </h1>
                <p className="text-muted-foreground mt-2">Last updated: January 2025</p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-[hsl(var(--foreground))]">
                {/* Acceptance */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--success))]" />
                    Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Daisy ("the Service"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the Service.
                  </p>
                </section>

                {/* Description of Service */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Description of Service</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Daisy is an AI-powered life concierge that helps you:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Set and manage personal reminders via WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Delegate reminders to family members and team members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Track habits and receive motivational follow-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Receive morning agendas and evening summaries</span>
                    </li>
                  </ul>
                </section>

                {/* User Accounts */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">User Accounts</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      To use certain features of Daisy, you must:
                    </p>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-[hsl(var(--success))] mt-1" />
                          <span>Provide accurate and complete information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-[hsl(var(--success))] mt-1" />
                          <span>Maintain the security of your account</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-[hsl(var(--success))] mt-1" />
                          <span>Accept responsibility for all activities under your account</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-[hsl(var(--success))] mt-1" />
                          <span>Be at least 13 years old to use the Service</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Consent System */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-[hsl(var(--warning))]" />
                    Consent-Based Reminders
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you send reminders to others through Daisy:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--warning))] mt-2 shrink-0"></span>
                      <span>Recipients must provide explicit consent before receiving reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--warning))] mt-2 shrink-0"></span>
                      <span>Recipients can opt-out at any time by messaging "STOP"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--warning))] mt-2 shrink-0"></span>
                      <span>You must not use the Service to harass or spam others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--warning))] mt-2 shrink-0"></span>
                      <span>You are responsible for ensuring recipients have agreed to receive messages</span>
                    </li>
                  </ul>
                </section>

                {/* Subscription & Payment */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Subscription & Payment
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="p-4 rounded-2xl bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/10">
                      <h3 className="font-medium text-foreground mb-2">Free Trial</h3>
                      <p>New users receive a 30-day free trial with full access to all features. No credit card required.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Paid Subscription</h3>
                      <ul className="space-y-1">
                        <li>Subscription fees are billed monthly or annually</li>
                        <li>Payments are processed through Stripe</li>
                        <li>Subscriptions auto-renew unless cancelled</li>
                        <li>Refunds are available within 7 days of payment</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Prohibited Use */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Ban className="h-5 w-5 text-[hsl(var(--destructive))]" />
                    Prohibited Use
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You may not use Daisy to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--destructive))] mt-2 shrink-0"></span>
                      <span>Send spam or unsolicited messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--destructive))] mt-2 shrink-0"></span>
                      <span>Harass, abuse, or harm others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--destructive))] mt-2 shrink-0"></span>
                      <span>Violate any laws or regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--destructive))] mt-2 shrink-0"></span>
                      <span>Attempt to gain unauthorized access to our systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--destructive))] mt-2 shrink-0"></span>
                      <span>Interfere with or disrupt the Service</span>
                    </li>
                  </ul>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-[hsl(var(--info))]" />
                    Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Daisy is provided "as is" without warranties of any kind. We do not guarantee that reminders will always be delivered on time or that the service will be uninterrupted. We are not liable for any missed reminders, lost data, or any indirect, incidental, or consequential damages arising from use of the Service.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify users of significant changes via WhatsApp or email. Continued use of the Service after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                {/* Contact */}
                <section className="p-6 rounded-2xl bg-[hsl(var(--secondary))]/10 border border-[hsl(var(--secondary))]/20">
                  <h2 className="font-heading text-xl font-semibold mb-3">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms, please contact us at:
                  </p>
                  <p className="mt-2 font-medium text-[hsl(var(--primary))]">hello@daisycanhandleit.com</p>
                </section>
              </div>
            </CardContent>
          </Card>
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
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
