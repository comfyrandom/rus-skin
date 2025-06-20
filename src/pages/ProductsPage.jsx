import ProductsSection from "../components/productsSection/ProductsSection.jsx";
import { ProductsCollection } from "../components/productsSection/ProductsCollection.jsx";
import { useState } from "react";
import ProductsSidebar from "../components/productsSection/ProductsSidebar.jsx";

function ProductsPage() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <ProductsSection>
            <button
                className="lg:hidden mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setShowSidebar(!showSidebar)}
            >
                {showSidebar ? "Закрыть фильтры" : "Открыть фильтры"}
            </button>

            <ProductsSidebar className={`${showSidebar ? "block" : "hidden"} lg:block`} />
            <ProductsCollection />
        </ProductsSection>
    );
}

export default ProductsPage;
