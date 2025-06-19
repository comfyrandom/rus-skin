const ProductsGrid = ({ children }) => {
    return (
        <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            {children}
        </div>
    );
};

export default ProductsGrid;