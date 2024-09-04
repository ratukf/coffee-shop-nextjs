import Card from 'coffee/components/common/Card'
import CheckOutInformation from './components/CheckoutInformation'

export default function OrderSummaryPage() {
    return (
        <section className="border-t-2 border-calm-brown p-8 flex flex-wrap w-full border-2 gap-10">
            <Card title="Checkout Information">
                <CheckOutInformation />
            </Card>
            <Card title="Order Summary">
                <h2>Subtotal: $120</h2>
                <h2>Tax: $10</h2>
                <h2>Total: $130</h2>
            </Card>
        </section>
    )
}