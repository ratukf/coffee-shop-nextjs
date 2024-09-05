import React from 'react';
import { useRouter } from 'next/router';
// import Link 

import ProductImage from 'coffee/components/features/Product/components/ProductImage';
import ProductInfo from 'coffee/components/features/Product/components/ProductInfo';
import ButtonAddToCart from 'coffee/components/common/ButtonAddToCart'; 
import MenusTypes from 'coffee/data/MenuTypes';

interface MenuCardProps {
    menu: MenusTypes;
}

const ProductCard: React.FC<MenuCardProps> = ({ menu }) => {
    const router = useRouter();

    const handleMouseClick =() => {
        router.push(`/products/${menu.title.toLowerCase().replace(/\s+/g, '-')}`);
    }

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full p-4 hover:shadow-2xl hover:shadow-black hover:border-3 hover:border-calm-brown duration-150 hover:cursor-pointer"
            onClick={handleMouseClick}
            >
            <ProductImage url={menu.url} title={menu.title} />
            <ProductInfo 
                title={menu.title} 
                description={menu.description} 
                price={menu.price} 
            />
            {/* Pastikan prop `menu` dikirim sebagai `product` */}
            {/* <ButtonAddToCart product={menu} /> */}
        </div>
    );
};

export default ProductCard;
