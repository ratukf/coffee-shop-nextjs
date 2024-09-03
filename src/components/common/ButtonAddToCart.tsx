import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { loggedInUserAtom } from 'coffee/store/AuthAtom';
import { cartAtom, addToCartAtom } from 'coffee/store/CartAtom';
import MenuTypes from 'coffee/data/MenuTypes';

interface ButtonAddToCartProps {
    product: MenuTypes;
}

export default function ButtonAddToCart({ product }: ButtonAddToCartProps) {
    const [isLoggedIn] = useAtom(loggedInUserAtom);
    const [, addToCart] = useAtom(addToCartAtom);
    const [cart] = useAtom(cartAtom);
    const router = useRouter();

    const buttonHandle = () => {
        if (!isLoggedIn) {
            alert('You must be logged in first to add product to cart');
            router.push('/login');
            return;
        }
        alert('Product telah ditambah ke cart');
        addToCart({ ...product, quantity: 1 });
        console.log("product: ", product); 
    };

    // DEBUGGING
    useEffect(() => {
        console.log("Updated cart: ", cart);
    }, [cart]);

    return (
        <button type="button" className="px-2 py-1 bg-calm-brown text-white rounded" onClick={buttonHandle}>
            Add to cart
        </button>
    );
}
