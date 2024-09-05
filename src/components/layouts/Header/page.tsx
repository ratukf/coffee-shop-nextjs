import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useAtom } from 'jotai';

import NavLinks from 'coffee/components/layouts/Header/components/NavLinks';
import MobileNav from 'coffee/components/layouts/Header/components/MobileNav';
import CartIcon from 'coffee/components/layouts/Header/components/CartIcon';
import image from 'coffee/images/nav-coffee-monster.png';
import Links from 'coffee/components/layouts/Header/const/Links';
import { loggedInUserAtom, logoutUser } from 'coffee/store/AuthAtom';
import { cartAtom } from 'coffee/store/CartAtom';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);
    const [isLoggedIn, setLoggedInUser] = useAtom(loggedInUserAtom);
    const [cart, setCart] = useAtom(cartAtom);

    const updatedLinks = Links.map(link =>
        link.id === 4 ? { ...link, name: isLoggedIn ? 'Logout' : 'Login'} : link
    );

    const handleLogout = () => {
        logoutUser(setLoggedInUser, setCart);
        alert('You have been logged out');
    };

    return (
        <div className="py-14 px-8 navbar-wrapper flex justify-between items-center w-full h-20 text-[#242424] bg-white nav z-50">
            <div>
                <h1>
                    <Link
                        className="link-underline link-underline-black"
                        href="/"
                        rel="noreferrer"
                    >
                        <Image
                            src={image}
                            alt="Coffee Monster Logo"
                            width={300}
                            quality={50}
                            priority
                        />
                    </Link>
                </h1>
            </div>

            <ul className="hidden md:flex">
                <NavLinks links={updatedLinks} onLogout={handleLogout} />
                <CartIcon />
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            <MobileNav links={updatedLinks} nav={nav} setNav={setNav} onLogout={handleLogout} />
        </div>
    );
};

export default Navbar;
