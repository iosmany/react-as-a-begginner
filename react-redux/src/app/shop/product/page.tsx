
import React from 'react';
import { Product } from '@/models/Catalog';

interface ProductPageProps {
    product: Product;
}


const ProductPage = ({ product } : ProductPageProps) => {

    return (
        <div>
        <h1>Product Page</h1>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
        </div>
    );
}

export default ProductPage;