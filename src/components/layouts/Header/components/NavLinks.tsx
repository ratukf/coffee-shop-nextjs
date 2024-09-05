import Link from 'next/link';
import React from 'react';

interface LinkProps {
    id: number;
    link: string;
    name: string;
}

const NavLinks: React.FC<{ links: LinkProps[]; onLogout: () => void }> = ({ links, onLogout }) => {
    return (
        <>
            {links.map(({ id, link, name }) => (
                <li
                    key={id}
                    className="font-Kanit text-xl nav-link-item px-4 cursor-pointer capitalize font-bold text-calm-black hover:scale-105 hover:text-calm-brown duration-200 link-underline"
                >
                    {name === 'Logout' ? (
                        <button
                            onClick={onLogout}
                            className="focus:outline-none"
                        >
                            {name}
                        </button>
                    ) : (
                        <Link href={link}>{name}</Link>
                    )}
                </li>
            ))}
        </>
    );
};

export default NavLinks;
