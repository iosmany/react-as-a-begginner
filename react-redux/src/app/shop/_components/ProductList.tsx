
import React from 'react';
import ProductCard from './ProductCard';
import { useAppSelector } from '@/redux/hooks';

const ProductList = () => {

    const products = useAppSelector((state) => state.products);
    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;