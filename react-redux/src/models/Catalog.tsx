
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface Category {
    id: string;
    name: string;
    products: Product[];
}

export type {
    Product,
    Category
}