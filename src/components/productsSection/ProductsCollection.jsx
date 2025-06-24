import ProductsControls from './ProductsControls';
import ProductsGrid from './ProductsGrid'
import ProductCard from "./ProductCard.jsx";

export const ProductsCollection = ({products}) => {

    return (
        <div className="products flex-1 w-full">
            <ProductsControls products={products} />
            <ProductsGrid>
                <ProductCard product={products[0]} />
            </ProductsGrid>
        </div>
    );
};