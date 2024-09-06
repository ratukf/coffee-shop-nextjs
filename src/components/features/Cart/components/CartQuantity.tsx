import React from 'react';
import { useAtom } from 'jotai';

import { updateQuantityAtom, removeFromCartAtom } from 'coffee/store/CartAtom';
import MenuTypes from 'coffee/data/MenuTypes';

interface CartQuantityProps {
    item: MenuTypes & { quantity: number };
}

export default function CartQuantity({ item }: CartQuantityProps) {
    const [, updateQuantity] = useAtom(updateQuantityAtom);
    const [, removeFromCart] = useAtom(removeFromCartAtom);

    const handleIncrement = () => {
        updateQuantity({ itemTitle: item.title, quantity: item.quantity + 1 });
    };

    const handleDecrement = () => {
        if (item.quantity === 1) {
            removeFromCart(item.title);
            return;
        }

        if (item.quantity > 1) {
            updateQuantity({ itemTitle: item.title, quantity: item.quantity - 1 });
        }
    };

    return (
        <>
            <section className="flex items-center space-x-2 sm:space-x-4">
                <button
                    onClick={handleDecrement}
                    className="px-2 py-1 bg-gray-200 rounded-l text-gray-600"
                >
                    -
                </button>
                <span className="px-4 py-1">{item.quantity}</span>
                <button
                    onClick={handleIncrement}
                    className="px-2 py-1 bg-gray-200 rounded-r text-gray-600"
                >
                    +
                </button>
            </section>
        </>
    );
}
