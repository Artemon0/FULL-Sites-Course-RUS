# Проект 5: Приложение погоды

## Цель проекта
Создать приложение для отображения погоды с использованием API, async/await и современных возможностей JavaScript.

## Требования

### Обязательные функции:
- [ ] Поиск города
- [ ] Текущая погода
- [ ] Прогноз на 5 дней
- [ ] Геолокация
- [ ] Избранные города
- [ ] Переключение единиц (°C/°F)
- [ ] Индикаторы загрузки
- [ ] Обработка ошибок

### Технические требования:
- Использовать Fetch API
- Async/await для асинхронных операций
- LocalStorage для избранного
- ES6+ возможности
- Обработка ошибок
- Адаптивный дизайн

## API

Используйте бесплатный API OpenWeatherMap:
- Регистрация: https://openweathermap.org/api
- Документация: https://openweathermap.org/current

### Примеры запросов:

```javascript
// Текущая погода по названию города
const API_KEY = 'your_api_key';
const city = 'Moscow';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;

// Прогноз на 5 дней
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;

// По координатам
const lat = 55.7558;
const lon = 37.6173;
const geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`;
```

## Структура проекта

```
project-5-weather/
├── index.html
├── css/
│   ├── style.css
│   ├── weather-card.css
│   └── animations.css
├── js/
│   ├── config.js          # API ключ и настройки
│   ├── api.js             # Работа с API
│   ├── storage.js         # LocalStorage
│   ├── ui.js              # Обновление интерфейса
│   ├── geolocation.js     # Геолокация
│   └── main.js            # Главный файл
└── README.md
```

## Реализация

### 1. Конфигурация (config.js)
```javascript
const CONFIG = {
    API_KEY: 'your_api_key_here',
    API_URL: 'https://api.openweathermap.org/data/2.5',
    DEFAULT_CITY: 'Moscow',
    UNITS: 'metric', // metric или imperial
    LANG: 'ru'
};
```

### 2. API модуль (api.js)
```javascript
class WeatherAPI {
    static async getCurrentWeather(city) {
        try {
            const url = `${CONFIG.API_URL}/weather?q=${city}&appid=${CONFIG.API_KEY}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Город не найден');
            }
            
            return await response.json();
        } catch (error) {
            console.error('Ошибка получения погоды:', error);
            throw error;
        }
    }
    
    static async getForecast(city) {
        try {
            const url = `${CONFIG.API_URL}/forecast?q=${city}&appid=${CONFIG.API_KEY}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Прогноз не найден');
            }
            
            return await response.json();
        } catch (error) {
            console.error('Ошибка получения прогноза:', error);
            throw error;
        }
    }
    
    static async getWeatherByCoords(lat, lon) {
        try {
            const url = `${CONFIG.API_URL}/weather?lat=${lat}&lon=${lon}&appid=${CONFIG.API_KEY}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}`;
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error('Ошибка получения погоды по координатам:', error);
            throw error;
        }
    }
}
```

### 3. UI модуль (ui.js)
```javascript
class WeatherUI {
    static showLoading() {
        // Показать индикатор загрузки
    }
    
    static hideLoading() {
        // Скрыть индикатор загрузки
    }
    
    static displayCurrentWeather(data) {
        // Отобразить текущую погоду
        const html = `
            <div class="weather-card">
                <h2>${data.name}</h2>
                <div class="temperature">${Math.round(data.main.temp)}°C</div>
                <div class="description">${data.weather[0].description}</div>
                <div class="details">
                    <div>Ощущается: ${Math.round(data.main.feels_like)}°C</div>
                    <div>Влажность: ${data.main.humidity}%</div>
                    <div>Ветер: ${data.wind.speed} м/с</div>
                </div>
            </div>
        `;
        document.getElementById('current-weather').innerHTML = html;
    }
    
    static displayForecast(data) {
        // Отобразить прогноз на 5 дней
    }
    
    static showError(message) {
        // Показать ошибку
    }
}
```

### 4. Главный файл (main.js)
```javascript
class WeatherApp {
    constructor() {
        this.currentCity = CONFIG.DEFAULT_CITY;
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadWeather(this.currentCity);
    }
    
    setupEventListeners() {
        // Поиск города
        document.getElementById('search-btn').addEventListener('click', () => {
            const city = document.getElementById('city-input').value;
            if (city) {
                this.loadWeather(city);
            }
        });
        
        // Геолокация
        document.getElementById('location-btn').addEventListener('click', () => {
            this.loadWeatherByLocation();
        });
    }
    
    async loadWeather(city) {
        try {
            WeatherUI.showLoading();
            
            const [current, forecast] = await Promise.all([
                WeatherAPI.getCurrentWeather(city),
                WeatherAPI.getForecast(city)
            ]);
            
            WeatherUI.displayCurrentWeather(current);
            WeatherUI.displayForecast(forecast);
            
            this.currentCity = city;
        } catch (error) {
            WeatherUI.showError(error.message);
        } finally {
            WeatherUI.hideLoading();
        }
    }
    
    async loadWeatherByLocation() {
        try {
            const position = await this.getCurrentPosition();
            const { latitude, longitude } = position.coords;
            
            WeatherUI.showLoading();
            const data = await WeatherAPI.getWeatherByCoords(latitude, longitude);
            WeatherUI.displayCurrentWeather(data);
        } catch (error) {
            WeatherUI.showError('Не удалось получить геолокацию');
        } finally {
            WeatherUI.hideLoading();
        }
    }
    
    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
}

// Запуск приложения
const app = new WeatherApp();
```

## Функционал

### 1. Поиск города
- Поле ввода с автодополнением
- Кнопка поиска
- Обработка Enter

### 2. Текущая погода
- Температура
- Описание
- Иконка погоды
- Ощущается как
- Влажность
- Скорость ветра
- Давление

### 3. Прогноз
- Карточки на 5 дней
- Минимальная/максимальная температура
- Иконки погоды
- Описание

### 4. Избранные города
- Добавление в избранное
- Список избранных
- Быстрый переход
- Удаление из избранного

### 5. Дополнительно
- Анимации
- Фоновые изображения по погоде
- Графики температуры
- Почасовой прогноз

## Шаги выполнения

1. **Настройка (1 час)**
   - Получить API ключ
   - Создать структуру проекта
   - Настроить конфигурацию

2. **API интеграция (2 часа)**
   - Реализовать запросы
   - Обработать ответы
   - Добавить обработку ошибок

3. **UI (3 часа)**
   - Создать интерфейс
   - Стилизовать карточки
   - Добавить анимации

4. **Функционал (3 часа)**
   - Поиск города
   - Геолокация
   - Избранное
   - Переключение единиц

5. **Полировка (1 час)**
   - Тестирование
   - Оптимизация
   - Исправление багов

## Дополнительные задания

1. **Расширенный функционал:**
   - Карта с погодой
   - Уведомления о погоде
   - Виджет для рабочего стола
   - Экспорт данных

2. **Визуализация:**
   - Графики температуры (Chart.js)
   - Анимированные иконки
   - Динамический фон
   - Темная тема

3. **Оптимизация:**
   - Кэширование запросов
   - Offline режим
   - PWA функционал
   - Оптимизация изображений

## Результат

Полнофункциональное приложение погоды с современным интерфейсом и всеми необходимыми возможностями!
