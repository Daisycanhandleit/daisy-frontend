import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Shield, Lock, Eye, Database, Trash2, Mail } from 'lucide-react';

export default function PrivacyPage() {
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
                  <Shield className="h-8 w-8 text-[hsl(var(--primary))]" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-[hsl(var(--brown))]">
                  Privacy Policy
                </h1>
                <p className="text-muted-foreground mt-2">Last updated: January 2025</p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-[hsl(var(--foreground))]">
                {/* Introduction */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At Daisy ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered life concierge service through WhatsApp and our web platform.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Information We Collect
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Personal Information</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Name and phone number (via WhatsApp)</li>
                        <li>Email address (for web dashboard access)</li>
                        <li>Timezone preferences</li>
                        <li>Reminders and tasks you create</li>
                        <li>Habit tracking data</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Usage Information</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Messages exchanged with Daisy</li>
                        <li>Voice notes (processed for transcription only)</li>
                        <li>Interaction timestamps</li>
                        <li>Device and browser information</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-[hsl(var(--primary))]" />
                    How We Use Your Information
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>To provide and maintain our reminder and habit tracking services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>To send you reminders, notifications, and follow-ups via WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>To process voice notes using AI transcription services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>To improve our AI assistant and user experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>To communicate with you about updates and new features</span>
                    </li>
                  </ul>
                </section>

                {/* Data Sharing */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Data Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell your personal information. We may share your data with:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--secondary))] mt-2 shrink-0"></span>
                      <span><strong>Twilio:</strong> For WhatsApp message delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--secondary))] mt-2 shrink-0"></span>
                      <span><strong>OpenAI:</strong> For AI processing and voice transcription</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--secondary))] mt-2 shrink-0"></span>
                      <span><strong>Legal authorities:</strong> When required by law</span>
                    </li>
                  </ul>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Trash2 className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Your Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Access your personal data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Request correction of inaccurate data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Request deletion of your data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Opt-out of marketing communications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Withdraw consent at any time by messaging "STOP" to Daisy</span>
                    </li>
                  </ul>
                </section>

                {/* Contact Us */}
                <section className="p-6 rounded-2xl bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/10">
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
