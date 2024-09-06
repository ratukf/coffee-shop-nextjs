import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import Menu from 'coffee/data/Menu';
import { MenusTypes } from 'coffee/data/MenuTypes';
import ButtonAddToCart from 'coffee/components/common/ButtonAddToCart';

const ProductDetail = () => {
    const menu: MenusTypes = Menu;
    const router: NextRouter = useRouter();
    const { slug } = router.query;

    const [product, setProduct] = useState<{
        url: string;
        title: string;
        description: string;
        price: number;
        reviewer1: string;
        reviewer2: string;
        review1: string;
        review2: string;
    } | null>(null);

    useEffect(() => {
        if (slug) {
            const productData = menu.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug);
            setProduct(productData || null);
        }
    }, [slug, menu]);

    if (!product) return <p>Product not found</p>;

    return (
        <section className="flex flex-col lg:flex-row w-full lg:p-20 p-12 border-2">
            <div className="flex-1 flex justify-center mb-4 lg:mb-0 lg:w-1/2">
                <Image
                    src={`/images/${product.url}`}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="flex-1 lg:w-1/2 lg:pl-8">
                <h1 className="font-bold text-3xl lg:text-4xl mb-4">{product.title}</h1>
                <p className="text-base lg:text-lg mb-4">{product.description}</p>
                <h2 className="font-black text-xl mb-4">Reviews</h2>
                <div className="space-y-4 mb-8">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <h4 className="font-semibold">{product.reviewer1}</h4>
                        <p className="lg:w-1/2">&quot;{product.review1}&quot;</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <h4 className="font-semibold">{product.reviewer2}</h4>
                        <p className="lg:w-1/2">&quot;{product.review2}&quot;</p>
                    </div>
                </div>
                <ButtonAddToCart product={product}/>
            </div>
        </section>
    );
};

export default ProductDetail;
