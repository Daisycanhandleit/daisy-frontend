import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute({ children, adminOnly = false }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // Admin-only route check
  if (adminOnly) {
    const adminToken = localStorage.getItem('daisy_admin_token');
    if (!adminToken) {
      return <Navigate to="/admin/login" replace />;
    }
    // Admin is authenticated, render children
    return children;
  }

  // Regular user authentication check
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
