import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  MessageCircle, Bell, CheckCircle2, Calendar, Mic, Users, 
  Clock, Sun, Moon, Heart, ArrowRight, Star, Smartphone,
  QrCode, ChevronRight, Shield, Zap
} from 'lucide-react';

const WHATSAPP_NUMBER = '+15393091015';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hi%20Daisy!`;

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">🌼</span>
              <span className="text-xl font-bold text-amber-600">Daisy</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-amber-600 transition">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-amber-600 transition">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition">Contact</Link>
              <Link to="/login">
                <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                  Login
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <Link to="/login">
                <Button size="sm" className="bg-amber-500 hover:bg-amber-600">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Your AI Life Concierge on WhatsApp
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Meet <span className="text-amber-500">Daisy</span> — She'll Handle It
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Your warm, intelligent AI assistant that lives in WhatsApp. Set reminders, 
                build habits, and stay organised — all through natural conversation. 
                No app to download. Just chat.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Chat with Daisy on WhatsApp
                  </Button>
                </a>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg rounded-full border-2">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-500">
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">{WHATSAPP_NUMBER}</span>
              </div>
            </div>
            
            {/* QR Code Section */}
            <div className="flex justify-center lg:justify-end">
              <Card className="p-8 bg-white shadow-2xl rounded-3xl border-0">
                <CardContent className="text-center space-y-6 p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                    <QrCode className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Scan to Connect</h3>
                  
                  {/* QR Code Placeholder */}
                  <div className="w-48 h-48 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300" data-testid="qr-code-placeholder">
                    <div className="text-center text-gray-400">
                      <QrCode className="w-16 h-16 mx-auto mb-2" />
                      <span className="text-sm">[QR CODE IMAGE]</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm">
                    Scan with your phone camera to open WhatsApp
                  </p>
                  
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-500 hover:bg-green-600 rounded-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Or Click Here to Chat
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Daisy Does */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Can Daisy Do For You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Daisy is your personal AI assistant that helps you stay organised, 
              build better habits, and take care of the people you love — all through WhatsApp.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bell,
                title: 'Smart Reminders',
                description: 'Set reminders for yourself or your loved ones. Daisy follows up gently until things get done.',
                color: 'amber'
              },
              {
                icon: CheckCircle2,
                title: 'Habit Tracking',
                description: 'Build healthy habits with daily reminders and streak tracking. Celebrate your progress!',
                color: 'green'
              },
              {
                icon: Sun,
                title: 'Morning Agenda',
                description: 'Start each day with a summary of your tasks, reminders, and habits. Stay focused.',
                color: 'orange'
              },
              {
                icon: Moon,
                title: 'Evening Wrap-Up',
                description: 'End your day with a recap of what you accomplished and what\'s coming tomorrow.',
                color: 'indigo'
              },
              {
                icon: Mic,
                title: 'Voice Commands',
                description: 'Just send a voice note! Daisy understands English and Hindi. Speak naturally.',
                color: 'purple'
              },
              {
                icon: Users,
                title: 'Family Care',
                description: 'Set reminders for your parents, kids, or anyone you care about. Get notified when they respond.',
                color: 'pink'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gray-50 rounded-2xl">
                <CardContent className="p-0 space-y-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${feature.color}-100 rounded-xl`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-500 flex items-center justify-center">
              <Smartphone className="w-5 h-5 mr-2" />
              All inside WhatsApp — no app to download
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting started with Daisy takes less than a minute
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Save Daisy\'s Number',
                description: `Add ${WHATSAPP_NUMBER} to your contacts`,
                icon: Smartphone
              },
              {
                step: '2',
                title: 'Send a Message',
                description: 'Say "Hi Daisy" on WhatsApp to start',
                icon: MessageCircle
              },
              {
                step: '3',
                title: 'Set Your First Reminder',
                description: 'Tell Daisy what you need to remember',
                icon: Bell
              },
              {
                step: '4',
                title: 'Daisy Handles It',
                description: 'Sit back and let Daisy take care of the rest',
                icon: Heart
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 text-white rounded-full text-2xl font-bold mb-4 shadow-lg">
                  {item.step}
                </div>
                {idx < 3 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-amber-300" />
                )}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why People Love Daisy
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: 'Privacy First',
                    description: 'Your data stays secure. Daisy only stores what\'s needed to help you.'
                  },
                  {
                    icon: Zap,
                    title: 'Instant & Always Available',
                    description: 'Daisy responds in seconds, 24/7. No waiting, no downtime.'
                  },
                  {
                    icon: Heart,
                    title: 'Warm & Personal',
                    description: 'Daisy feels like a caring friend, not a cold robot. She celebrates your wins!'
                  },
                  {
                    icon: Clock,
                    title: 'Smart Follow-ups',
                    description: 'Gentle reminders that adapt. Daisy knows when to nudge and when to wait.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 lg:p-12">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🌼</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Daisy</p>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-gray-800">Good morning, Kush! ☀️ Here's your agenda for today:</p>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                    <p className="text-gray-800">
                      📋 <strong>Your Reminders:</strong><br/>
                      • Take vitamins — 9:00 AM<br/>
                      • Call Mom — 11:00 AM<br/><br/>
                      🎯 <strong>Today's Habit:</strong><br/>
                      • Meditation — 7:00 AM
                    </p>
                  </div>
                  <div className="bg-amber-500 text-white rounded-2xl rounded-tr-none p-4 max-w-[60%] ml-auto">
                    <p>Thanks Daisy! 💛</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <Card key={idx} className="p-6 bg-white rounded-2xl border-0 shadow-sm" data-testid={`testimonial-${idx}`}>
                <CardContent className="p-0 space-y-4">
                  <div className="flex text-amber-400">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-gray-600 italic">
                    [TESTIMONIAL {idx}]
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-800">[Customer Name]</p>
                      <p className="text-sm text-gray-500">[Location]</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Organised?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Start chatting with Daisy today. It's free to try!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-white text-amber-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg">
                <MessageCircle className="w-6 h-6 mr-2" />
                Start Chatting with Daisy
              </Button>
            </a>
          </div>
          
          <div className="inline-block bg-white/20 rounded-2xl p-6">
            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-20 h-20 text-gray-400" />
            </div>
            <p className="text-amber-100 text-sm">Scan to connect instantly</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌼</span>
                <span className="text-xl font-bold text-white">Daisy</span>
              </div>
              <p className="text-sm">
                Your AI life concierge that lives in WhatsApp. 
                Set reminders, build habits, and stay organised.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {WHATSAPP_NUMBER}
                </li>
                <li>kush@daisycanhandleit.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Daisy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
