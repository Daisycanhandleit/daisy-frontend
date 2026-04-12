import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";

// Public Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StartPage from "./pages/StartPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import DataRetentionPage from "./pages/DataRetentionPage";
import AIDisclosurePage from "./pages/AIDisclosurePage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import ComplaintsPage from "./pages/ComplaintsPage";

// User Dashboard Pages
import DashboardPage from "./pages/DashboardPage";
import RemindersPage from "./pages/RemindersPage";
import ContactsPage from "./pages/ContactsPage";
import MessagesPage from "./pages/MessagesPage";
import SettingsPage from "./pages/SettingsPage";
import HabitsPage from "./pages/HabitsPage";

// Admin Pages
import AdminPage from "./pages/AdminPage";
import AdminLoginPage from "./pages/AdminLoginPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/data-retention" element={<DataRetentionPage />} />
          <Route path="/ai-disclosure" element={<AIDisclosurePage />} />
          <Route path="/refund" element={<RefundPolicyPage />} />
          <Route path="/complaints" element={<ComplaintsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Admin Login (Public) */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Protected User Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/habits"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <HabitsPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/reminders"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <RemindersPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ContactsPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <MessagesPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SettingsPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          
          {/* Protected Admin Route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <DashboardLayout>
                  <AdminPage />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </AuthProvider>
  );
}

export default App;
