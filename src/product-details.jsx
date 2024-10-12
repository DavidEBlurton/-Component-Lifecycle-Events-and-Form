// src/ProductDetail.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetail = async () => {
            if (!productId) return;

            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [productId]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Select a product to view details.</p>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
    );
};

export default ProductDetail;
