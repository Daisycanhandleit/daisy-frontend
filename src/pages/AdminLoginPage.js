import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { adminAPI } from '../lib/api';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Shield, Mail, Lock, Loader2, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSetup, setIsSetup] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  useEffect(() => {
    checkAdminExists();
    
    // Check if already logged in as admin
    const adminToken = localStorage.getItem('daisy_admin_token');
    if (adminToken) {
      navigate('/admin');
    }
  }, [navigate]);

  const checkAdminExists = async () => {
    try {
      const response = await adminAPI.checkExists();
      setIsSetup(!response.data.exists);
    } catch (error) {
      // If endpoint doesn't exist or errors, assume admin exists
      setIsSetup(false);
    } finally {
      setCheckingAdmin(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      
      if (isSetup) {
        // First-time setup
        response = await adminAPI.setup(formData.email, formData.password, formData.name);
        toast.success('Admin account created! Please log in.');
        setIsSetup(false);
        setFormData({ ...formData, password: '' });
      } else {
        // Regular login
        response = await adminAPI.login(formData.email, formData.password);
        
        // Store admin token separately
        localStorage.setItem('daisy_admin_token', response.data.access_token);
        localStorage.setItem('daisy_admin', JSON.stringify(response.data.admin));
        
        toast.success('Welcome back, admin!');
        navigate('/admin');
      }
    } catch (error) {
      const message = error.response?.data?.detail || 'Authentication failed';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  if (checkingAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(35,25%,94%)] to-[hsl(var(--soft-blue))] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[hsl(var(--primary))]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(35,25%,94%)] to-[hsl(var(--soft-blue))] flex flex-col">
      {/* Navbar */}
      <nav className="px-4 py-4">
        <div className="max-w-md mx-auto">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-md">
          <Card className="rounded-3xl border-0 shadow-floating bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-[hsl(var(--primary))]" />
              </div>
              <CardTitle className="font-heading text-2xl">
                {isSetup ? 'Setup Admin Account' : 'Admin Login'}
              </CardTitle>
              <CardDescription>
                {isSetup 
                  ? 'Create your owner admin account to manage Daisy'
                  : 'Sign in to access the admin dashboard'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {isSetup && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Admin Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl"
                      required
                      data-testid="admin-name-input"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-9 rounded-xl"
                      required
                      data-testid="admin-email-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-9 pr-10 rounded-xl"
                      required
                      data-testid="admin-password-input"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 py-6"
                  data-testid="admin-submit-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {isSetup ? 'Creating Account...' : 'Signing In...'}
                    </>
                  ) : (
                    isSetup ? 'Create Admin Account' : 'Sign In'
                  )}
                </Button>
              </form>

              {/* Info Box */}
              <div className="mt-6 p-4 rounded-xl bg-muted/30 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  {isSetup 
                    ? 'This is a one-time setup. Only the owner can access the admin panel.'
                    : 'Admin access is restricted to authorized personnel only.'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <img 
            src="https://customer-assets.emergentagent.com/job_acdec2a8-84c0-4800-bcf1-87a6f1182559/artifacts/vhma62te_daisy.png" 
            alt="Daisy" 
            className="h-5 w-5 rounded-full" 
          />
          <span>Daisy Admin Portal</span>
        </div>
      </footer>
    </div>
  );
}
