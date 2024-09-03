import { atom } from 'jotai';
import MenuTypes from 'coffee/data/MenuTypes';

interface CartItem extends MenuTypes {
    quantity: number;
}

// Atom untuk menyimpan item-item di keranjang
export const cartAtom = atom<CartItem[]>([]);

// Atom untuk menambahkan item ke keranjang
export const addToCartAtom = atom(
    null,
    (get, set, newItem: CartItem) => {
        const currentCart = get(cartAtom);
        const itemIndex = currentCart.findIndex(item => item.title === newItem.title);

        if (itemIndex >= 0) {
            // Jika item sudah ada di keranjang, perbarui jumlahnya
            const updatedCart = currentCart.map((item, index) =>
                index === itemIndex ? { ...item, quantity: (item.quantity || 0) + newItem.quantity } : item
            );
            set(cartAtom, updatedCart);
        } else {
            // Jika item belum ada di keranjang, tambahkan item baru
            set(cartAtom, [...currentCart, newItem]);
        }
    }
);

// Atom untuk menghapus item dari keranjang
export const removeFromCartAtom = atom(
    null,
    (get, set, itemTitle: string) => {
        const currentCart = get(cartAtom);
        const updatedCart = currentCart.filter(item => item.title !== itemTitle);
        set(cartAtom, updatedCart);
    }
);

// Atom untuk memperbarui jumlah item di keranjang
export const updateQuantityAtom = atom(
    null,
    (get, set, { itemTitle, quantity }: { itemTitle: string, quantity: number }) => {
        const currentCart = get(cartAtom);
        const updatedCart = currentCart.map(item =>
            item.title === itemTitle ? { ...item, quantity } : item
        );
        set(cartAtom, updatedCart);
    }
);
