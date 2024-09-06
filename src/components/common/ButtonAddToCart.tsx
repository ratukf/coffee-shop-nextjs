import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { loggedInUserAtom } from 'coffee/store/AuthAtom';
import { cartAtom, addToCartAtom } from 'coffee/store/CartAtom';
import MenuTypes from 'coffee/data/MenuTypes';
import successImage from 'coffee/images/success.svg';

interface ButtonAddToCartProps {
    product: MenuTypes;
}

export default function ButtonAddToCart({ product }: ButtonAddToCartProps) {
    const [isLoggedIn] = useAtom(loggedInUserAtom);
    const [, addToCart] = useAtom(addToCartAtom);
    const [cart] = useAtom(cartAtom);
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [showCheckmark, setShowCheckmark] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const buttonHandle = () => {
        if (!isLoggedIn) {
            alert('You must be logged in first to add product to cart');
            router.push('/login');
            return;
        }
        setClicked(true);
        setShowCheckmark(true);
    
        setTimeout(() => {
            // Gunakan quantity dari state `quantity`
            addToCart({ ...product, quantity }); 
            console.log("product: ", product);
            setShowCheckmark(false);
            setClicked(false); // Reset button state after showing the checkmark
        }, 500); // Delay for checkmark animation
    };
    

    return (
        <div className="relative">
            <div className="flex gap-10 mb-10">
                <p>Qty: </p>
                <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                min={1}
            />
            </div>


            {!showCheckmark ? (
                <motion.button
                    type="button"
                    className={`px-4 py-2 bg-calm-brown text-white rounded ${clicked ? 'opacity-0' : 'opacity-100'} w-full`}
                    onClick={buttonHandle}
                    whileTap={{ scale: 0.95 }} // Button scale effect on click
                    transition={{ duration: 0.2 }} // Animation duration
                >
                    Add to cart
                </motion.button>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }} // Animation duration for checkmark
                    className="w-full h-full flex items-center justify-center"
                >
                    <Image src={successImage} alt="Success" height={50} width={50} />
                </motion.div>
            )}
        </div>
    );
}
