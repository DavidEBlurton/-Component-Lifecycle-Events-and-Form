import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import './App.css';

const App = () => {
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleProductSelect = (productId) => {
        setSelectedProductId(productId);
    };

    return (
        <div className="app">
            <h1>Product Store</h1>
            <ProductList onProductSelect={handleProductSelect} />
            <ProductDetail productId={selectedProductId} />
        </div>
    );
};

export default App;

