import Image from 'next/image'
import { useRouter } from 'next/router';

import Card from 'coffee/components/common/Card';
import imageSuccess from 'coffee/images/success.svg';

export default function PayCardSucceed() {
    const router = useRouter();
    const shopping = () => {
        router.push('/products');
    }
    return (
        <section className="flex justify-center p-8">
            <Card title="">
                <div className="flex flex-col items-center justify-center text-center">
                    <Image src={imageSuccess} alt="Success" width={300} height={300} className="my-4" />
                    <h2 className="my-4 font-black text-xl">Your payment has received</h2>
                    <p className="my-4">Your delivery will be at your door soon</p>
                    <button onClick={shopping} className="bg-calm-brown p-4 text-calm-black font-black rounded shadow-lg hover:p-6 duration-150">Continue Shopping</button> 
                </div>
            </Card>
        </section>
    );
}