# Основы CSS

## Что такое CSS?

CSS (Cascading Style Sheets) - каскадные таблицы стилей, используются для оформления HTML элементов.

## Способы подключения CSS

### 1. Внешний файл (рекомендуется)
```html
<link rel="stylesheet" href="style.css">
```

### 2. Внутренние стили
```html
<style>
    p { color: blue; }
</style>
```

### 3. Инлайн стили (не рекомендуется)
```html
<p style="color: blue;">Текст</p>
```

## Селекторы

### Базовые селекторы
```css
/* По тегу */
p { color: black; }

/* По классу */
.my-class { color: red; }

/* По ID */
#my-id { color: blue; }

/* Универсальный селектор */
* { margin: 0; }
```

### Комбинированные селекторы
```css
/* Потомок */
div p { color: red; }

/* Прямой потомок */
div > p { color: blue; }

/* Соседний элемент */
h1 + p { margin-top: 0; }

/* Все следующие элементы */
h1 ~ p { color: gray; }
```

### Псевдоклассы
```css
/* Состояния ссылок */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }

/* Структурные */
li:first-child { font-weight: bold; }
li:last-child { border: none; }
li:nth-child(2n) { background: #f0f0f0; }

/* Другие */
input:focus { border-color: blue; }
input:disabled { opacity: 0.5; }
```

### Псевдоэлементы
```css
/* Первая буква */
p::first-letter { font-size: 2em; }

/* Первая строка */
p::first-line { font-weight: bold; }

/* До и после элемента */
.icon::before { content: "→ "; }
.icon::after { content: " ←"; }
```

## Основные свойства

### Цвета
```css
.element {
    /* Именованные цвета */
    color: red;
    
    /* HEX */
    color: #ff0000;
    
    /* RGB */
    color: rgb(255, 0, 0);
    
    /* RGBA (с прозрачностью) */
    color: rgba(255, 0, 0, 0.5);
    
    /* HSL */
    color: hsl(0, 100%, 50%);
}
```

### Текст
```css
.text {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold; /* 100-900 или normal, bold */
    font-style: italic;
    line-height: 1.5;
    text-align: center; /* left, right, center, justify */
    text-decoration: underline;
    text-transform: uppercase; /* lowercase, capitalize */
    letter-spacing: 2px;
    word-spacing: 5px;
}
```

### Фон
```css
.background {
    background-color: #f0f0f0;
    background-image: url('image.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; /* contain, 100px, 50% */
    
    /* Короткая запись */
    background: #f0f0f0 url('image.jpg') no-repeat center/cover;
}
```

## Box Model (Блочная модель)

```css
.box {
    /* Содержимое */
    width: 300px;
    height: 200px;
    
    /* Внутренние отступы */
    padding: 20px;
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    /* Короткая запись: padding: 10px 15px 10px 15px; */
    
    /* Рамка */
    border: 2px solid black;
    border-radius: 10px;
    
    /* Внешние отступы */
    margin: 20px;
    margin: 10px auto; /* Центрирование */
}
```

## Display свойство

```css
/* Блочный элемент */
.block { display: block; }

/* Строчный элемент */
.inline { display: inline; }

/* Строчно-блочный */
.inline-block { display: inline-block; }

/* Скрыть элемент */
.hidden { display: none; }
```

## Практическое задание

Создайте CSS файл и стилизуйте:
1. Заголовки разных уровней
2. Параграфы с разными шрифтами
3. Ссылки с эффектом при наведении
4. Блок с рамкой, отступами и фоном
5. Список с кастомными маркерами
