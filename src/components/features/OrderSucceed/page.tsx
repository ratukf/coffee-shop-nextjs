import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Card from 'coffee/components/common/Card';
import { selectedShippingServiceAtom } from 'coffee/store/ShippingServiceAtom';
import { selectedPaymentMethodAtom } from 'coffee/store/PaymentMethodAtom';
import { cartAtom } from 'coffee/store/CartAtom';
import successImage from 'coffee/images/success.svg';

export default function OrderSucceed() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useAtom(selectedPaymentMethodAtom);
    const [selectedShippingService, setShippingService] = useAtom(selectedShippingServiceAtom);
    const [, setCart] = useAtom(cartAtom);

    const router = useRouter();

    const [paymentMessage, setPaymentMessage] = useState('');
    const [timeMessage, setTimeMessage] = useState('');

    const checkoutHandler = () => {

        setCart([]);
        setSelectedPaymentMethod('');
        setShippingService('');
        if (selectedPaymentMethod !== 'card') {
            router.push('/products')
            return;
        }
        router.push('/orderSucceed/paymentReceived')
    }

    useEffect(() => {
        const payment = () => {
            if (selectedPaymentMethod === 'card') {
                setPaymentMessage('Please pay to our virtual account: 417841678420');
            } else if (selectedPaymentMethod === 'google-wallet') {
                setPaymentMessage('Tap your device to card reader after delivery arrived');
            } else if (selectedPaymentMethod === 'cash') {
                setPaymentMessage('Please prepare the exact cash');
            }
        };

        const deliveryTime = () => {
            if (selectedShippingService === 'pickup') {
                setTimeMessage('Please pick up your delivery from our store');
            } else if (selectedShippingService === 'KoJek') {
                setTimeMessage('Your delivery will arrive in 45 minutes');
            } else if (selectedShippingService === 'Krab') {
                setTimeMessage('Your delivery will arrive in 30 minutes');
            }
        };

        payment();
        deliveryTime();
    }, [selectedPaymentMethod, selectedShippingService]);

    return (
        <section className="flex justify-center p-8">
            <Card title="">
                <div className="flex flex-col items-center justify-center text-center">
                    <Image src={successImage} alt="Success" height={200} width={200} className="my-2" />
                    <h1 className='my-2 font-black text-4xl'>Thank you for ordering!</h1>
                    <p className='my-2'>{timeMessage}</p>
                    <p className='my-2'>{paymentMessage}</p>
                    {selectedPaymentMethod !== 'card' ? (
                        <button onClick={checkoutHandler} className="my-2 bg-calm-brown text-calm-black p-3 rounded shadow-lg font-black hover:p-5 duration-150">Continue Shopping</button>
                    ) : (
                        <button onClick={checkoutHandler} className="my-2 border-2 border-green-600 bg-green-300 text-calm-black p-3 rounded shadow-lg font-black hover:p-5 duration-150">I have paid</button>
                    )}
                </div>
            </Card>
        </section>
    );
};
