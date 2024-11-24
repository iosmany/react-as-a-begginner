
import React from "react";
import type { Product } from "@/models/Catalog";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product } : ProductCardProps) => {

    const addToCart = (product: Product) => {
        console.log(`Added ${product.name} to cart`);
    }
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    );
    
}

export default ProductCard;