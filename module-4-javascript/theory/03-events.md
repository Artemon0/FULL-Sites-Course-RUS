# События в JavaScript

## Что такое события?

События - это действия, которые происходят в браузере (клики, нажатия клавиш, загрузка страницы и т.д.).

## Добавление обработчиков событий

### addEventListener (рекомендуется)
```javascript
let button = document.querySelector('#myButton');

button.addEventListener('click', function() {
    console.log('Кнопка нажата!');
});

// Стрелочная функция
button.addEventListener('click', () => {
    console.log('Кнопка нажата!');
});

// Именованная функция
function handleClick() {
    console.log('Кнопка нажата!');
}
button.addEventListener('click', handleClick);
```

### HTML атрибут (не рекомендуется)
```html
<button onclick="handleClick()">Нажми</button>
```

### Свойство элемента
```javascript
button.onclick = function() {
    console.log('Кнопка нажата!');
};
```

## Типы событий

### События мыши
```javascript
element.addEventListener('click', () => {}); // Клик
element.addEventListener('dblclick', () => {}); // Двойной клик
element.addEventListener('mousedown', () => {}); // Нажатие кнопки мыши
element.addEventListener('mouseup', () => {}); // Отпускание кнопки мыши
element.addEventListener('mousemove', () => {}); // Движение мыши
element.addEventListener('mouseenter', () => {}); // Вход мыши (не всплывает)
element.addEventListener('mouseleave', () => {}); // Выход мыши (не всплывает)
element.addEventListener('mouseover', () => {}); // Вход мыши (всплывает)
element.addEventListener('mouseout', () => {}); // Выход мыши (всплывает)
element.addEventListener('contextmenu', () => {}); // Правый клик
```

### События клавиатуры
```javascript
element.addEventListener('keydown', () => {}); // Нажатие клавиши
element.addEventListener('keyup', () => {}); // Отпускание клавиши
element.addEventListener('keypress', () => {}); // Нажатие символьной клавиши (устарело)
```

### События формы
```javascript
input.addEventListener('input', () => {}); // Изменение значения
input.addEventListener('change', () => {}); // Изменение и потеря фокуса
input.addEventListener('focus', () => {}); // Получение фокуса
input.addEventListener('blur', () => {}); // Потеря фокуса
form.addEventListener('submit', () => {}); // Отправка формы
```

### События документа
```javascript
document.addEventListener('DOMContentLoaded', () => {}); // DOM загружен
window.addEventListener('load', () => {}); // Всё загружено (включая изображения)
window.addEventListener('beforeunload', () => {}); // Перед закрытием страницы
window.addEventListener('resize', () => {}); // Изменение размера окна
window.addEventListener('scroll', () => {}); // Прокрутка
```

## Объект события (Event)

```javascript
button.addEventListener('click', function(event) {
    // Тип события
    console.log(event.type); // 'click'
    
    // Элемент, на котором произошло событие
    console.log(event.target);
    
    // Элемент, к которому привязан обработчик
    console.log(event.currentTarget);
    
    // Координаты мыши
    console.log(event.clientX, event.clientY); // относительно окна
    console.log(event.pageX, event.pageY); // относительно документа
    
    // Нажатые клавиши-модификаторы
    console.log(event.ctrlKey); // Ctrl
    console.log(event.shiftKey); // Shift
    console.log(event.altKey); // Alt
    console.log(event.metaKey); // Cmd (Mac) или Win
    
    // Предотвратить действие по умолчанию
    event.preventDefault();
    
    // Остановить всплытие
    event.stopPropagation();
});
```

## События клавиатуры

```javascript
document.addEventListener('keydown', function(event) {
    // Код клавиши
    console.log(event.key); // 'a', 'Enter', 'ArrowUp'
    console.log(event.code); // 'KeyA', 'Enter', 'ArrowUp'
    console.log(event.keyCode); // 65 (устарело)
    
    // Проверка конкретной клавиши
    if (event.key === 'Enter') {
        console.log('Enter нажат');
    }
    
    if (event.key === 'Escape') {
        console.log('Escape нажат');
    }
    
    // Комбинации клавиш
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        console.log('Ctrl+S нажато');
    }
});
```

## Всплытие и погружение событий

### Всплытие (Bubbling)
```javascript
// Событие всплывает от целевого элемента к родителям
document.querySelector('.child').addEventListener('click', () => {
    console.log('Child clicked');
});

document.querySelector('.parent').addEventListener('click', () => {
    console.log('Parent clicked');
});

// При клике на child выведется:
// Child clicked
// Parent clicked
```

### Остановка всплытия
```javascript
element.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Всплытие остановлено');
});
```

### Погружение (Capturing)
```javascript
// Третий параметр true включает фазу погружения
element.addEventListener('click', function() {
    console.log('Capturing phase');
}, true);
```

## Делегирование событий

```javascript
// Вместо добавления обработчика каждой кнопке
let container = document.querySelector('.container');

container.addEventListener('click', function(event) {
    // Проверяем, что кликнули по кнопке
    if (event.target.matches('button')) {
        console.log('Кнопка нажата:', event.target.textContent);
    }
    
    // Или через closest
    let button = event.target.closest('button');
    if (button) {
        console.log('Кнопка нажата:', button.textContent);
    }
});
```

## Удаление обработчиков

```javascript
function handleClick() {
    console.log('Clicked');
}

// Добавить
button.addEventListener('click', handleClick);

// Удалить
button.removeEventListener('click', handleClick);

// Анонимные функции нельзя удалить!
button.addEventListener('click', () => {}); // Нельзя удалить
```

## Опции addEventListener

```javascript
element.addEventListener('click', handler, {
    // Выполнить только один раз
    once: true,
    
    // Фаза погружения
    capture: true,
    
    // Пассивный обработчик (не вызывает preventDefault)
    passive: true
});
```

## Практические примеры

### Счётчик кликов
```javascript
let button = document.querySelector('#counter');
let count = 0;

button.addEventListener('click', function() {
    count++;
    this.textContent = `Кликов: ${count}`;
});
```

### Валидация формы
```javascript
let form = document.querySelector('#myForm');
let input = document.querySelector('#email');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!input.value.includes('@')) {
        alert('Введите корректный email');
        return;
    }
    
    console.log('Форма отправлена');
});
```

### Изменение цвета при наведении
```javascript
let box = document.querySelector('.box');

box.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'red';
});

box.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'blue';
});
```

### Обработка нажатий клавиш
```javascript
let input = document.querySelector('#search');

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        console.log('Поиск:', this.value);
    }
});
```

### Динамический список с удалением
```javascript
let list = document.querySelector('#list');
let addButton = document.querySelector('#add');

addButton.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerHTML = `
        Элемент ${list.children.length + 1}
        <button class="delete">Удалить</button>
    `;
    list.appendChild(li);
});

// Делегирование для кнопок удаления
list.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});
```

### Модальное окно
```javascript
let modal = document.querySelector('.modal');
let openBtn = document.querySelector('#openModal');
let closeBtn = document.querySelector('#closeModal');

openBtn.addEventListener('click', function() {
    modal.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
});

// Закрытие по клику вне модального окна
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

// Закрытие по Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});
```

### Плавная прокрутка к секциям
```javascript
let links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        let targetId = this.getAttribute('href');
        let targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```

## Практическое задание

Создайте:
1. Кнопку-счётчик кликов
2. Форму с валидацией
3. Todo список с добавлением и удалением
4. Модальное окно
5. Галерею с увеличением изображений по клику
6. Аккордеон (раскрывающиеся секции)
