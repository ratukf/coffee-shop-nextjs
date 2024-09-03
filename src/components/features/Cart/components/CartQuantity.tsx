import React from 'react';
import { useAtom } from 'jotai';

import { updateQuantityAtom } from 'coffee/store/CartAtom';
import MenuTypes from 'coffee/data/MenuTypes';

interface CartQuantityProps {
    item: MenuTypes & { quantity: number};
}

export default function CartQuantity({ item }: CartQuantityProps) {
    const [, updateQuantity] = useAtom(updateQuantityAtom);

    const handleIncrement = () => {
        updateQuantity({ itemTitle: item.title, quantity: item.quantity + 1 });
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            updateQuantity({ itemTitle: item.title, quantity: item.quantity - 1 });
        }
    };

    return (
        <>
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
        </>
    );
}
