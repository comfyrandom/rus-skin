import ProductsControls from './ProductsControls';
import ProductsGrid from './ProductsGrid'
import ProductCard from "./ProductCard.jsx";

export const ProductsCollection = () => {

    const products = [
        {
            id: 1,
            title: "Таня — Роскошная Искусительница",
            price: 1999.99,
            image: "https://grevrwdhbvzyevkdvoig.supabase.co/storage/v1/object/public/product-pictures/russian_wives/1.webp",
            weight: "55 кг",
            height: "165 см",
            eyeColor: "Голубые",
            entry: "Молния на спине",
            original: "Образ создан в Дубае",
            description: "Изысканная внешность с выразительными губами и соблазнительной фигурой..."
        },
        // другие продукты
    ];

    return (
        <div className="products flex-1 w-full">
            <ProductsControls />
            <ProductsGrid>
                <ProductCard product={products[0]} />
                <ProductCard product={products[0]} />
                <ProductCard product={products[0]} />
                <ProductCard product={products[0]} />
                <ProductCard product={products[0]} />

            </ProductsGrid>
        </div>
    );
};