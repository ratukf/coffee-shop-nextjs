import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import Card from 'coffee/components/common/Card';
import { selectedShippingServiceAtom } from 'coffee/store/ShippingServiceAtom';
import { selectedPaymentMethodAtom } from 'coffee/store/PaymentMethodAtom';
import successImage from 'coffee/images/success.svg'

export default function OrderSucceed() {
    const [selectedPaymentMethod] = useAtom(selectedPaymentMethodAtom)
    const [selectedShippingService] = useAtom(selectedShippingServiceAtom)

    const [paymentMessage, setPaymentMessage] = useState('')
    const [timeMessage, setTimeMessage] = useState('')

    useEffect(() => {
        const payment = () => {
            if (selectedPaymentMethod === 'card') {
                setPaymentMessage('Please pay to our virtual account: 417841678420')
            } else if (selectedPaymentMethod === 'google-wallet') {
                setPaymentMessage('Tap your device to card reader after delivery arrived')
            } else if (selectedPaymentMethod === 'cash') {
                setPaymentMessage('Please prepare the exact cash')
            }
        }

        const deliveryTime = () => {
            if (selectedShippingService === 'Pickup') {
                setTimeMessage('Please pick up your delivery from our store')
            } else if (selectedShippingService === 'KoJek') {
                setTimeMessage('Your delivery will arrive in 45 minutes')
            } else if (selectedShippingService === 'Krab') {
                setTimeMessage('Your delivery will arrive in 30 minutes')
            }
        }

        payment();
        deliveryTime();
    }, [selectedPaymentMethod, selectedShippingService]);


    return (
        <section className="flex justify-center p-8">
            <Card title="">
                <div className="flex flex-col items-center justify-center text-center">
                    <Image src={successImage} alt="Success" height={200} width={200} className="my-2"/>
                    <h1 className='my-2 font-black text-4xl'>Thank you for ordering!</h1>
                    <p className='my-2'>{timeMessage}</p>
                    <p className='my-2'>{paymentMessage}</p>
                    {selectedPaymentMethod !== 'card' ?
                        (
                            <button className="my-2 bg-calm-brown text-calm-black p-3 rounded shadow-lg font-black">Continue Shopping</button>
                        ) : (
                            <button className="my-2 bg-green-300 text-calm-black p-3 rounded shadow-lg font-black">I have paid</button>
                        )}
                </div>
            </Card>
        </section>
    )
}