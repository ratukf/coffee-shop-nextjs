interface ShippingTypes {
    name: string;
    price: number;
    time: number;
}

type ShippingsTypes = ShippingTypes[];

export type { ShippingsTypes };

export default ShippingTypes;