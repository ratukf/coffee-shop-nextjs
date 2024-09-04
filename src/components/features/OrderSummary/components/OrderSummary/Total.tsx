import { useAtom } from 'jotai';
import { cartAtom } from 'coffee/store/CartAtom';

import { selectedShippingServiceAtom } from 'coffee/store/ShippingServiceAtom';
import Shipping from 'coffee/data/Shipping';

export default function Total() {
    const [cart] = useAtom(cartAtom);
    const [selectedShippingService] = useAtom(selectedShippingServiceAtom);

    // Temukan biaya pengiriman berdasarkan layanan yang dipilih
    const shippingOption = Shipping.find(option => option.name === selectedShippingService);
    const shippingFee = shippingOption ? shippingOption.price : 0;

    // Calculate the subtotal by summing up the total price of each item in the cart
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Calculate the total by adding the subtotal and the shipping fee
    const total = subtotal + shippingFee;

    return (
        <>
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>Rp {subtotal.toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
                <p>Shipping fee</p>
                <p>Rp {shippingFee.toLocaleString()}</p>
            </div>
            <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>Rp {total.toLocaleString()}</p>
            </div>
        </>
    );
}
