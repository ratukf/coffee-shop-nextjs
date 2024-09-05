import { Card, CardBody } from '@nextui-org/card';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import attractiveMenu from 'coffee/data/attractive-menu';
import MenusTypes from 'coffee/data/MenuTypes';

interface MenuCardProps {
    menu: MenusTypes;
}

const AttractiveMenu: React.FC<MenuCardProps> = ({ menu }) => {
    const [AttractiveMenu] = useState(attractiveMenu);

    const router = useRouter();

    const handleMouseClick = (title: string) => {
        router.push(`/products/${title.toLowerCase().replace(/\s+/g, '-')}`);
    };

    return (
        <section className="bg-light-gray py-14 px-8 w-full">
            <div className="mb-5">
                <h1 className="font-black text-calm-black text-6xl text-center">
                    Our Attractive
                </h1>
                <h2 className="font-black text-calm-brown text-4xl text-center">
                    Menu
                </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
                {AttractiveMenu.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleMouseClick(item.title)}
                        className="w-full justify-stretch "
                    >
                        <Card className="p-5 m-auto hover:shadow-2xl w-[80%] hover:border-3 hover:border-calm-brown cursor-pointer gap-10">
                            <div className="relative h-60">
                                <Image
                                    src={`/images/${item.url}`}
                                    alt={`${item.title}`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="rounded-t-lg"
                                    priority
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                />
                            </div>
                            <CardBody className="font-bold text-xl">
                                <h2 className="text-center">{item.title}</h2>
                                <h2>Rp. {item.price.toLocaleString('id-ID')}</h2>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AttractiveMenu;
