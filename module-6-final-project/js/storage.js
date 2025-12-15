// Работа с LocalStorage

class Storage {
    // Получить данные
    static get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Ошибка чтения из localStorage:', error);
            return defaultValue;
        }
    }

    // Сохранить данные
    static set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Ошибка записи в localStorage:', error);
            return false;
        }
    }

    // Удалить данные
    static remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Ошибка удаления из localStorage:', error);
            return false;
        }
    }

    // Очистить все данные
    static clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Ошибка очистки localStorage:', error);
            return false;
        }
    }
}

// Управление корзиной
class CartStorage {
    static CART_KEY = 'shop_cart';

    // Получить корзину
    static getCart() {
        return Storage.get(this.CART_KEY, []);
    }

    // Сохранить корзину
    static saveCart(cart) {
        return Storage.set(this.CART_KEY, cart);
    }

    // Добавить товар в корзину
    static addItem(product, quantity = 1) {
        const cart = this.getCart();
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }

        this.saveCart(cart);
        return cart;
    }

    // Удалить товар из корзины
    static removeItem(productId) {
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== productId);
        this.saveCart(cart);
        return cart;
    }

    // Обновить количество товара
    static updateQuantity(productId, quantity) {
        const cart = this.getCart();
        const item = cart.find(item => item.id === productId);

        if (item) {
            if (quantity <= 0) {
                return this.removeItem(productId);
            }
            item.quantity = quantity;
            this.saveCart(cart);
        }

        return cart;
    }

    // Очистить корзину
    static clearCart() {
        return Storage.set(this.CART_KEY, []);
    }

    // Получить количество товаров
    static getItemCount() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Получить общую сумму
    static getTotal() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}

// Управление избранным
class FavoritesStorage {
    static FAVORITES_KEY = 'shop_favorites';

    // Получить избранное
    static getFavorites() {
        return Storage.get(this.FAVORITES_KEY, []);
    }

    // Сохранить избранное
    static saveFavorites(favorites) {
        return Storage.set(this.FAVORITES_KEY, favorites);
    }

    // Добавить в избранное
    static addItem(productId) {
        const favorites = this.getFavorites();
        if (!favorites.includes(productId)) {
            favorites.push(productId);
            this.saveFavorites(favorites);
        }
        return favorites;
    }

    // Удалить из избранного
    static removeItem(productId) {
        let favorites = this.getFavorites();
        favorites = favorites.filter(id => id !== productId);
        this.saveFavorites(favorites);
        return favorites;
    }

    // Переключить избранное
    static toggleItem(productId) {
        const favorites = this.getFavorites();
        if (favorites.includes(productId)) {
            return this.removeItem(productId);
        } else {
            return this.addItem(productId);
        }
    }

    // Проверить, в избранном ли товар
    static isFavorite(productId) {
        const favorites = this.getFavorites();
        return favorites.includes(productId);
    }

    // Очистить избранное
    static clearFavorites() {
        return Storage.set(this.FAVORITES_KEY, []);
    }
}

// Управление пользователем
class UserStorage {
    static USER_KEY = 'shop_user';

    // Получить пользователя
    static getUser() {
        return Storage.get(this.USER_KEY, null);
    }

    // Сохранить пользователя
    static saveUser(user) {
        return Storage.set(this.USER_KEY, user);
    }

    // Удалить пользователя (выход)
    static removeUser() {
        return Storage.remove(this.USER_KEY);
    }

    // Проверить, авторизован ли пользователь
    static isLoggedIn() {
        return this.getUser() !== null;
    }
}

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Storage, CartStorage, FavoritesStorage, UserStorage };
}
