const ProductsControls = () => {
    return (
        <div className="products-controls flex justify-between items-center mb-4">
            <div>
                <span>Найдено: </span>
                <strong>12 образов</strong>
            </div>
            <select className="sort-select p-2 border border-gray-200 rounded text-sm">
                <option>Сортировать: По цене (возр.)</option>
                <option>По цене (убыв.)</option>
                <option>По новизне</option>
                <option>По популярности</option>
            </select>
        </div>
    );
};

export default ProductsControls;