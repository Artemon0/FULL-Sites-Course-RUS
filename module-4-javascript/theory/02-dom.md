# DOM манипуляции

## Что такое DOM?

DOM (Document Object Model) - это программный интерфейс для HTML документов, который представляет страницу как дерево объектов.

## Выборка элементов

### getElementById
```javascript
let element = document.getElementById('myId');
```

### querySelector (один элемент)
```javascript
// По ID
let element = document.querySelector('#myId');

// По классу
let element = document.querySelector('.myClass');

// По тегу
let element = document.querySelector('div');

// Сложный селектор
let element = document.querySelector('div.container > p.text');
```

### querySelectorAll (все элементы)
```javascript
let elements = document.querySelectorAll('.myClass');

// Перебор элементов
elements.forEach(element => {
    console.log(element);
});
```

### Другие методы
```javascript
// По классу (возвращает HTMLCollection)
let elements = document.getElementsByClassName('myClass');

// По тегу
let elements = document.getElementsByTagName('div');

// По имени (для форм)
let elements = document.getElementsByName('username');
```

## Изменение содержимого

### textContent и innerHTML
```javascript
let element = document.querySelector('#myElement');

// Текстовое содержимое
element.textContent = 'Новый текст';

// HTML содержимое
element.innerHTML = '<strong>Жирный текст</strong>';

// Получение содержимого
let text = element.textContent;
let html = element.innerHTML;
```

### innerText vs textContent
```javascript
// innerText учитывает стили (display: none)
element.innerText = 'Текст';

// textContent не учитывает стили (быстрее)
element.textContent = 'Текст';
```

## Изменение атрибутов

```javascript
let img = document.querySelector('img');

// Получить атрибут
let src = img.getAttribute('src');

// Установить атрибут
img.setAttribute('src', 'new-image.jpg');
img.setAttribute('alt', 'Новое описание');

// Удалить атрибут
img.removeAttribute('title');

// Проверить наличие атрибута
if (img.hasAttribute('alt')) {
    console.log('Alt есть');
}

// Прямой доступ к атрибутам
img.src = 'new-image.jpg';
img.alt = 'Новое описание';
```

## Работа с классами

```javascript
let element = document.querySelector('.box');

// Добавить класс
element.classList.add('active');
element.classList.add('highlight', 'visible');

// Удалить класс
element.classList.remove('active');

// Переключить класс
element.classList.toggle('active');

// Проверить наличие класса
if (element.classList.contains('active')) {
    console.log('Класс есть');
}

// Заменить класс
element.classList.replace('old-class', 'new-class');
```

## Изменение стилей

```javascript
let element = document.querySelector('.box');

// Изменить один стиль
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';

// Изменить несколько стилей
element.style.cssText = 'color: red; background: blue; font-size: 20px;';

// Получить вычисленные стили
let styles = getComputedStyle(element);
console.log(styles.color);
console.log(styles.fontSize);
```

## Создание и удаление элементов

### Создание элементов
```javascript
// Создать элемент
let div = document.createElement('div');
div.textContent = 'Новый div';
div.classList.add('box');

// Создать текстовый узел
let text = document.createTextNode('Текст');

// Добавить в конец
document.body.appendChild(div);

// Добавить в начало
document.body.prepend(div);

// Добавить перед элементом
let reference = document.querySelector('#reference');
reference.before(div);

// Добавить после элемента
reference.after(div);

// Вставить внутрь
let container = document.querySelector('.container');
container.append(div); // в конец
container.prepend(div); // в начало
```

### Удаление элементов
```javascript
let element = document.querySelector('.box');

// Удалить элемент
element.remove();

// Удалить через родителя (старый способ)
element.parentNode.removeChild(element);

// Очистить содержимое
element.innerHTML = '';
```

### Клонирование элементов
```javascript
let original = document.querySelector('.box');

// Поверхностное клонирование
let clone = original.cloneNode();

// Глубокое клонирование (с содержимым)
let deepClone = original.cloneNode(true);

document.body.appendChild(deepClone);
```

## Навигация по DOM

```javascript
let element = document.querySelector('.box');

// Родитель
let parent = element.parentElement;
let parentNode = element.parentNode;

// Дети
let children = element.children; // HTMLCollection
let firstChild = element.firstElementChild;
let lastChild = element.lastElementChild;
let childCount = element.childElementCount;

// Соседи
let nextSibling = element.nextElementSibling;
let prevSibling = element.previousElementSibling;

// Поиск ближайшего родителя
let closest = element.closest('.container');
```

## Работа с формами

```javascript
let form = document.querySelector('form');
let input = document.querySelector('#username');

// Получить значение
let value = input.value;

// Установить значение
input.value = 'Новое значение';

// Для чекбоксов и радио
let checkbox = document.querySelector('#agree');
let isChecked = checkbox.checked;
checkbox.checked = true;

// Для select
let select = document.querySelector('#country');
let selectedValue = select.value;
let selectedIndex = select.selectedIndex;
let selectedOption = select.options[select.selectedIndex];
```

## Размеры и позиция

```javascript
let element = document.querySelector('.box');

// Размеры элемента
let width = element.offsetWidth; // включая border и padding
let height = element.offsetHeight;
let clientWidth = element.clientWidth; // без border
let clientHeight = element.clientHeight;

// Позиция элемента
let rect = element.getBoundingClientRect();
console.log(rect.top, rect.left, rect.right, rect.bottom);

// Прокрутка
let scrollTop = element.scrollTop;
let scrollLeft = element.scrollLeft;

// Прокрутить к элементу
element.scrollIntoView({ behavior: 'smooth' });

// Прокрутить страницу
window.scrollTo(0, 0); // наверх
window.scrollTo({ top: 500, behavior: 'smooth' });
```

## Практические примеры

### Изменить текст кнопки
```javascript
let button = document.querySelector('#myButton');
button.textContent = 'Нажми меня!';
```

### Добавить элемент в список
```javascript
let ul = document.querySelector('ul');
let li = document.createElement('li');
li.textContent = 'Новый элемент';
ul.appendChild(li);
```

### Переключить видимость элемента
```javascript
let element = document.querySelector('.box');
element.classList.toggle('hidden');
```

### Создать карточку товара
```javascript
function createProductCard(product) {
    let card = document.createElement('div');
    card.classList.add('product-card');
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} руб.</p>
        <button>Купить</button>
    `;
    
    return card;
}

let container = document.querySelector('.products');
let product = { name: 'Товар', price: 1000, image: 'product.jpg' };
container.appendChild(createProductCard(product));
```

### Очистить форму
```javascript
function clearForm(form) {
    let inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
}
```

## Практическое задание

Создайте страницу с:
1. Кнопкой, которая меняет текст элемента
2. Формой, которая добавляет элементы в список
3. Кнопкой, которая переключает класс элемента
4. Счётчиком с кнопками увеличения/уменьшения
5. Динамическим созданием карточек из массива данных
