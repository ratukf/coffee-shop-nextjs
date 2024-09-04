import { useAtom } from 'jotai';
import { useRouter } from 'next/router'

import { selectedShippingServiceAtom } from 'coffee/store/ShippingServiceAtom';
import { selectedPaymentMethodAtom } from 'coffee/store/PaymentMethodAtom';

export default function CheckoutButton() {
    const [selectedShippingService] = useAtom(selectedShippingServiceAtom);
    const [selectedPaymentMethod] = useAtom(selectedPaymentMethodAtom);

    const router = useRouter();

    const handleCheckout = () => {
        if (!selectedShippingService) {
            alert('Please select a shipping service');
            return;
        }

        if (!selectedPaymentMethod) {
            alert('Please select a payment method');
            return;
        }

        router.push('/orderSuccedd')

    }

    return (
        <section className="w-full flex justify-center">
            <button onClick={handleCheckout} className="bg-calm-brown p-4 text-calm-black text-xl rounded shadow-lg transition ease-in-out hover:translate-y-1 hover:scale-110 duration-200">Checkout</button>
        </section>
    )
}