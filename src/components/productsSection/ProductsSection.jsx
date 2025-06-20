const ProductsSection = ({ children }) => {
    return (
        <section className="products-section flex flex-col lg:flex-row gap-8">
            {children}
        </section>
    );
};

export default ProductsSection;