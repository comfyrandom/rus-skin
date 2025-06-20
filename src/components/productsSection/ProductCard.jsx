import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 max-sm:h-96 sm:h-64 object-cover"
            />

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
                <p className="text-xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>

                <div className="flex space-x-2">
                    <button
                        className="flex-1 flex items-center justify-center py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                        onClick={() => alert(`Товар ${product.id} добавлен в корзину`)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        В корзину
                    </button>
                    <button
                        className="flex-1 flex items-center justify-center py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded transition-colors"
                        onClick={() => alert(`Переход к деталям товара ${product.id}`)}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;