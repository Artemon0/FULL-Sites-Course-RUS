# Flexbox - Гибкая разметка

## Что такое Flexbox?

Flexbox - это модель раскладки, которая позволяет легко создавать гибкие и адаптивные макеты.

## Основы Flexbox

### Создание flex контейнера
```css
.container {
    display: flex;
}
```

## Свойства контейнера

### flex-direction (направление)
```css
.container {
    flex-direction: row; /* по умолчанию, слева направо */
    flex-direction: row-reverse; /* справа налево */
    flex-direction: column; /* сверху вниз */
    flex-direction: column-reverse; /* снизу вверх */
}
```

### justify-content (выравнивание по главной оси)
```css
.container {
    justify-content: flex-start; /* по умолчанию */
    justify-content: flex-end; /* в конец */
    justify-content: center; /* по центру */
    justify-content: space-between; /* с пространством между */
    justify-content: space-around; /* с пространством вокруг */
    justify-content: space-evenly; /* равномерное пространство */
}
```

### align-items (выравнивание по поперечной оси)
```css
.container {
    align-items: stretch; /* по умолчанию, растянуть */
    align-items: flex-start; /* к началу */
    align-items: flex-end; /* к концу */
    align-items: center; /* по центру */
    align-items: baseline; /* по базовой линии текста */
}
```

### flex-wrap (перенос элементов)
```css
.container {
    flex-wrap: nowrap; /* по умолчанию, без переноса */
    flex-wrap: wrap; /* с переносом */
    flex-wrap: wrap-reverse; /* с переносом в обратном порядке */
}
```

### gap (промежутки между элементами)
```css
.container {
    gap: 20px; /* промежуток между элементами */
    row-gap: 20px; /* промежуток между рядами */
    column-gap: 10px; /* промежуток между колонками */
}
```

## Свойства элементов

### flex-grow (рост)
```css
.item {
    flex-grow: 0; /* по умолчанию, не растёт */
    flex-grow: 1; /* может расти */
    flex-grow: 2; /* растёт в 2 раза быстрее */
}
```

### flex-shrink (сжатие)
```css
.item {
    flex-shrink: 1; /* по умолчанию, может сжиматься */
    flex-shrink: 0; /* не сжимается */
}
```

### flex-basis (базовый размер)
```css
.item {
    flex-basis: auto; /* по умолчанию */
    flex-basis: 200px; /* фиксированный размер */
    flex-basis: 50%; /* процентный размер */
}
```

### flex (короткая запись)
```css
.item {
    flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
    flex: 0 0 200px; /* не растёт, не сжимается, 200px */
}
```

### align-self (индивидуальное выравнивание)
```css
.item {
    align-self: auto; /* по умолчанию */
    align-self: flex-start;
    align-self: flex-end;
    align-self: center;
    align-self: stretch;
}
```

### order (порядок)
```css
.item {
    order: 0; /* по умолчанию */
    order: 1; /* будет после элементов с order: 0 */
    order: -1; /* будет перед элементами с order: 0 */
}
```

## Практические примеры

### Горизонтальное меню
```css
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
}
```

### Карточки в ряд
```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* растёт, сжимается, минимум 300px */
}
```

### Центрирование элемента
```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### Липкий футер
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1; /* занимает всё доступное пространство */
}
```

## Практическое задание

Создайте с помощью Flexbox:
1. Навигационное меню
2. Галерею карточек (3 в ряд)
3. Страницу с центрированным контентом
4. Макет с шапкой, контентом и футером
5. Адаптивную сетку элементов
