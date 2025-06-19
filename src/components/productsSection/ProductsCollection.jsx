import ProductsControls from './ProductsControls';
import ProductsGrid from './ProductsGrid';

export const ProductsCollection = () => {
    return (
        <div className="products flex-1 w-full md:max-w-[calc(100%-232px)]">
            <ProductsControls />
            <ProductsGrid>
                <h1>Место для продукта</h1>
            </ProductsGrid>
        </div>
    );
};