import { atom } from 'jotai';

// Atom untuk menyimpan shipping service yang dipilih
export const selectedShippingServiceAtom = atom<string | null>(null);
