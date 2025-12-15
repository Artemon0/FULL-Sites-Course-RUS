# CSS Анимации и Переходы

## Transitions (Переходы)

Transitions позволяют плавно изменять CSS свойства.

### Базовый синтаксис
```css
.element {
    transition: property duration timing-function delay;
}
```

### Примеры
```css
/* Один переход */
.button {
    background: blue;
    transition: background 0.3s ease;
}

.button:hover {
    background: red;
}

/* Несколько переходов */
.box {
    width: 100px;
    height: 100px;
    background: blue;
    transition: width 0.3s ease, 
                height 0.3s ease 0.1s,
                background 0.5s linear;
}

.box:hover {
    width: 200px;
    height: 200px;
    background: red;
}

/* Все свойства */
.element {
    transition: all 0.3s ease;
}
```

### Timing Functions (функции времени)
```css
.element {
    /* Линейная */
    transition: all 0.3s linear;
    
    /* Ease (по умолчанию) */
    transition: all 0.3s ease;
    
    /* Ease-in (ускорение) */
    transition: all 0.3s ease-in;
    
    /* Ease-out (замедление) */
    transition: all 0.3s ease-out;
    
    /* Ease-in-out */
    transition: all 0.3s ease-in-out;
    
    /* Кубическая кривая Безье */
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Animations (Анимации)

Animations позволяют создавать сложные многошаговые анимации.

### Определение анимации
```css
@keyframes animationName {
    from {
        /* Начальное состояние */
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        /* Конечное состояние */
        opacity: 1;
        transform: translateY(0);
    }
}

/* Или с процентами */
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(10%);
    }
    100% {
        transform: translateX(0);
    }
}
```

### Применение анимации
```css
.element {
    animation: animationName duration timing-function delay iteration-count direction fill-mode;
}

/* Примеры */
.fade-in {
    animation: fadeIn 1s ease-in;
}

.bounce {
    animation: bounce 2s ease-in-out infinite;
}

.slide {
    animation: slideIn 0.5s ease-out forwards;
}
```

### Свойства анимации

```css
.element {
    /* Название анимации */
    animation-name: slideIn;
    
    /* Длительность */
    animation-duration: 1s;
    
    /* Функция времени */
    animation-timing-function: ease-in-out;
    
    /* Задержка */
    animation-delay: 0.5s;
    
    /* Количество повторений */
    animation-iteration-count: 3; /* или infinite */
    
    /* Направление */
    animation-direction: normal; /* reverse, alternate, alternate-reverse */
    
    /* Состояние до/после */
    animation-fill-mode: forwards; /* backwards, both, none */
    
    /* Состояние воспроизведения */
    animation-play-state: running; /* или paused */
}
```

## Transform (Трансформации)

### 2D Трансформации
```css
.element {
    /* Перемещение */
    transform: translate(50px, 100px);
    transform: translateX(50px);
    transform: translateY(100px);
    
    /* Масштабирование */
    transform: scale(1.5);
    transform: scale(2, 0.5); /* X, Y */
    transform: scaleX(2);
    transform: scaleY(0.5);
    
    /* Поворот */
    transform: rotate(45deg);
    
    /* Наклон */
    transform: skew(10deg, 20deg);
    transform: skewX(10deg);
    transform: skewY(20deg);
    
    /* Комбинирование */
    transform: translate(50px, 100px) rotate(45deg) scale(1.5);
}
```

### 3D Трансформации
```css
.element {
    /* Перспектива */
    perspective: 1000px;
    
    /* 3D перемещение */
    transform: translateZ(100px);
    transform: translate3d(50px, 100px, 150px);
    
    /* 3D поворот */
    transform: rotateX(45deg);
    transform: rotateY(45deg);
    transform: rotateZ(45deg);
    transform: rotate3d(1, 1, 1, 45deg);
    
    /* 3D масштабирование */
    transform: scaleZ(2);
    transform: scale3d(1, 1, 2);
}

/* Сохранение 3D пространства */
.container {
    transform-style: preserve-3d;
}
```

### Transform Origin (точка трансформации)
```css
.element {
    /* По умолчанию: center center */
    transform-origin: center center;
    
    /* Другие варианты */
    transform-origin: top left;
    transform-origin: 50% 50%;
    transform-origin: 100px 200px;
}
```

## Практические примеры

### Кнопка с эффектом
```css
.button {
    background: #3498db;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.button:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
```

### Пульсирующая анимация
```css
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}
```

### Загрузочный спиннер
```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

### Появление снизу
```css
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.slide-up {
    animation: slideUp 0.6s ease-out;
}
```

### Карточка с переворотом
```css
.card {
    width: 300px;
    height: 400px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card:hover {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
}
```

### Плавное появление элементов
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.item {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
}

.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }
```

## Производительность

### Оптимизированные свойства
```css
/* Хорошо (GPU ускорение) */
.element {
    transform: translateX(100px);
    opacity: 0.5;
}

/* Плохо (вызывает reflow) */
.element {
    left: 100px;
    width: 200px;
}
```

### Will-change
```css
.element {
    /* Подсказка браузеру */
    will-change: transform, opacity;
}

.element:hover {
    transform: scale(1.2);
}
```

## Практическое задание

Создайте:
1. Кнопку с плавными переходами при наведении
2. Загрузочный спиннер
3. Карточку с эффектом переворота
4. Меню с анимацией появления
5. Галерею с анимацией при скролле
