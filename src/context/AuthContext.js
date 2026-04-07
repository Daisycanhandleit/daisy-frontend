import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../lib/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('daisy_token');
    const savedUser = localStorage.getItem('daisy_user');
    
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
        // Verify token is still valid
        const response = await authAPI.getMe();
        setUser(response.data);
        localStorage.setItem('daisy_user', JSON.stringify(response.data));
      } catch (error) {
        console.error('Auth check failed:', error);
        logout();
      }
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    const response = await authAPI.login({ email, password });
    const { access_token, user } = response.data;
    localStorage.setItem('daisy_token', access_token);
    localStorage.setItem('daisy_user', JSON.stringify(user));
    setUser(user);
    setIsAuthenticated(true);
    return user;
  };

  const register = async (data) => {
    const response = await authAPI.register(data);
    const { access_token, user } = response.data;
    localStorage.setItem('daisy_token', access_token);
    localStorage.setItem('daisy_user', JSON.stringify(user));
    setUser(user);
    setIsAuthenticated(true);
    return user;
  };

  const logout = () => {
    localStorage.removeItem('daisy_token');
    localStorage.removeItem('daisy_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('daisy_user', JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      isAuthenticated, 
      login, 
      register, 
      logout,
      updateUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
