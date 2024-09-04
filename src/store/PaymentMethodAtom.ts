import { atom } from 'jotai';

// Atom untuk menyimpan payment method yang dipilih
export const selectedPaymentMethodAtom = atom<string | null>(null);

