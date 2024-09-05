import Link from 'next/link';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

import CartIcon from 'coffee/components/layouts/Header/components/CartIcon';

const MobileNav: React.FC<{
    links: { id: number; link: string; name: string }[];
    nav: boolean;
    setNav: React.Dispatch<React.SetStateAction<boolean>>;
    onLogout: () => void; // Add this line
    }> = ({ links, nav, setNav, onLogout }) => {
    return (
        nav && (
            <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-calm-brown text-white z-20">
                <li className="absolute top-12 right-12"> {/* Position the exit button */}
                    <button
                        onClick={() => setNav(false)}
                        className="text-3xl text-white hover:text-gray-300 focus:outline-none"
                    >
                        <FaTimes />
                    </button>
                </li>
                {links.map(({ id, link, name }) => (
                    id === 5 ? (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold"
                        >
                            <CartIcon />
                        </li>
                    ) : (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-2xl font-bold hover:text-4xl duration-150"
                        >
                            {name === 'Logout' ? (
                                <button
                                    onClick={() => {
                                        onLogout();
                                        setNav(false);
                                    }}
                                    className="text-white"
                                >
                                    {name}
                                </button>
                            ) : (
                                <Link onClick={() => setNav(false)} href={link}>
                                    {name}
                                </Link>
                            )}
                        </li>
                    )
                ))}
            </ul>
        )
    );
};

export default MobileNav;
