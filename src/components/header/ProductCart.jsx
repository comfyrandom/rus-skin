import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCart = ({ count = 0, className = "" }) => {
    return (
        <a href="#" className={`cart-icon relative ${className}`}>
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-800 text-lg" />
            {count > 0 && (
                <span className="cart-count absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                    {count}
                </span>
            )}
        </a>
    );
};

export default ProductCart;