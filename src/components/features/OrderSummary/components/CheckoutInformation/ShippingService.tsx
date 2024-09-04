import React from 'react';

import OptionButton from 'coffee/components/common/OptionButton';

export default function ShippingService() {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold mt-4">Shipping Service</h2>
            <div className="flex space-x-4">
                <OptionButton name="shipping" value="standard" id="standard-delivery">
                    <div>
                        <div className="font-medium">KoJek</div>
                        <div>10000</div>
                        <div className="text-sm text-gray-500">Estimated 1 hour delivery</div>
                    </div>
                </OptionButton>

                <OptionButton name="shipping" value="express" id="express-delivery">
                    <div>
                        <div className="font-medium">Krab</div>
                        <div>15000</div>
                        <div className="text-sm text-gray-500">Estimated 3 minutes delivery</div>
                    </div>
                </OptionButton>

                <OptionButton name="shipping" value="pickup" id="store-pickup">
                    <div>
                        <div className="font-medium">Store Pickup</div>
                        <div>Free</div>
                        <div className="text-sm text-gray-500">Pickup your purchase today</div>
                    </div>
                </OptionButton>
            </div>
        </div>

    )
}