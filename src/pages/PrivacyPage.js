import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Shield, Lock, Eye, Database, Trash2, Mail, Globe, Server, Users, AlertTriangle } from 'lucide-react';

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
                <p className="text-muted-foreground mt-2">Last updated: April 2026</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Compliant with the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs)
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8 text-[hsl(var(--foreground))]">
                {/* Introduction */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-[hsl(var(--primary))]" />
                    1. Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Daisy ("we," "our," or "us") is operated by <strong>Daisy Can Handle It Pty Ltd</strong>, an Australian business. We are committed to protecting your privacy in accordance with the <em>Privacy Act 1988 (Cth)</em> and the Australian Privacy Principles (APPs 1-13).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our AI-powered life concierge service through WhatsApp and our web platform at daisycanhandleit.com.
                  </p>
                </section>

                {/* AI Disclosure */}
                <section className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    AI Disclosure Notice
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Daisy is an artificial intelligence (AI) assistant, not a human.</strong> When you interact with Daisy via WhatsApp or our website, you are communicating with an AI system powered by large language models. Your messages are processed by AI to understand your requests and provide helpful responses. Daisy uses AI technology from third-party providers (including OpenAI) to process and respond to your messages. This complies with the OAIC's October 2024 Guidelines on AI and Privacy.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-5 w-5 text-[hsl(var(--primary))]" />
                    2. Information We Collect (APP 1 & APP 3)
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We collect personal information that is reasonably necessary to provide our services. This includes:</p>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Personal Information</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Name:</strong> How you'd like Daisy to address you</li>
                        <li><strong>Phone number:</strong> Your WhatsApp contact number</li>
                        <li><strong>Email address:</strong> For web dashboard access (optional)</li>
                        <li><strong>Timezone preferences:</strong> To send reminders at the right time</li>
                        <li><strong>Contacts:</strong> Names and phone numbers of people you want to set reminders for (with their consent)</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Service Data</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Messages:</strong> Conversations with Daisy via WhatsApp</li>
                        <li><strong>Reminders:</strong> Tasks, dates, and times you create</li>
                        <li><strong>Habits:</strong> Habit tracking data and progress</li>
                        <li><strong>Voice notes:</strong> Audio messages (processed for transcription only, not stored)</li>
                        <li><strong>Preferences:</strong> Morning agenda and evening wrap-up times</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-2">Technical Information</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Interaction timestamps</li>
                        <li>Device and browser information (for website)</li>
                        <li>IP address (for security purposes)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Collect Information */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-[hsl(var(--primary))]" />
                    3. How We Collect Information (APP 5)
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span><strong>Via WhatsApp:</strong> When you message Daisy, your messages and phone number are transmitted through WhatsApp (operated by Meta Platforms, Inc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span><strong>Via our Website:</strong> When you register for a web account or use our dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span><strong>Directly from you:</strong> Information you voluntarily provide in conversations with Daisy</span>
                    </li>
                  </ul>
                </section>

                {/* Why We Collect Information */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[hsl(var(--primary))]" />
                    4. Why We Collect Information (APP 6)
                  </h2>
                  <p className="text-muted-foreground mb-3">We collect and use your personal information for the following purposes:</p>
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
                      <span>To personalize your experience (e.g., using your name, remembering contacts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>To improve and develop our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>To communicate with you about service updates or issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>To comply with legal obligations</span>
                    </li>
                  </ul>
                </section>

                {/* Who We Share With */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Server className="h-5 w-5 text-[hsl(var(--primary))]" />
                    5. Who We Share Information With (APP 6)
                  </h2>
                  <p className="text-muted-foreground mb-3">We may disclose your personal information to the following third parties:</p>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-1">AI Service Providers</h3>
                      <p>OpenAI (USA) - for natural language processing and voice transcription</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-1">Messaging Platform</h3>
                      <p>WhatsApp / Meta Platforms, Inc. (USA) - for message delivery</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-1">Communication Services</h3>
                      <p>Twilio Inc. (USA) - for WhatsApp Business API services</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-1">Cloud Hosting</h3>
                      <p>Railway (USA) / MongoDB Atlas (USA) - for secure data storage and hosting</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-3">
                    We do not sell your personal information to third parties. We only share information as necessary to provide our services.
                  </p>
                </section>

                {/* Cross-Border Disclosure */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-[hsl(var(--primary))]" />
                    6. Cross-Border Data Disclosure (APP 8)
                  </h2>
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Important:</strong> Your personal information may be transferred to and processed in countries outside Australia, primarily the <strong>United States</strong>, where our service providers are located.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Before disclosing your information overseas, we take reasonable steps to ensure that overseas recipients comply with the Australian Privacy Principles or are subject to a law or binding scheme substantially similar to the Privacy Act.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      By using Daisy, you consent to your personal information being transferred overseas for the purpose of providing our services. You can opt out at any time by replying <strong>STOP</strong> to any WhatsApp message from Daisy.
                    </p>
                  </div>
                </section>

                {/* Data Retention */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-5 w-5 text-[hsl(var(--primary))]" />
                    7. Data Retention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Specifically:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span><strong>Account data:</strong> Retained while your account is active, plus 12 months after account closure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span><strong>Message history:</strong> Retained for 12 months from the date of the message</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span><strong>Reminders:</strong> Retained for 12 months after completion or expiry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span><strong>Voice notes:</strong> Not stored - processed in real-time and immediately discarded</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    For more details, see our <Link to="/data-retention" className="text-[hsl(var(--primary))] hover:underline">Data Retention Policy</Link>.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[hsl(var(--primary))]" />
                    8. Your Rights (APP 12 & APP 13)
                  </h2>
                  <p className="text-muted-foreground mb-3">Under the Privacy Act 1988, you have the following rights:</p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-1">Access (APP 12)</h3>
                      <p className="text-muted-foreground">You can request access to the personal information we hold about you. We will respond within 30 days.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-1">Correction (APP 13)</h3>
                      <p className="text-muted-foreground">You can request that we correct any inaccurate, out-of-date, or incomplete information.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-1">Deletion</h3>
                      <p className="text-muted-foreground">You can request that we delete your personal information. Simply message Daisy with "Delete my data" or email us.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <h3 className="font-medium text-foreground mb-1">Opt-Out</h3>
                      <p className="text-muted-foreground">You can stop using our service at any time by replying <strong>STOP</strong> to any WhatsApp message from Daisy.</p>
                    </div>
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-[hsl(var(--primary))]" />
                    9. Data Security (APP 11)
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorized access, modification, or disclosure. Our security measures include:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Encryption of data in transit (HTTPS/TLS) and at rest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Secure cloud infrastructure with access controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Regular security reviews and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Use of WhatsApp's end-to-end encryption for message delivery</span>
                    </li>
                  </ul>
                </section>

                {/* Automated Decision-Making and AI */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Server className="h-5 w-5 text-[hsl(var(--primary))]" />
                    10. Automated Decision-Making and Artificial Intelligence
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Daisy uses artificial intelligence (AI) technology to process your messages, generate personalised reminders, suggestions, and responses, and to support the features of our service. This includes the use of large language model (LLM) APIs provided by third-party AI providers to interpret and respond to your inputs via WhatsApp and our web dashboard.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    While Daisy's AI systems assist in personalising your experience, <strong>no decisions with legal consequences or similarly significant effects on your rights are made solely by automated means</strong> without the ability for human review. If you have concerns about how an AI-generated response or suggestion has affected you, you may contact us at <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a> to request a human review.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    This disclosure is made in accordance with the <em>Privacy and Other Legislation Amendment Act 2024 (Cth)</em> and the Australian Privacy Principles.
                  </p>
                </section>

                {/* AI Subprocessors */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Server className="h-5 w-5 text-[hsl(var(--primary))]" />
                    11. AI Subprocessors and Third-Party Data Handling
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    To deliver Daisy's AI-powered features, your messages and inputs may be processed by third-party artificial intelligence service providers, including but not limited to large language model API providers. These providers are engaged under data processing agreements that <strong>prohibit them from using your personal information to train their own models</strong> or for any purpose beyond delivering responses to Daisy.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We take reasonable steps to ensure all AI subprocessors meet appropriate privacy and security standards. A current list of key subprocessors is available upon request by contacting us at <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Your personal information is only shared with these providers to the minimum extent necessary to operate the service.
                  </p>
                </section>

                {/* Data Breach Notification */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-[hsl(var(--primary))]" />
                    12. Data Breach Notification
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Daisy takes the security of your personal information seriously. In the event of a data breach that is likely to result in serious harm to any affected individuals, we will act in accordance with our obligations under the <strong>Notifiable Data Breaches (NDB) scheme</strong> under the Privacy Act 1988 (Cth).
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">This means we will:</p>
                  <ul className="space-y-2 text-muted-foreground mb-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Promptly assess the breach to determine whether serious harm is likely</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Notify the Office of the Australian Information Commissioner (OAIC) as required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0"></span>
                      <span>Notify affected individuals as soon as practicable, including details of the breach and recommended steps they can take to protect themselves</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    If you believe your data may have been compromised, please contact us immediately at <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a>.
                  </p>
                </section>

                {/* Children and Minors */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[hsl(var(--primary))]" />
                    13. Children and Minors
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Daisy is intended for use by individuals who are <strong>18 years of age or older</strong>. We do not knowingly collect, store, or process personal information from anyone under the age of 18. If we become aware that a user is under 18, we will promptly delete their account and all associated personal information.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If you believe a minor has provided us with personal information, please contact us immediately at <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a> so we can take appropriate action.
                  </p>
                </section>

                {/* Complaints */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[hsl(var(--primary))]" />
                    14. Privacy Complaints (APP 1)
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    If you believe we have breached the Australian Privacy Principles or have a complaint about how we've handled your personal information:
                  </p>
                  <div className="p-4 rounded-2xl bg-muted/30 mb-3">
                    <p className="text-muted-foreground">
                      <strong>Step 1:</strong> Contact us at <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a>
                    </p>
                    <p className="text-muted-foreground mt-2">
                      We will acknowledge your complaint within 7 days and provide a response within 30 days.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-muted/30">
                    <p className="text-muted-foreground">
                      <strong>Step 2:</strong> If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC):
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--primary))] hover:underline">www.oaic.gov.au</a><br />
                      Phone: 1300 363 992
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[hsl(var(--primary))]" />
                    15. Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For any privacy-related questions or requests, please contact us:
                  </p>
                  <div className="mt-4 p-4 rounded-2xl bg-[hsl(var(--primary))]/10">
                    <p className="font-medium">Daisy Can Handle It Pty Ltd</p>
                    <p className="text-muted-foreground text-sm">Operated in Victoria, Australia</p>
                    <p className="text-muted-foreground text-sm">ABN: [INSERT ABN ONCE REGISTERED]</p>
                    <p className="text-muted-foreground mt-2">
                      Email: <a href="mailto:kush@daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">kush@daisycanhandleit.com</a>
                    </p>
                    <p className="text-muted-foreground">
                      Website: <a href="https://daisycanhandleit.com" className="text-[hsl(var(--primary))] hover:underline">daisycanhandleit.com</a>
                    </p>
                  </div>
                </section>

                {/* Changes to Policy */}
                <section>
                  <h2 className="font-heading text-xl font-semibold mb-3">16. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and, where appropriate, via WhatsApp message. Your continued use of Daisy after changes are posted constitutes your acceptance of the updated policy.
                  </p>
                </section>

                {/* Global Standards Note */}
                <section className="p-4 rounded-2xl bg-green-50 border border-green-200">
                  <h3 className="font-medium text-foreground mb-2">Global Standards</h3>
                  <p className="text-muted-foreground text-sm">
                    While this Privacy Policy is designed primarily for compliance with Australian law, we have also aligned our practices with global privacy standards including GDPR principles, to provide a consistent standard of privacy protection for all users.
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
          <p className="mb-2">Daisy is a product operated in Victoria, Australia.</p>
          <p className="mb-2">ABN: [INSERT ABN ONCE REGISTERED]</p>
          <p>&copy; {new Date().getFullYear()} Daisy Can Handle It Pty Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
