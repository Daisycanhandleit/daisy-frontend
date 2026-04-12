import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Database, Clock, Trash2, Shield } from 'lucide-react';

export default function DataRetentionPage() {
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
                  <Database className="h-8 w-8 text-[hsl(var(--primary))]" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-[hsl(var(--brown))]">
                  Data Retention Policy
                </h1>
                <p className="text-muted-foreground mt-2">Last updated: April 2026</p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-[hsl(var(--foreground))]">
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Our Approach
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only for as long as necessary to provide our services and fulfill the purposes described in our Privacy Policy. This policy outlines our standard retention periods for different types of data.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Retention Periods
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-foreground">Account Information</h3>
                        <span className="text-sm bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] px-2 py-1 rounded-full">Active + 12 months</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Name, phone number, email, timezone, and preferences. Retained while your account is active, plus 12 months after you close your account or stop using the service.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-muted/30">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-foreground">Message History</h3>
                        <span className="text-sm bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] px-2 py-1 rounded-full">12 months</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Conversations with Daisy via WhatsApp. Retained for 12 months from the date of each message.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-muted/30">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-foreground">Reminders</h3>
                        <span className="text-sm bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] px-2 py-1 rounded-full">12 months</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Reminder content, scheduled times, and status. Retained for 12 months after the reminder is completed, cancelled, or expires.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-muted/30">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-foreground">Habit Data</h3>
                        <span className="text-sm bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] px-2 py-1 rounded-full">12 months</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Habit tracking information and progress. Retained for 12 months after you delete the habit or close your account.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-muted/30">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-foreground">Contact Information</h3>
                        <span className="text-sm bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] px-2 py-1 rounded-full">Active + 12 months</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Names and phone numbers of people you set reminders for. Retained while you use the service, plus 12 months.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-green-50 border border-green-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-foreground">Voice Notes</h3>
                        <span className="text-sm bg-green-600/20 text-green-700 px-2 py-1 rounded-full">Not stored</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Voice messages are processed in real-time for transcription and immediately discarded. We do not retain audio files.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-muted/30">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-foreground">Technical Logs</h3>
                        <span className="text-sm bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] px-2 py-1 rounded-full">90 days</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Server logs, error logs, and security logs. Retained for 90 days for troubleshooting and security purposes.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Trash2 className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Data Deletion
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You can request deletion of your data at any time by:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Messaging Daisy with "Delete my data"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Emailing us at <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a></span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    We will process deletion requests within 30 days. Some data may be retained longer if required by law.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Exceptions
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may retain data longer than specified above if:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mt-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Required by law (e.g., tax records, legal disputes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Necessary to protect our legal rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Data has been anonymized and cannot identify you</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about data retention, contact us at{' '}
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
