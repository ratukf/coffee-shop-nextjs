import React from 'react';
import { useAtom } from 'jotai';

import { selectedShippingServiceAtom } from 'coffee/store/ShippingServiceAtom';
import OptionButton from 'coffee/components/common/OptionButton';

export default function ShippingService() {
    const [selectedShippingService, setSelectedShippingService] = useAtom(selectedShippingServiceAtom);

    const handleSelectShipping = (value: string) => {
        setSelectedShippingService(value);
    };

        return (
        <div className="flex flex-col space-y-4 my-4">
            <h2 className="text-lg font-semibold">Shipping Service</h2>
            <div className="flex space-x-4 flex-wrap">
                <OptionButton
                    name="shipping"
                    value="standard"
                    id="standard-delivery"
                    onClick={() => handleSelectShipping("KoJek")}
                    isActive={selectedShippingService === "KoJek"}
                >
                    <div>
                        <div className="font-medium">KoJek</div>
                        <div>10000</div>
                        <div className="text-sm text-gray-500">Estimated 45 minutes delivery</div>
                    </div>
                </OptionButton>

                <OptionButton
                    name="shipping"
                    value="express"
                    id="express-delivery"
                    onClick={() => handleSelectShipping("Krab")}
                    isActive={selectedShippingService === "Krab"}
                >
                    <div>
                        <div className="font-medium">Krab</div>
                        <div>15000</div>
                        <div className="text-sm text-gray-500">Estimated 30 minutes delivery</div>
                    </div>
                </OptionButton>

                <OptionButton
                    name="shipping"
                    value="pickup"
                    id="store-pickup"
                    onClick={() => handleSelectShipping("pickup")}
                    isActive={selectedShippingService === "pickup"}
                >
                    <div>
                        <div className="font-medium">Store Pickup</div>
                        <div>Free</div>
                        <div className="text-sm text-gray-500">Pickup your purchase today to our store</div>
                    </div>
                </OptionButton>
            </div>
        </div>
        )

}