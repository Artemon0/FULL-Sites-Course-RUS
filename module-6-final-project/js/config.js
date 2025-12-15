// Конфигурация приложения

const CONFIG = {
    // Настройки приложения
    APP_NAME: 'TechShop',
    APP_VERSION: '1.0.0',

    // Настройки LocalStorage
    STORAGE_KEYS: {
        CART: 'techshop_cart',
        FAVORITES: 'techshop_favorites',
        USER: 'techshop_user',
        THEME: 'techshop_theme'
    },

    // Настройки отображения
    PRODUCTS_PER_PAGE: 12,
    MAX_CART_ITEMS: 99,

    // Валюта
    CURRENCY: {
        SYMBOL: '₽',
        CODE: 'RUB',
        POSITION: 'after' // 'before' или 'after'
    },

    // Категории товаров
    CATEGORIES: [
        { id: 'all', name: 'Все товары', icon: '📦' },
        { id: 'smartphones', name: 'Смартфоны', icon: '📱' },
        { id: 'laptops', name: 'Ноутбуки', icon: '💻' },
        { id: 'tablets', name: 'Планшеты', icon: '📱' },
        { id: 'headphones', name: 'Наушники', icon: '🎧' },
        { id: 'watches', name: 'Часы', icon: '⌚' }
    ],

    // Сортировка
    SORT_OPTIONS: [
        { value: 'default', label: 'По умолчанию' },
        { value: 'price-asc', label: 'Цена: по возрастанию' },
        { value: 'price-desc', label: 'Цена: по убыванию' },
        { value: 'name-asc', label: 'Название: А-Я' },
        { value: 'name-desc', label: 'Название: Я-А' },
        { value: 'rating', label: 'По рейтингу' }
    ],

    // Фильтры цен
    PRICE_RANGES: [
        { min: 0, max: 20000, label: 'До 20 000 ₽' },
        { min: 20000, max: 50000, label: '20 000 - 50 000 ₽' },
        { min: 50000, max: 100000, label: '50 000 - 100 000 ₽' },
        { min: 100000, max: Infinity, label: 'От 100 000 ₽' }
    ],

    // Настройки доставки
    DELIVERY: {
        FREE_FROM: 50000, // Бесплатная доставка от
        COST: 500, // Стоимость доставки
        DAYS: '1-2' // Срок доставки
    },

    // Уведомления
    NOTIFICATIONS: {
        DURATION: 3000, // Длительность показа (мс)
        POSITION: 'bottom-right' // Позиция
    }
};

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
