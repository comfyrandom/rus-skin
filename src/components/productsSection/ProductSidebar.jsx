const ProductSidebar = () => {
    return (
        <aside className="sidebar w-full md:w-[250px] md:max-h-[600px] md:overflow-y-auto bg-white rounded-xl p-4 shadow-[0_1px_4px_#e3ebfc,0_6px_16px_rgba(230,235,245,0.8)]">
            <h3 className="text-lg font-bold mb-4">Фильтры</h3>

            <div className="filter-group mb-4">
                <label className="block text-sm text-gray-800 mb-2">Цена ($)</label>
                <div className="price-inputs flex gap-2 mb-2">
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-200 rounded"
                        placeholder="Мин"
                    />
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-200 rounded"
                        placeholder="Макс"
                    />
                </div>
                <input
                    type="range"
                    className="w-full"
                />
            </div>

            <div className="filter-group mb-4">
                <label className="block text-sm text-gray-800 mb-2">Тип застёжки</label>
                <select className="w-full p-2 border border-gray-200 rounded text-sm">
                    <option>Все</option>
                    <option>Молния на спине</option>
                    <option>Через промежность</option>
                </select>
            </div>

            <div className="filter-group mb-4">
                <label className="block text-sm text-gray-800 mb-2">Цвет глаз</label>
                <select className="w-full p-2 border border-gray-200 rounded text-sm">
                    <option>Все</option>
                    <option>Голубые</option>
                    <option>Зелёные</option>
                    <option>Карие</option>
                    <option>Серые</option>
                </select>
            </div>

            <div className="filter-group mb-4">
                <label className="block text-sm text-gray-800 mb-2">Вес</label>
                <select className="w-full p-2 border border-gray-200 rounded text-sm">
                    <option>Все</option>
                    <option>&lt;60 кг</option>
                    <option>60-65 кг</option>
                    <option>&gt;65 кг</option>
                </select>
            </div>

            <div className="filter-group mb-4">
                <label className="block text-sm text-gray-800 mb-2">Рост</label>
                <select className="w-full p-2 border border-gray-200 rounded text-sm">
                    <option>Все</option>
                    <option>&lt;165 см</option>
                    <option>165-170 см</option>
                    <option>&gt;170 см</option>
                </select>
            </div>

            <div className="filter-group">
                <label className="block text-sm text-gray-800 mb-2">Оригинальный образ</label>
                <select className="w-full p-2 border border-gray-200 rounded text-sm">
                    <option>Все</option>
                    <option>Образ из Дубая</option>
                    <option>Клубный стиль</option>
                    <option>Семейный образ</option>
                    <option>Европейская коллекция</option>
                </select>
            </div>
        </aside>
    );
};

export default ProductSidebar;