import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Bot, Brain, AlertTriangle, MessageSquare, Shield } from 'lucide-react';

export default function AIDisclosurePage() {
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
                  <Bot className="h-8 w-8 text-[hsl(var(--primary))]" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-[hsl(var(--brown))]">
                  AI Disclosure Notice
                </h1>
                <p className="text-muted-foreground mt-2">Transparency about how Daisy works</p>
              </div>

              {/* Main Disclosure Box */}
              <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-300 mb-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-amber-800 mb-2">
                      Daisy is an Artificial Intelligence (AI)
                    </h2>
                    <p className="text-amber-900 leading-relaxed">
                      When you interact with Daisy via WhatsApp or our website, <strong>you are communicating with an AI system, not a human</strong>. Daisy uses advanced language models to understand your messages and provide helpful responses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-[hsl(var(--foreground))]">
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-[hsl(var(--primary))]" />
                    How Daisy's AI Works
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Daisy uses large language models (LLMs) powered by OpenAI to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Understand your natural language messages and voice notes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Extract information like dates, times, and tasks from your requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Generate friendly, helpful responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Transcribe voice messages to text</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-[hsl(var(--primary))]" />
                    What This Means for You
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">AI Can Make Mistakes</h3>
                      <p className="text-muted-foreground">While we strive for accuracy, AI systems can occasionally misunderstand messages, provide incorrect information, or generate unexpected responses. Always verify important information.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">No Human Review</h3>
                      <p className="text-muted-foreground">Your conversations with Daisy are processed automatically by AI. Humans do not read your messages unless you specifically request support or report an issue.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Data Processing</h3>
                      <p className="text-muted-foreground">Your messages are sent to AI service providers (OpenAI) for processing. See our <Link to="/privacy" className="text-[hsl(var(--primary))] hover:underline">Privacy Policy</Link> for details on data handling.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Limitations
                  </h2>
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
                    <p className="text-muted-foreground font-medium mb-2">Daisy is NOT:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        <span>A medical professional - do not rely on Daisy for health advice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        <span>A legal advisor - consult a qualified lawyer for legal matters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        <span>A financial advisor - seek professional financial guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        <span>An emergency service - call 000 for emergencies in Australia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        <span>A mental health crisis service - contact Lifeline (13 11 14) if you need support</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Regulatory Compliance</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This disclosure is provided in accordance with the Office of the Australian Information Commissioner (OAIC) Guidelines on Privacy and AI (October 2024), which require organizations to be transparent about their use of AI systems that process personal information.
                  </p>
                </section>

                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">Questions?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about how Daisy's AI works, please contact us at{' '}
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
