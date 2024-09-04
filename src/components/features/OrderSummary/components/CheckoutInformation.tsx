import React from 'react';

import ShippingService from 'coffee/components/features/OrderSummary/components/CheckoutInformation/ShippingService';
import PaymentMethod from 'coffee/components/features/OrderSummary/components/CheckoutInformation/PaymentMethod';

export default function CheckOutInformation() {
    return (
        <>
        <ShippingService />
        <PaymentMethod />
        </>
    )
}