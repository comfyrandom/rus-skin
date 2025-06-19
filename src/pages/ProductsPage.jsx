import ProductsSection from "../components/productsSection/ProductsSection.jsx";
import ProductSidebar from "../components/productsSection/ProductSidebar.jsx";
import { ProductsCollection } from "../components/productsSection/ProductsCollection.jsx";

function ProductsPage() {
    return (
        <ProductsSection>
            <ProductSidebar />
            <ProductsCollection />
        </ProductsSection>
    );
}

export default ProductsPage;