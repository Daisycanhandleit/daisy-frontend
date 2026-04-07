import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { ScrollArea } from '../components/ui/scroll-area';
import { 
  Flower2,
  LayoutDashboard,
  Bell,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Target,
  Shield
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Target, label: 'Habits', path: '/habits' },
  { icon: Bell, label: 'Reminders', path: '/reminders' },
  { icon: Users, label: 'Contacts', path: '/contacts' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: Shield, label: 'Admin', path: '/admin' },
];

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const NavContent = () => (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-border/50">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Flower2 className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>
          <span className="font-heading text-xl font-semibold">Daisy</span>
        </Link>
      </div>

      {/* Nav Items */}
      <ScrollArea className="flex-1 py-6">
        <nav className="px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 rounded-xl h-12 font-medium transition-all",
                    isActive 
                      ? "bg-primary text-white hover:bg-primary/90 hover:text-white" 
                      : "hover:bg-muted"
                  )}
                >
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* User Section */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-medium">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 rounded-xl h-11 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          onClick={handleLogout}
          data-testid="logout-btn"
        >
          <LogOut className="h-5 w-5" strokeWidth={1.5} />
          Sign Out
        </Button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between px-4 h-16">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Flower2 className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <span className="font-heading text-lg font-semibold">Daisy</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            data-testid="mobile-menu-btn"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-border/50 flex flex-col transition-transform duration-300",
        "lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <NavContent />
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen pt-16 lg:pt-0">
        <div className="p-6 md:p-8 lg:p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
