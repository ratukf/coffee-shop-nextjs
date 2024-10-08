import { atom } from 'jotai';
import UserData from 'coffee/data/UserData';
import UserDataType from 'coffee/data/UserDataType';

import { cartAtom } from 'coffee/store/CartAtom';

// Atom untuk menyimpan status user yang sudah login
export const loggedInUserAtom = atom<UserDataType | null>(null);

// Atom untuk menyimpan pesan error
export const authErrorAtom = atom<string>('');

// Atom untuk menyimpan email yang dimasukkan di form login
export const emailAtom = atom<string>('');

// Atom untuk menyimpan password yang dimasukkan di form login
export const passwordAtom = atom<string>('');

// Fungsi untuk melakukan proses login dengan mencari user berdasarkan email dan password
export const authenticateUser = (email: string, password: string): UserDataType | null => {
  const user = UserData.find(user => user.email === email && user.password === password);
  return user || null;
};

export const logoutUser = (
  setLoggedInUser: React.Dispatch<React.SetStateAction<UserDataType | null>>,
  setCart: React.Dispatch<React.SetStateAction<any[]>> // Use any[] or the correct type for your cart items
) => {
  setLoggedInUser(null);
  setCart([]); // Clear the cart
};