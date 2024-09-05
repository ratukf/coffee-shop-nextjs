import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import Card from 'coffee/components/common/Card';
import { selectedShippingServiceAtom } from 'coffee/store/ShippingServiceAtom';
import { selectedPaymentMethodAtom } from 'coffee/store/PaymentMethodAtom';

export default function OrderSucceed() {
    const [selectedPaymentMethod] = useAtom(selectedPaymentMethodAtom)
    const [selectedShippingService] = useAtom(selectedShippingServiceAtom)

    const [paymentMessage, setPaymentMessage] = useState('')
    const [timeMessage, setTimeMessage] = useState('')

    useEffect(() => {
        const payment = () => {
            if (selectedPaymentMethod === 'card') {
                setPaymentMessage('Please pay to our virtual account: 417841678420')
                return;
            }
            if (selectedPaymentMethod === 'google-wallet') {
                setPaymentMessage('Tap your device to card reader after delivery arrived')
                return;
            }
            
            if (selectedPaymentMethod === 'cash') {
                setPaymentMessage('Please prepare the exact cash')
            }
        }
    
        const deliveryTime = () => {
            if (selectedShippingService === 'pickup') {
                setTimeMessage('Please pick up your delivery from our store')
                return;
            }
            if (selectedShippingService === 'KoJek') {
                setTimeMessage('Your delivery will arrive in 45 minutes')
                return;
            }
            if (selectedShippingService === 'Krab') {
                setTimeMessage('Your delivery will arrive in 30 minutes')
            }
        }
    
        payment();
        deliveryTime();
    }, [selectedPaymentMethod, selectedShippingService]);
    

    return (
        <section className="flex justify-center">
            <Card title="">
                <Image src="/public/" alt="Success" height={200} width={200}/>
                <p>Selected shipping: {selectedShippingService}</p>
                <p>Selected payment: {selectedPaymentMethod}</p>
                <p>Time message: {timeMessage}</p>
                <p>Payment message: {paymentMessage}</p>
            </Card>
        </section>
    )
}