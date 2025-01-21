import { User, FormData } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const transformUserData = (user: any): User => ({
  id: user.id,
  firstName: user.name.split(' ')[0],
  lastName: user.name.split(' ')[1] || '',
  email: user.email,
  department: user.company?.name || 'N/A',
  phone: user.phone,
  website: user.website,
  address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
});

export const fetchUsers = async (page: number = 1, limit: number = 5): Promise<User[]> => {
  const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch users');
  const data = await response.json();
  return data.map(transformUserData);
};

export const createUser = async (userData: FormData): Promise<User> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${userData.firstName} ${userData.lastName}`,
      email: userData.email,
      company: { name: userData.department },
      phone: userData.phone,
      website: userData.website,
      address: {
        street: userData.address.split(',')[0] || '',
        suite: userData.address.split(',')[1] || '',
        city: userData.address.split(',')[2] || '',
        zipcode: userData.address.split(',')[3] || '',
      },
    }),
  });
  if (!response.ok) throw new Error('Failed to create user');
  const data = await response.json();
  return transformUserData({ ...data, id: Date.now(), company: { name: userData.department } });
};

export const updateUser = async (id: number, userData: FormData): Promise<User> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${userData.firstName} ${userData.lastName}`,
      email: userData.email,
      company: { name: userData.department },
      phone: userData.phone,
      website: userData.website,
      address: {
        street: userData.address.split(',')[0] || '',
        suite: userData.address.split(',')[1] || '',
        city: userData.address.split(',')[2] || '',
        zipcode: userData.address.split(',')[3] || '',
      },
    }),
  });
  if (!response.ok) throw new Error('Failed to update user');
  const data = await response.json();
  return transformUserData({ ...data, id, company: { name: userData.department } });
};

export const deleteUser = async (id: number): Promise<{ success: boolean }> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete user');
  return { success: true };
};