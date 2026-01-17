export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  createdAt?: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}