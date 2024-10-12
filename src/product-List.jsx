import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ onProductSelect }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item" onClick={() => onProductSelect(product.id)}>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
