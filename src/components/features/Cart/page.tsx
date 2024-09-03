import CartTable from 'coffee/components/features/Cart/components/CartTable';
import CartTotal from 'coffee/components/features/Cart/components/CartTotal';

const Cart = () => {
    return (
        <section className="border-t-2 border-calm-brown">
            <h1 className="text-6xl text-center text-calm-black font-black p-10">Your Order</h1>
            <CartTable />
            {/* <CartTotal /> */}
        </section>

    )
}

export default Cart;