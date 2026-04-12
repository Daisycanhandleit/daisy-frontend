import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, MessageSquare, ArrowRight, Building, Scale, Mail } from 'lucide-react';

export default function ComplaintsPage() {
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
                  <MessageSquare className="h-8 w-8 text-[hsl(var(--primary))]" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-[hsl(var(--brown))]">
                  Complaints & Dispute Resolution
                </h1>
                <p className="text-muted-foreground mt-2">How we handle complaints fairly</p>
              </div>

              {/* Intro */}
              <div className="p-6 rounded-2xl bg-[hsl(var(--primary))]/10 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to providing excellent service, but we understand that sometimes things go wrong. This policy explains how to make a complaint and how we'll handle it.
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-[hsl(var(--foreground))]">
                {/* Step 1 */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold">1</div>
                    <h2 className="font-heading text-xl font-semibold">Contact Us Directly</h2>
                  </div>
                  <div className="ml-13 pl-8 border-l-2 border-[hsl(var(--primary))]/30">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The first step is to contact us directly. Most issues can be resolved quickly at this stage.
                    </p>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <p className="font-medium mb-2">How to contact us:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-[hsl(var(--primary))]" />
                          <span>Email: <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-[hsl(var(--primary))]" />
                          <span>WhatsApp: Message Daisy with "I have a complaint"</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 p-4 rounded-2xl bg-muted/30">
                      <p className="font-medium mb-2">What to include:</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Your name and contact details</li>
                        <li>What happened and when</li>
                        <li>How you'd like us to resolve it</li>
                        <li>Any relevant screenshots or evidence</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-4 rounded-2xl bg-green-50 border border-green-200">
                      <p className="text-muted-foreground">
                        <strong>Response time:</strong> We will acknowledge your complaint within <strong>7 business days</strong> and provide a full response within <strong>30 business days</strong>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Step 2 */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold">2</div>
                    <h2 className="font-heading text-xl font-semibold">Internal Review</h2>
                  </div>
                  <div className="ml-13 pl-8 border-l-2 border-[hsl(var(--primary))]/30">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you're not satisfied with our initial response, you can request an internal review by a senior team member.
                    </p>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <p className="text-muted-foreground">
                        Email us at <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a> with the subject line <strong>"Request for Internal Review"</strong> and reference your original complaint.
                      </p>
                    </div>
                    <div className="mt-4 p-4 rounded-2xl bg-green-50 border border-green-200">
                      <p className="text-muted-foreground">
                        <strong>Response time:</strong> We will complete the review within <strong>14 business days</strong>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Step 3 - OAIC */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold">3</div>
                    <h2 className="font-heading text-xl font-semibold">External Escalation</h2>
                  </div>
                  <div className="ml-13 pl-8 border-l-2 border-[hsl(var(--primary))]/30">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you're still not satisfied after our internal review, you can escalate to external bodies:
                    </p>
                    
                    <div className="space-y-4">
                      {/* Privacy Complaints */}
                      <div className="p-4 rounded-2xl bg-muted/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="h-5 w-5 text-[hsl(var(--primary))]" />
                          <h3 className="font-medium">Privacy Complaints (OAIC)</h3>
                        </div>
                        <p className="text-muted-foreground mb-2">
                          For complaints about how we handle your personal information:
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Office of the Australian Information Commissioner</strong><br />
                          Website: <a href="https://www.oaic.gov.au/privacy/privacy-complaints" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--primary))] hover:underline">www.oaic.gov.au/privacy/privacy-complaints</a><br />
                          Phone: 1300 363 992<br />
                          Post: GPO Box 5218, Sydney NSW 2001
                        </p>
                      </div>

                      {/* Consumer Complaints */}
                      <div className="p-4 rounded-2xl bg-muted/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Scale className="h-5 w-5 text-[hsl(var(--primary))]" />
                          <h3 className="font-medium">Consumer Complaints (ACCC/Fair Trading)</h3>
                        </div>
                        <p className="text-muted-foreground mb-2">
                          For complaints about consumer rights, refunds, or misleading conduct:
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Australian Competition and Consumer Commission</strong><br />
                          Website: <a href="https://www.accc.gov.au/contact-us/contact-the-accc/report-a-consumer-issue" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--primary))] hover:underline">www.accc.gov.au</a><br />
                          Phone: 1300 302 502
                        </p>
                        <p className="text-muted-foreground mt-2">
                          Or contact your state/territory Fair Trading office.
                        </p>
                      </div>

                      {/* Spam Complaints */}
                      <div className="p-4 rounded-2xl bg-muted/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="h-5 w-5 text-[hsl(var(--primary))]" />
                          <h3 className="font-medium">Spam Complaints (ACMA)</h3>
                        </div>
                        <p className="text-muted-foreground mb-2">
                          For complaints about spam or unsolicited messages:
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Australian Communications and Media Authority</strong><br />
                          Website: <a href="https://www.acma.gov.au/report-spam" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--primary))] hover:underline">www.acma.gov.au/report-spam</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Commitment */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Our Commitment</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>We take all complaints seriously</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>We will treat you with respect and fairness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>We will keep you informed throughout the process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>We will use feedback to improve our service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>We will not discriminate against you for making a complaint</span>
                    </li>
                  </ul>
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
