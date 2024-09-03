import { useAtom } from 'jotai';

import { cartAtom } from 'coffee/store/CartAtom';
import CartItem from 'coffee/components/features/Cart/components/CartItem';

export default function CartTable() {
    const [cart] = useAtom(cartAtom);

    return(
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item =>
                    <CartItem key={item.title} item={item} />
                )}
            </tbody>
        </table>
    )
}