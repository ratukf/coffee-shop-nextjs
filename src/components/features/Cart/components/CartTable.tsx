import { useAtom } from 'jotai';

import { cartAtom } from 'coffee/store/CartAtom';
import CartItem from 'coffee/components/features/Cart/components/CartItem';
import CartTotal from 'coffee/components/features/Cart/components/CartTotal';
import CartCheckout from 'coffee/components/features/Cart/components/CartCheckout';

export default function CartTable() {
    const [cart] = useAtom(cartAtom);

    return (
        <section className="flex justify-center items-center">
            <table className="table-auto">
                <thead>
                    <tr className="border-b-2 border-calm-brown">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    </tr>
                </thead>
                <tbody className="border-b-2 border-calm-brown">
                    {cart.map(item =>
                        <CartItem key={item.title} item={item} />
                    )}
                </tbody>
                <tfoot>
                    <CartTotal />
                    <CartCheckout />
                </tfoot>
            </table>

        </section>
    )
}