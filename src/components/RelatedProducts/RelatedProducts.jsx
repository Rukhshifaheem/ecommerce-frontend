import React from 'react';
import data_product from '../../assets/Frontend_Assets/data.js';
import Item from '../Item/Item.jsx';

const RelatedProducts = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 mt-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">Related Products</h1>
            <div className="w-18 h-1 bg-gray-500 mx-auto mb-6"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data_product.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        className="shadow-md hover:shadow-lg transition rounded-lg p-4"
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
