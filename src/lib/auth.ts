import Cookies from 'js-cookie';
import { User } from '@/types';

const MOCK_USER = {
  id: '1',
  email: 'admin@example.com',
  name: 'Admin User'
};

const MOCK_PASSWORD = 'password123';

export const mockLogin = async (email: string, password: string): Promise<User | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (email === MOCK_USER.email && password === MOCK_PASSWORD) {
    const token = btoa(JSON.stringify(MOCK_USER));
    Cookies.set('auth-token', token, { expires: 7 });
    return MOCK_USER;
  }
  
  return null;
};

export const getAuthenticatedUser = (): User | null => {
  try {
    const token = Cookies.get('auth-token');
    if (!token) return null;
    
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
};

export const logout = () => {
  Cookies.remove('auth-token');
};