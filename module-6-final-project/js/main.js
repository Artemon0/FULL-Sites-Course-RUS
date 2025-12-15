// Главный файл приложения

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

// Инициализация приложения
function initApp() {
    // Обновить счётчики
    updateCartBadge();
    updateFavoritesBadge();

    // Инициализировать главную страницу
    if (document.getElementById('categoriesGrid')) {
        initHomePage();
    }

    // Обработчики событий
    initEventListeners();
}

// Инициализация главной страницы
function initHomePage() {
    // Отобразить категории
    renderCategories();

    // Отобразить популярные товары
    renderPopularProducts();

    // Отобразить новинки
    renderNewProducts();
}

// Отобразить категории
function renderCategories() {
    const container = document.getElementById('categoriesGrid');
    if (!container) return;

    const html = categories.map(category => createCategoryCard(category)).join('');
    container.innerHTML = html;
}

// Отобразить популярные товары
function renderPopularProducts() {
    const container = document.getElementById('popularProducts');
    if (!container) return;

    const popularProducts = products.filter(p => p.popular).slice(0, 4);
    const html = popularProducts.map(product => createProductCard(product)).join('');
    container.innerHTML = html;
}

// Отобразить новинки
function renderNewProducts() {
    const container = document.getElementById('newProducts');
    if (!container) return;

    const newProducts = products.filter(p => p.new).slice(0, 4);
    const html = newProducts.map(product => createProductCard(product)).join('');
    container.innerHTML = html;
}

// Инициализация обработчиков событий
function initEventListeners() {
    // Делегирование событий для кнопок "В корзину"
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.dataset.id;
            addToCart(productId);
        }
    });

    // Делегирование событий для кнопок "Избранное"
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('favorite-btn') ||
            e.target.closest('.favorite-btn')) {
            const btn = e.target.classList.contains('favorite-btn')
                ? e.target
                : e.target.closest('.favorite-btn');
            const productId = btn.dataset.id;
            toggleFavorite(productId);
        }
    });

    // Кнопка корзины
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function () {
            window.location.href = 'cart.html';
        });
    }

    // Кнопка избранного
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', function () {
            window.location.href = 'favorites.html';
        });
    }

    // Кнопка пользователя
    const userBtn = document.getElementById('userBtn');
    if (userBtn) {
        userBtn.addEventListener('click', function () {
            window.location.href = 'profile.html';
        });
    }

    // Мобильное меню
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Поиск
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
}

// Переключение мобильного меню
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

// Обработка поиска
function handleSearch(e) {
    const query = e.target.value.trim().toLowerCase();

    if (query.length < 2) return;

    // Перенаправить на страницу каталога с параметром поиска
    window.location.href = `catalog.html?search=${encodeURIComponent(query)}`;
}

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
