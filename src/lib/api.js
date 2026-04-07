import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('daisy_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('daisy_token');
      localStorage.removeItem('daisy_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', null, { params: data }),
};

// Contact APIs
export const contactsAPI = {
  getAll: () => api.get('/contacts'),
  create: (data) => api.post('/contacts', data),
  delete: (id) => api.delete(`/contacts/${id}`),
};

// Reminder APIs
export const remindersAPI = {
  getAll: (status) => api.get('/reminders', { params: status ? { status } : {} }),
  create: (data) => api.post('/reminders', data),
  update: (id, data) => api.put(`/reminders/${id}`, data),
  delete: (id) => api.delete(`/reminders/${id}`),
};

// Message APIs
export const messagesAPI = {
  getAll: (limit = 50) => api.get('/messages', { params: { limit } }),
};

// Dashboard APIs
export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
};

// Habit APIs
export const habitsAPI = {
  getAll: () => api.get('/habits'),
  getStats: () => api.get('/habits/stats'),
  getLogs: (habitId, limit = 30) => api.get(`/habits/${habitId}/logs`, { params: { limit } }),
  share: (habitId, phone) => api.post(`/habits/${habitId}/share`, null, { params: { phone } }),
  unshare: (habitId, phone) => api.post(`/habits/${habitId}/unshare`, null, { params: { phone } }),
  update: (habitId, updates) => api.put(`/habits/${habitId}`, updates),
};

// Admin APIs (uses separate token storage)
const adminApi = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add admin auth token to admin API requests
adminApi.interceptors.request.use((config) => {
  const adminToken = localStorage.getItem('daisy_admin_token');
  if (adminToken) {
    config.headers.Authorization = `Bearer ${adminToken}`;
  }
  return config;
});

export const adminAPI = {
  // Admin Auth
  login: (email, password) => api.post('/admin/auth/login', { email, password }),
  setup: (email, password, name) => api.post('/admin/auth/setup', { email, password, name }),
  checkExists: () => api.get('/admin/auth/check').then(res => ({ data: { exists: res.data.admin_exists } })),
  // Data APIs
  getOverview: () => api.get('/admin/overview'),
  getSystemHealth: () => api.get('/admin/system-health'),
  getSubscriptions: () => api.get('/admin/subscriptions'),
  getActivityLog: (limit = 50) => api.get('/admin/activity-log', { params: { limit } }),
  getAnalytics: () => api.get('/admin/analytics'),
  getUsers: () => api.get('/admin/users'),
  getWhatsAppUsers: () => api.get('/admin/whatsapp-users'),
  getUserDetails: (userId) => api.get(`/admin/users/${userId}`),
  getContacts: () => api.get('/admin/contacts'),
  getReminders: (status, limit = 100) => api.get('/admin/reminders', { params: { status, limit } }),
  getMessages: (limit = 100) => api.get('/admin/messages', { params: { limit } }),
  getTeams: () => api.get('/admin/teams'),
  getTeamMembers: () => api.get('/admin/team-members'),
  // Onboarding APIs
  getWhatsAppLink: () => api.get('/onboarding/whatsapp-link'),
  getOnboardingStats: () => api.get('/onboarding/user-stats'),
  getTeamReminders: (status) => api.get('/admin/team-reminders', { params: { status } }),
  getHabits: (status) => api.get('/admin/habits', { params: { habit_status: status } }),
  getHabitLogs: (habitId, status, limit = 100) => api.get('/admin/habit-logs', { params: { habit_id: habitId, log_status: status, limit } }),
};

// Settings APIs
export const settingsAPI = {
  getTwilioStatus: () => api.get('/settings/twilio'),
  getSmartMessaging: () => api.get('/settings/smart-messaging'),
  updateSmartMessaging: (settings) => api.put('/settings/smart-messaging', settings),
};

export default api;
