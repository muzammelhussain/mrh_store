import { Item } from '@/types';

const API_BASE_URL = '/api';

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/items`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }
    
    const data = await response.json();
    return data.map((item: any) => ({
      ...item,
      id: item._id,
    }));
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
};

export const fetchItemById = async (id: string): Promise<Item | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    return {
      ...data,
      id: data._id,
    };
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
};

export const createItem = async (itemData: Omit<Item, 'id' | 'createdAt'>): Promise<Item> => {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create item');
  }
  
  const data = await response.json();
  return {
    ...data,
    id: data._id,
  };
};