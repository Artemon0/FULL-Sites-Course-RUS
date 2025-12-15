// Данные товаров для интернет-магазина
const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'smartphones',
        price: 89990,
        oldPrice: 99990,
        rating: 4.8,
        reviews: 156,
        image: 'images/products/iphone-15-pro.jpg',
        images: [
            'images/products/iphone-15-pro-1.jpg',
            'images/products/iphone-15-pro-2.jpg',
            'images/products/iphone-15-pro-3.jpg'
        ],
        description: 'Новейший флагманский смартфон от Apple с процессором A17 Pro',
        features: [
            'Дисплей 6.1" Super Retina XDR',
            'Процессор A17 Pro',
            'Камера 48 МП',
            'Батарея до 23 часов',
            '128 ГБ памяти'
        ],
        inStock: true,
        popular: true,
        new: true
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        category: 'smartphones',
        price: 84990,
        rating: 4.7,
        reviews: 203,
        image: 'images/products/samsung-s24.jpg',
        images: [
            'images/products/samsung-s24-1.jpg',
            'images/products/samsung-s24-2.jpg'
        ],
        description: 'Мощный смартфон с S Pen и камерой 200 МП',
        features: [
            'Дисплей 6.8" Dynamic AMOLED',
            'Snapdragon 8 Gen 3',
            'Камера 200 МП',
            'Батарея 5000 мАч',
            'S Pen в комплекте'
        ],
        inStock: true,
        popular: true
    },
    {
        id: 3,
        name: 'MacBook Pro 14"',
        category: 'laptops',
        price: 149990,
        oldPrice: 169990,
        rating: 4.9,
        reviews: 89,
        image: 'images/products/macbook-pro.jpg',
        images: [
            'images/products/macbook-pro-1.jpg',
            'images/products/macbook-pro-2.jpg'
        ],
        description: 'Профессиональный ноутбук с чипом M3 Pro',
        features: [
            'Чип Apple M3 Pro',
            '14" Liquid Retina XDR',
            '18 ГБ памяти',
            '512 ГБ SSD',
            'До 18 часов работы'
        ],
        inStock: true,
        popular: true
    },
    {
        id: 4,
        name: 'AirPods Pro 2',
        category: 'headphones',
        price: 19990,
        rating: 4.6,
        reviews: 312,
        image: 'images/products/airpods-pro.jpg',
        images: [
            'images/products/airpods-pro-1.jpg'
        ],
        description: 'Беспроводные наушники с активным шумоподавлением',
        features: [
            'Активное шумоподавление',
            'Пространственный звук',
            'До 6 часов работы',
            'Защита от воды IPX4',
            'USB-C зарядка'
        ],
        inStock: true,
        popular: true,
        new: true
    },
    {
        id: 5,
        name: 'iPad Air 11"',
        category: 'tablets',
        price: 54990,
        rating: 4.7,
        reviews: 145,
        image: 'images/products/ipad-air.jpg',
        images: [
            'images/products/ipad-air-1.jpg',
            'images/products/ipad-air-2.jpg'
        ],
        description: 'Легкий и мощный планшет для работы и творчества',
        features: [
            'Чип M2',
            '11" Liquid Retina',
            '128 ГБ памяти',
            'Поддержка Apple Pencil',
            'Wi-Fi 6E'
        ],
        inStock: true
    },
    {
        id: 6,
        name: 'Apple Watch Series 9',
        category: 'watches',
        price: 34990,
        rating: 4.8,
        reviews: 267,
        image: 'images/products/apple-watch.jpg',
        images: [
            'images/products/apple-watch-1.jpg'
        ],
        description: 'Умные часы с расширенными функциями здоровья',
        features: [
            'Дисплей Always-On',
            'Датчик ЭКГ',
            'Измерение кислорода',
            'До 18 часов работы',
            'Защита от воды 50м'
        ],
        inStock: true,
        popular: true
    },
    {
        id: 7,
        name: 'Sony WH-1000XM5',
        category: 'headphones',
        price: 24990,
        rating: 4.9,
        reviews: 421,
        image: 'images/products/sony-headphones.jpg',
        images: [
            'images/products/sony-headphones-1.jpg'
        ],
        description: 'Премиальные наушники с лучшим шумоподавлением',
        features: [
            'Шумоподавление HD',
            'До 30 часов работы',
            'Быстрая зарядка',
            'Поддержка LDAC',
            'Складная конструкция'
        ],
        inStock: true,
        popular: true
    },
    {
        id: 8,
        name: 'Dell XPS 15',
        category: 'laptops',
        price: 129990,
        rating: 4.6,
        reviews: 78,
        image: 'images/products/dell-xps.jpg',
        images: [
            'images/products/dell-xps-1.jpg'
        ],
        description: 'Мощный ноутбук для профессионалов',
        features: [
            'Intel Core i7-13700H',
            '15.6" 4K OLED',
            '16 ГБ RAM',
            '512 ГБ SSD',
            'NVIDIA RTX 4050'
        ],
        inStock: false
    },
    {
        id: 9,
        name: 'Samsung Galaxy Tab S9',
        category: 'tablets',
        price: 49990,
        rating: 4.5,
        reviews: 92,
        image: 'images/products/samsung-tab.jpg',
        images: [
            'images/products/samsung-tab-1.jpg'
        ],
        description: 'Планшет премиум-класса с S Pen',
        features: [
            'Snapdragon 8 Gen 2',
            '11" Dynamic AMOLED',
            '8 ГБ RAM',
            'S Pen в комплекте',
            'Защита IP68'
        ],
        inStock: true
    },
    {
        id: 10,
        name: 'Google Pixel 8 Pro',
        category: 'smartphones',
        price: 74990,
        rating: 4.7,
        reviews: 134,
        image: 'images/products/pixel-8.jpg',
        images: [
            'images/products/pixel-8-1.jpg'
        ],
        description: 'Смартфон с лучшей камерой и чистым Android',
        features: [
            'Google Tensor G3',
            '6.7" LTPO OLED',
            'Камера 50 МП',
            '7 лет обновлений',
            'Батарея 5050 мАч'
        ],
        inStock: true,
        new: true
    }
];

// Категории товаров
const categories = [
    { id: 'smartphones', name: 'Смартфоны', icon: '📱' },
    { id: 'laptops', name: 'Ноутбуки', icon: '💻' },
    { id: 'tablets', name: 'Планшеты', icon: '📱' },
    { id: 'headphones', name: 'Наушники', icon: '🎧' },
    { id: 'watches', name: 'Часы', icon: '⌚' }
];

// Экспорт данных
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, categories };
}
