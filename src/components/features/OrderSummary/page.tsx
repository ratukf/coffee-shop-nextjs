import Card from 'coffee/components/common/Card'
import CheckOutInformation from 'coffee/components/features/OrderSummary/components/CheckoutInformation/index';
import OrderSummaryComponent from 'coffee/components/features/OrderSummary/components/OrderSummary/index';

export default function OrderSummaryPage() {
    return (
        <section className="border-t-2 border-calm-brown p-8 flex flex-wrap gap-10 ">
            <Card title="Checkout Information">
                <CheckOutInformation />
            </Card>
            <Card title="Order Summary">
                <OrderSummaryComponent />
            </Card>
        </section>
    )
}