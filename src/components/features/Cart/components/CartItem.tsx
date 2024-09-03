import React from 'react';
// import { CartItem as CartItemType } from 'coffee/store/CartAtom'; // Import type jika ada
import Image from 'next/image';

import MenuTypes from 'coffee/data/MenuTypes';
import CartQuantity from 'coffee/components/features/Cart/components/CartQuantity';

// Karena tidak ada typescript yang mendefinisikan, maka definisikan type disini
interface CartItemProps {
    item: MenuTypes & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { url, title, price, quantity } = item;
    const total = price * quantity;

    return (
        <tr>
            <td className="px-6 py-4">
                <Image src={`/images/${url}`} alt={title} width={50} height={50} />
            </td>
            <td className="px-6 py-4">{title}</td>
            <td className="px-6 py-4">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
            <td className="px-6 py-4"><CartQuantity item={item}/></td>
            <td className="px-6 py-4">{total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
        </tr>
    );
};

export default CartItem;
