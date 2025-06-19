import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import CartService from "../../services/cartService.js";

const ProductCart = ({ className = "" }) => {
    const itemsCount = CartService.getTotalItems();

    return (
        <Link to={'cart'} className={`cart-icon relative ${className}`}>
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-800 text-lg" />
            {itemsCount > 0 && (
                <span className="cart-count absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                    {itemsCount}
                </span>
            )}
        </Link>
    );
};

export default ProductCart;