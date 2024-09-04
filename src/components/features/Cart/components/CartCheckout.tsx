import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import { cartAtom } from 'coffee/store/CartAtom';

export default function CartCheckout() {
    const [cart] = useAtom(cartAtom);
    const router = useRouter();

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert('Your cart is empty')
            return;
        }
        console.log("cart length: ",cart.length)
        router.push('/ordersummary');
    }

    return (
            <td colSpan={5} className="px-6 py-3 text-xs text-end font-medium text-calm-black tracking-wider">
                <button onClick={handleCheckout} className="bg-calm-brown text-white font-bold text-xl p-5 rounded shadow-lg">
                    Checkout
                </button>
            </td>

    );
}
