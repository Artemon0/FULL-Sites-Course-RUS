# Адаптивный дизайн

## Что такое адаптивный дизайн?

Адаптивный дизайн позволяет сайту корректно отображаться на устройствах с разными размерами экрана.

## Viewport meta тег

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Media Queries (медиа-запросы)

### Базовый синтаксис
```css
/* Для экранов шире 768px */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
    }
}

/* Для экранов уже 768px */
@media (max-width: 767px) {
    .container {
        padding: 10px;
    }
}
```

### Стандартные breakpoints
```css
/* Mobile First подход */

/* Мобильные устройства (по умолчанию) */
.container {
    width: 100%;
    padding: 15px;
}

/* Планшеты (768px и выше) */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Десктопы (1024px и выше) */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}

/* Большие экраны (1280px и выше) */
@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
}
```

### Комбинированные условия
```css
/* И (and) */
@media (min-width: 768px) and (max-width: 1023px) {
    /* Только для планшетов */
}

/* Или (,) */
@media (max-width: 767px), (min-width: 1280px) {
    /* Для мобильных или больших экранов */
}

/* Ориентация */
@media (orientation: portrait) {
    /* Вертикальная ориентация */
}

@media (orientation: landscape) {
    /* Горизонтальная ориентация */
}
```

## Относительные единицы

### em и rem
```css
/* em - относительно родителя */
.parent {
    font-size: 16px;
}
.child {
    font-size: 1.5em; /* 24px */
    padding: 1em; /* 24px */
}

/* rem - относительно корневого элемента */
html {
    font-size: 16px;
}
.element {
    font-size: 1.5rem; /* 24px */
    margin: 2rem; /* 32px */
}
```

### Проценты
```css
.container {
    width: 100%; /* от ширины родителя */
}

.sidebar {
    width: 25%; /* 1/4 от родителя */
}
```

### vw и vh (viewport units)
```css
.hero {
    width: 100vw; /* 100% ширины viewport */
    height: 100vh; /* 100% высоты viewport */
}

.title {
    font-size: 5vw; /* 5% от ширины viewport */
}
```

## Адаптивные изображения

### CSS подход
```css
img {
    max-width: 100%;
    height: auto;
}
```

### HTML подход
```html
<!-- Picture элемент -->
<picture>
    <source media="(min-width: 1024px)" srcset="large.jpg">
    <source media="(min-width: 768px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Описание">
</picture>

<!-- Srcset атрибут -->
<img src="image.jpg" 
     srcset="image-small.jpg 480w,
             image-medium.jpg 768w,
             image-large.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     alt="Описание">
```

## Адаптивная типографика

### Фиксированные размеры
```css
body {
    font-size: 14px;
}

@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
}

@media (min-width: 1024px) {
    body {
        font-size: 18px;
    }
}
```

### Fluid Typography (плавная типографика)
```css
/* Использование clamp() */
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    /* минимум 2rem, предпочтительно 5vw, максимум 4rem */
}

/* Использование calc() */
body {
    font-size: calc(14px + 0.5vw);
}
```

## Адаптивные сетки

### Flexbox
```css
.flex-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.flex-item {
    flex: 1 1 300px; /* минимум 300px */
}
```

### Grid
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

## Скрытие элементов

```css
/* Скрыть на мобильных */
.desktop-only {
    display: none;
}

@media (min-width: 768px) {
    .desktop-only {
        display: block;
    }
}

/* Скрыть на десктопе */
.mobile-only {
    display: block;
}

@media (min-width: 768px) {
    .mobile-only {
        display: none;
    }
}
```

## Адаптивное меню

```css
/* Мобильное меню */
.nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
}

.nav.active {
    display: flex;
    flex-direction: column;
}

/* Десктопное меню */
@media (min-width: 768px) {
    .nav {
        display: flex;
        position: static;
        height: auto;
        flex-direction: row;
    }
    
    .menu-toggle {
        display: none;
    }
}
```

## Практический пример: Адаптивная карточка

```css
.card {
    /* Мобильная версия */
    display: flex;
    flex-direction: column;
    padding: 15px;
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

/* Планшеты */
@media (min-width: 768px) {
    .card {
        flex-direction: row;
        padding: 20px;
    }
    
    .card-image {
        width: 40%;
        height: auto;
    }
}

/* Десктоп */
@media (min-width: 1024px) {
    .card {
        padding: 30px;
    }
}
```

## Лучшие практики

1. **Mobile First** - начинайте с мобильной версии
2. **Тестируйте на реальных устройствах**
3. **Используйте относительные единицы**
4. **Оптимизируйте изображения**
5. **Делайте touch-friendly интерфейсы** (минимум 44x44px для кнопок)
6. **Избегайте горизонтальной прокрутки**

## Практическое задание

Создайте адаптивную страницу:
1. Шапка с меню (бургер на мобильных)
2. Сетка карточек (1 колонка на мобильных, 2 на планшетах, 3 на десктопе)
3. Адаптивная типографика
4. Адаптивные изображения
5. Скрываемые элементы на разных устройствах
