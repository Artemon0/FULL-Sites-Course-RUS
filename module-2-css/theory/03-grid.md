# CSS Grid - Сеточная разметка

## Что такое Grid?

CSS Grid - это двумерная система раскладки, позволяющая создавать сложные макеты с рядами и колонками.

## Основы Grid

### Создание grid контейнера
```css
.container {
    display: grid;
}
```

## Определение сетки

### grid-template-columns (колонки)
```css
.container {
    /* Фиксированные размеры */
    grid-template-columns: 200px 200px 200px;
    
    /* Проценты */
    grid-template-columns: 25% 50% 25%;
    
    /* Фракции (fr) */
    grid-template-columns: 1fr 2fr 1fr;
    
    /* Повторение */
    grid-template-columns: repeat(3, 1fr);
    
    /* Автоматический размер */
    grid-template-columns: auto 1fr auto;
    
    /* Минимум и максимум */
    grid-template-columns: repeat(3, minmax(200px, 1fr));
}
```

### grid-template-rows (ряды)
```css
.container {
    grid-template-rows: 100px 200px 100px;
    grid-template-rows: repeat(3, 150px);
}
```

### gap (промежутки)
```css
.container {
    gap: 20px; /* между рядами и колонками */
    row-gap: 20px; /* между рядами */
    column-gap: 10px; /* между колонками */
}
```

## Размещение элементов

### grid-column и grid-row
```css
.item {
    /* Занимает колонки с 1 по 3 */
    grid-column: 1 / 3;
    grid-column-start: 1;
    grid-column-end: 3;
    
    /* Занимает 2 колонки */
    grid-column: span 2;
    
    /* Ряды */
    grid-row: 1 / 3;
    grid-row: span 2;
}
```

### grid-area (именованные области)
```css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Выравнивание

### justify-items (по горизонтали)
```css
.container {
    justify-items: start; /* к началу */
    justify-items: end; /* к концу */
    justify-items: center; /* по центру */
    justify-items: stretch; /* растянуть (по умолчанию) */
}
```

### align-items (по вертикали)
```css
.container {
    align-items: start;
    align-items: end;
    align-items: center;
    align-items: stretch;
}
```

### justify-content и align-content (выравнивание всей сетки)
```css
.container {
    justify-content: start;
    justify-content: end;
    justify-content: center;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
    
    align-content: start;
    align-content: end;
    align-content: center;
}
```

### Индивидуальное выравнивание
```css
.item {
    justify-self: center;
    align-self: center;
}
```

## Автоматическое размещение

### grid-auto-flow
```css
.container {
    grid-auto-flow: row; /* по умолчанию, по рядам */
    grid-auto-flow: column; /* по колонкам */
    grid-auto-flow: dense; /* плотная упаковка */
}
```

### grid-auto-columns и grid-auto-rows
```css
.container {
    grid-auto-rows: 150px; /* размер автоматических рядов */
    grid-auto-columns: 200px; /* размер автоматических колонок */
}
```

## Практические примеры

### Простая сетка 3x3
```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

### Адаптивная сетка
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

### Макет страницы
```css
.page {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
    gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### Галерея с разными размерами
```css
.gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    gap: 10px;
}

.gallery-item:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
}

.gallery-item:nth-child(5) {
    grid-column: span 2;
}
```

### Карточки товаров
```css
.products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}
```

## Flexbox vs Grid

**Используйте Flexbox когда:**
- Одномерная раскладка (ряд или колонка)
- Размеры элементов определяются содержимым
- Нужна гибкость в размерах

**Используйте Grid когда:**
- Двумерная раскладка (ряды и колонки)
- Нужен точный контроль над размещением
- Сложные макеты страниц

## Практическое задание

Создайте с помощью Grid:
1. Галерею изображений 4x4
2. Макет страницы с шапкой, сайдбаром, контентом и футером
3. Адаптивную сетку карточек
4. Сложную галерею с элементами разных размеров
5. Дашборд с виджетами
