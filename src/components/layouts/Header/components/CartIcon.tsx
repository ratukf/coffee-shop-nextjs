import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

import { loggedInUserAtom } from 'coffee/store/AuthAtom';
import { cartAtom } from 'coffee/store/CartAtom';

const CartIcon: React.FC = () => {
    const [isLoggedIn] = useAtom(loggedInUserAtom);
    const [cart] = useAtom(cartAtom);
    const router = useRouter();

    const cartHandle = () => {
        if (!isLoggedIn) {
            alert("Please login first");
            router.push('/login');
            return;
        }
        router.push('/cart');
    };

    // Calculate total quantity
    const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

    return (
        <div className="flex items-center">
            <FaCartShopping
                onClick={cartHandle}
                className='text-3xl mx-4 cursor-pointer text-calm-black hover:scale-150 duration-200'
            />
            {totalQuantity > 0 && (
                <span className=" font-bold -ml-5 -mt-5 text-sm bg-red-500 text-white rounded-full px-2 py-1">{totalQuantity}</span>
            )}
        </div>
    );
};

export default CartIcon;
