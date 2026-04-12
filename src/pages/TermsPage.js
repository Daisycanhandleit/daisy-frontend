import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, FileText, Scale, Users, CreditCard, AlertTriangle, Shield, Ban, RefreshCw, Gavel } from 'lucide-react';

export default function TermsPage() {
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[hsl(var(--primary))]/10 mb-4">
                  <FileText className="h-8 w-8 text-[hsl(var(--primary))]" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-[hsl(var(--brown))]">
                  Terms & Conditions
                </h1>
                <p className="text-muted-foreground mt-2">Last updated: April 2026</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Governed by Australian Law
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-[hsl(var(--foreground))]">
                {/* Introduction */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-[hsl(var(--primary))]" />
                    1. Agreement to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Welcome to Daisy! These Terms and Conditions ("Terms") constitute a legally binding agreement between you and <strong>Daisy Can Handle It Pty Ltd</strong> (ABN pending) ("we," "our," or "us"), an Australian company operating the Daisy AI-powered life concierge service.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Daisy through WhatsApp or our website (daisycanhandleit.com), you agree to be bound by these Terms, our <Link to="/privacy" className="text-[hsl(var(--primary))] hover:underline">Privacy Policy</Link>, and all applicable laws. If you do not agree, please do not use our service.
                  </p>
                </section>

                {/* Service Description */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[hsl(var(--primary))]" />
                    2. Service Description
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Daisy is an AI-powered personal assistant that operates primarily through WhatsApp. Our services include:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Setting and managing personal reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Creating reminders for family members and contacts (with their consent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Habit tracking and accountability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Daily agenda summaries and evening wrap-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Voice note transcription and processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Web dashboard for viewing and managing your data</span>
                    </li>
                  </ul>
                </section>

                {/* AI Disclosure */}
                <section className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    3. AI Disclosure & Limitations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong>Daisy is an artificial intelligence (AI), not a human.</strong> You acknowledge and agree that:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                      <span>Daisy uses AI technology to process and respond to your messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                      <span>AI responses may occasionally be inaccurate or inappropriate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                      <span>Daisy is <strong>not</strong> a substitute for professional medical, legal, financial, or emergency services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                      <span>You should always verify important information independently</span>
                    </li>
                  </ul>
                </section>

                {/* User Eligibility */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[hsl(var(--primary))]" />
                    4. User Eligibility
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To use Daisy, you must:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mt-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Be at least <strong>18 years of age</strong>, or have parental/guardian consent if between 13-17</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Have legal capacity to enter into a binding agreement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Have a valid WhatsApp account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Not be prohibited from receiving services under Australian law</span>
                    </li>
                  </ul>
                </section>

                {/* Acceptable Use */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[hsl(var(--primary))]" />
                    5. Acceptable Use Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You agree to use Daisy only for lawful purposes. You must <strong>NOT</strong>:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                      <span>Use Daisy to harass, abuse, or harm others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                      <span>Send reminders to people without their consent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                      <span>Use the service for spam, marketing, or commercial messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                      <span>Attempt to hack, reverse-engineer, or disrupt the service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                      <span>Violate any applicable laws, including the Spam Act 2003</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                      <span>Share illegal, offensive, or inappropriate content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                      <span>Impersonate another person or entity</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Violation of this policy may result in immediate termination of your access to Daisy.
                  </p>
                </section>

                {/* Subscription & Payment */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-[hsl(var(--primary))]" />
                    6. Subscription & Payment
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Free Trial</h3>
                      <p>New users receive a <strong>30-day free trial</strong> with full access to all features. No credit card is required to start your trial.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Subscription Tiers</h3>
                      <p className="mb-2">After your free trial, you may choose from the following subscription plans:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Personal Plan:</strong> For individual use (pricing TBA)</li>
                        <li><strong>Family Plan:</strong> For families with multiple users (pricing TBA)</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Payment Terms</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Subscriptions are billed monthly in advance</li>
                        <li>All prices are in Australian Dollars (AUD) unless otherwise stated</li>
                        <li>GST is included where applicable</li>
                        <li>You can cancel your subscription at any time</li>
                        <li>No refunds for partial months (except as required by Australian Consumer Law)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Ban className="h-5 w-5 text-[hsl(var(--primary))]" />
                    7. Limitation of Liability
                  </h2>
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 mb-4">
                    <p className="text-muted-foreground font-medium">
                      IMPORTANT DISCLAIMER:
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Daisy is a reminder and organization tool only. Daisy is <strong>NOT</strong>:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                      <li>A medical professional or healthcare provider</li>
                      <li>A legal advisor or law firm</li>
                      <li>A financial advisor or accountant</li>
                      <li>An emergency service</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    To the maximum extent permitted by law, including the Australian Consumer Law:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>We are not liable for any indirect, incidental, special, or consequential damages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>We are not responsible for missed reminders due to technical issues, network failures, or your device settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Our total liability is limited to the amount you paid us in the 12 months preceding the claim</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                    Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred by the Australian Consumer Law that cannot be excluded, restricted, or modified.
                  </p>
                </section>

                {/* Service Availability */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-[hsl(var(--primary))]" />
                    8. Service Availability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We strive to provide a reliable service, but we cannot guarantee uninterrupted availability. The service may be temporarily unavailable due to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Scheduled maintenance (we'll try to notify you in advance)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Technical issues or outages with third-party services (WhatsApp, AI providers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Circumstances beyond our reasonable control (force majeure)</span>
                    </li>
                  </ul>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Ban className="h-5 w-5 text-[hsl(var(--primary))]" />
                    9. Termination
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">By You</h3>
                      <p>You may stop using Daisy at any time by replying <strong>STOP</strong> to any WhatsApp message or by contacting us. If you have a paid subscription, you can cancel via email.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">By Us</h3>
                      <p>We may terminate or suspend your access immediately, without prior notice, if you violate these Terms or for any other reason at our discretion. We will provide refunds as required by Australian Consumer Law.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Effect of Termination</h3>
                      <p>Upon termination, your right to use Daisy ceases immediately. We will retain your data in accordance with our <Link to="/privacy" className="text-[hsl(var(--primary))] hover:underline">Privacy Policy</Link> and <Link to="/data-retention" className="text-[hsl(var(--primary))] hover:underline">Data Retention Policy</Link>.</p>
                    </div>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[hsl(var(--primary))]" />
                    10. Intellectual Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    All intellectual property rights in Daisy, including but not limited to software, design, logos, and content, are owned by Daisy Can Handle It Pty Ltd or our licensors.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You retain ownership of any content you submit through Daisy (such as reminders and messages). By using our service, you grant us a limited license to process this content solely to provide our services to you.
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Gavel className="h-5 w-5 text-[hsl(var(--primary))]" />
                    11. Governing Law & Disputes
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    These Terms are governed by and construed in accordance with the laws of <strong>Victoria, Australia</strong>. You agree to submit to the exclusive jurisdiction of the courts of Victoria, Australia.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Before taking legal action, we encourage you to contact us to resolve any disputes. See our <Link to="/complaints" className="text-[hsl(var(--primary))] hover:underline">Complaints & Dispute Resolution Policy</Link> for more information.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">12. Changes to These Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and, where appropriate, via WhatsApp message. Your continued use of Daisy after changes are posted constitutes your acceptance of the new Terms.
                  </p>
                </section>

                {/* Severability */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">13. Severability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">14. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="mt-4 p-4 rounded-2xl bg-[hsl(var(--primary))]/10">
                    <p className="font-medium">Daisy Can Handle It Pty Ltd</p>
                    <p className="text-muted-foreground">
                      Email: <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a>
                    </p>
                    <p className="text-muted-foreground">
                      Website: <a href="https://daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">daisycanhandleit.com</a>
                    </p>
                  </div>
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
