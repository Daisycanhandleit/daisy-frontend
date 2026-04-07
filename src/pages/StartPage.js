import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  MessageCircle, 
  Heart,
  Users, 
  Clock,
  Smartphone,
  ArrowRight,
  Sparkles,
  Shield,
  Phone
} from 'lucide-react';

export default function StartPage() {
  const [whatsappData, setWhatsappData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    
    // Fetch WhatsApp link data
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/onboarding/whatsapp-link`)
      .then(res => res.json())
      .then(data => {
        setWhatsappData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch WhatsApp link:', err);
        setLoading(false);
      });
  }, []);

  const handleStartChat = () => {
    if (whatsappData?.click_to_chat_link) {
      window.open(whatsappData.click_to_chat_link, '_blank');
    }
  };

  const features = [
    {
      icon: Heart,
      title: "Care for Loved Ones",
      description: "Remind mom to take her medicine, dad to check his blood pressure, or grandma to call you back"
    },
    {
      icon: Users,
      title: "Keep Families Connected",
      description: "Never miss a birthday, anniversary, or weekly check-in with the people who matter most"
    },
    {
      icon: Clock,
      title: "Gentle Follow-ups",
      description: "Daisy follows up with care until your loved ones acknowledge - so you know they're okay"
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your family's information stays private. We never share your data with anyone"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50" data-testid="start-page">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Daisy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Your Family's Digital Caregiver
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Help your loved ones stay healthy, connected, and never forget what matters. 
            Daisy brings a personal, human touch to family care - right in WhatsApp.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {/* QR Code - Hidden on mobile */}
            {!isMobile && (
              <Card className="rounded-3xl border-0 shadow-xl bg-white p-2">
                <CardContent className="p-4">
                  <div className="bg-white rounded-2xl p-4">
                    <img 
                      src={whatsappData?.qr_codes?.medium?.url || whatsappData?.qr_code_url}
                      alt="Scan to chat with Daisy"
                      className="w-48 h-48 md:w-56 md:h-56"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Scan with your phone camera
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Chat Button */}
            <div className="flex flex-col items-center gap-4">
              <Button 
                onClick={handleStartChat}
                size="lg"
                className="h-16 px-8 text-lg rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 gap-3"
              >
                <MessageCircle className="h-6 w-6" />
                Start Caring with Daisy
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Smartphone className="h-4 w-4" />
                Opens in WhatsApp
              </div>

              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 px-4 py-1">
                Free 30-day trial
              </Badge>
            </div>
          </div>

          {/* Mobile QR Code Alternative */}
          {isMobile && (
            <p className="text-sm text-gray-500 mb-8">
              Share this page with family members so they can join too!
            </p>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
            Caring Made Simple
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Because family comes first, and Daisy helps you show it
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="rounded-2xl border-0 shadow-soft bg-white/80 backdrop-blur hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
                    <feature.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              How Daisy Helps Your Family
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Tell Daisy</h3>
                <p className="text-sm text-gray-600">
                  "Remind my dad to take his heart medicine every morning at 8am"
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Daisy Reaches Out</h3>
                <p className="text-sm text-gray-600">
                  Your dad gets a gentle, caring reminder - and follow-ups if needed
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Peace of Mind</h3>
                <p className="text-sm text-gray-600">
                  Daisy lets you know when he's acknowledged - so you know he's okay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial/Use Case */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50 p-8">
            <CardContent className="p-0 text-center">
              <div className="text-5xl mb-4">💛</div>
              <p className="text-xl text-gray-700 italic mb-4">
                "My parents live overseas, and I used to worry constantly if dad was taking his medication. 
                Now Daisy checks in on him for me, and I get notified when he responds. 
                It's like having a caring family member there with them."
              </p>
              <p className="text-gray-500">- How families use Daisy</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Care for Your Loved Ones?
          </h2>
          <p className="text-gray-500 mb-6">
            Join thousands of families who trust Daisy to help them stay connected
          </p>
          <Button 
            onClick={handleStartChat}
            size="lg"
            className="h-14 px-8 text-lg rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
          >
            <Heart className="h-5 w-5" />
            Start Caring Today
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            No app download. Works in WhatsApp. Free for 30 days.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>Daisy - Your Family's Digital Caregiver 💛</p>
          <p className="mt-1">
            <a href="/privacy" className="hover:text-amber-600">Privacy Policy</a>
            {' · '}
            <a href="/login" className="hover:text-amber-600">Login</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
