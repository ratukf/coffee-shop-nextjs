import React from 'react';
import { useAtom } from 'jotai';

import { cartAtom } from 'coffee/store/CartAtom';

export default function CartTotal() {
    const [cart] = useAtom(cartAtom);

    // Menghitung total harga
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <tr>
            <td colSpan={4} className="px-6 py-3 text-end text-xs font-medium text-calm-black tracking-wider">
                <h2 className="text-lg font-semibold">Grand total: </h2>
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-calm-black tracking-wider">
                <p className="text-xl font-bold">
                    {totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                </p>
            </td>
        </tr>
    );
}
