interface MenuTypes {
    url: string;
    title: string;
    description: string;
    price: number;
    reviewer1: string;
    reviewer2: string;
    review1: string;
    review2: string;
}

type MenusTypes = MenuTypes[];

export type { MenusTypes };

export default MenuTypes;