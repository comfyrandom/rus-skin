const ProductsGrid = ({ children }) => {
    return (
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 py-4">
            {children}
        </div>
    );
};

export default ProductsGrid;