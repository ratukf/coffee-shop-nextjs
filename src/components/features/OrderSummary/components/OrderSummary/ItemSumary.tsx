import { useAtom } from 'jotai';
import Image from 'next/image';

import { cartAtom } from 'coffee/store/CartAtom';
import Total from 'coffee/components/features/OrderSummary/components/OrderSummary/Total';
import CheckoutButton from 'coffee/components/features/OrderSummary/components/OrderSummary/CheckoutButton';

export default function ItemSummary() {
    const [cart] = useAtom(cartAtom);

    return (
        <section className="flex flex-col space-y-4">
            {cart.map((item, index) => (
                <div key={index} className="flex justify-between border-b-1">
                    <div>
                        <Image src={`/images/${item.url}`} 
                                alt={item.title} className="w-16 h-16"
                                priority
                                width={50}
                                height={50} 
                        />
                    </div>
                    <div>
                        <h1 className="font-bold">{item.title}</h1>
                        <div className="flex space-x-4">
                            <p>Rp. {item.price.toLocaleString()}</p>
                            <p>x{item.quantity}</p>
                            <p>Rp. {(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            ))}
            <Total />
            <CheckoutButton />
        </section>
    );
}
