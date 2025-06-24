import ProductsSection from "../components/productsSection/ProductsSection.jsx";
import { ProductsCollection } from "../components/productsSection/ProductsCollection.jsx";

function ProductsPage() {

    const products = [
        {
            id: 1,
            title: "Екатерина Смирнова",
            location: "Москва",
            owner: 'РосШкур',
            price: 1999.99,
            image: "https://grevrwdhbvzyevkdvoig.supabase.co/storage/v1/object/public/product-pictures/russian_wives/1.webp",
        },
    ];

    return (
        <ProductsSection>
            <ProductsCollection products={products} />
        </ProductsSection>
    );
}

export default ProductsPage;
