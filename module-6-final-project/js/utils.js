// Утилиты

// Форматирование цены
function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(price);
}

// Создание карточки товара
function createProductCard(product) {
    const isFavorite = FavoritesStorage.isFavorite(product.id);
    const discount = product.oldPrice
        ? Math.round((1 - product.price / product.oldPrice) * 100)
        : 0;

    return `
        <div class="product-card" data-id="${product.id}">
            ${!product.inStock ? '<div class="product-badge out-of-stock">Нет в наличии</div>' : ''}
            ${product.new ? '<div class="product-badge new">Новинка</div>' : ''}
            ${discount > 0 ? `<div class="product-badge discount">-${discount}%</div>` : ''}
            
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${product.id}">
                ❤️
            </button>
            
            <a href="product.html?id=${product.id}" class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </a>
            
            <div class="product-info">
                <h3 class="product-name">
                    <a href="product.html?id=${product.id}">${product.name}</a>
                </h3>
                
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(Math.round(product.rating))}</span>
                    <span class="rating-value">${product.rating}</span>
                    <span class="reviews-count">(${product.reviews})</span>
                </div>
                
                <div class="product-price">
                    <span class="price-current">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                
                <button class="btn btn-primary btn-block add-to-cart-btn" 
                        data-id="${product.id}" 
                        ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? '🛒 В корзину' : 'Нет в наличии'}
                </button>
            </div>
        </div>
    `;
}

// Создание карточки категории
function createCategoryCard(category) {
    return `
        <a href="catalog.html?category=${category.id}" class="category-card">
            <div class="category-icon">${category.icon}</div>
            <h3 class="category-name">${category.name}</h3>
        </a>
    `;
}

// Показать уведомление
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Анимация появления
    setTimeout(() => notification.classList.add('show'), 10);

    // Удаление через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Обновить счётчик корзины
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const count = CartStorage.getItemCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

// Обновить счётчик избранного
function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesBadge');
    if (badge) {
        const count = FavoritesStorage.getFavorites().length;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

// Добавить товар в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;

    CartStorage.addItem(product);
    updateCartBadge();
    showNotification(`${product.name} добавлен в корзину`);
}

// Переключить избранное
function toggleFavorite(productId) {
    const id = parseInt(productId);
    FavoritesStorage.toggleItem(id);
    updateFavoritesBadge();

    const isFavorite = FavoritesStorage.isFavorite(id);
    const product = products.find(p => p.id === id);

    if (isFavorite) {
        showNotification(`${product.name} добавлен в избранное`);
    } else {
        showNotification(`${product.name} удалён из избранного`, 'info');
    }

    // Обновить кнопку
    const btn = document.querySelector(`.favorite-btn[data-id="${productId}"]`);
    if (btn) {
        btn.classList.toggle('active', isFavorite);
    }
}

// Получить параметр из URL
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Debounce функция
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatPrice,
        createProductCard,
        createCategoryCard,
        showNotification,
        updateCartBadge,
        updateFavoritesBadge,
        addToCart,
        toggleFavorite,
        getUrlParameter,
        debounce
    };
}
