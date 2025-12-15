# Основы JavaScript

## Что такое JavaScript?

JavaScript - это язык программирования, который делает веб-страницы интерактивными.

## Подключение JavaScript

```html
<!-- Внешний файл (рекомендуется) -->
<script src="script.js"></script>

<!-- Внутренний скрипт -->
<script>
    console.log('Hello, World!');
</script>

<!-- Атрибуты -->
<script src="script.js" defer></script> <!-- Загружается асинхронно -->
<script src="script.js" async></script> <!-- Выполняется сразу после загрузки -->
```

## Переменные

```javascript
// var (старый способ, не рекомендуется)
var name = 'Иван';

// let (изменяемая переменная)
let age = 25;
age = 26; // можно изменить

// const (константа)
const PI = 3.14;
// PI = 3.15; // Ошибка! Нельзя изменить
```

## Типы данных

### Примитивные типы
```javascript
// String (строка)
let name = 'Иван';
let greeting = "Привет";
let template = `Привет, ${name}!`; // Шаблонная строка

// Number (число)
let age = 25;
let price = 99.99;
let negative = -10;

// Boolean (логический)
let isActive = true;
let isCompleted = false;

// Undefined (неопределённый)
let value;
console.log(value); // undefined

// Null (пустое значение)
let empty = null;

// Symbol (уникальный идентификатор)
let id = Symbol('id');

// BigInt (большие числа)
let bigNumber = 9007199254740991n;
```

### Объекты
```javascript
// Object (объект)
let user = {
    name: 'Иван',
    age: 25,
    isAdmin: false
};

// Array (массив)
let colors = ['red', 'green', 'blue'];
let numbers = [1, 2, 3, 4, 5];
```

## Операторы

### Арифметические
```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13 (сложение)
console.log(a - b); // 7 (вычитание)
console.log(a * b); // 30 (умножение)
console.log(a / b); // 3.333... (деление)
console.log(a % b); // 1 (остаток от деления)
console.log(a ** b); // 1000 (возведение в степень)

// Инкремент и декремент
let count = 0;
count++; // 1
count--; // 0
```

### Операторы сравнения
```javascript
console.log(5 == '5');  // true (нестрогое равенство)
console.log(5 === '5'); // false (строгое равенство)
console.log(5 != '5');  // false
console.log(5 !== '5'); // true
console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(5 <= 3);    // false
```

### Логические операторы
```javascript
let x = true;
let y = false;

console.log(x && y); // false (И)
console.log(x || y); // true (ИЛИ)
console.log(!x);     // false (НЕ)
```

## Условные операторы

### if...else
```javascript
let age = 18;

if (age >= 18) {
    console.log('Совершеннолетний');
} else {
    console.log('Несовершеннолетний');
}

// else if
let score = 85;

if (score >= 90) {
    console.log('Отлично');
} else if (score >= 70) {
    console.log('Хорошо');
} else if (score >= 50) {
    console.log('Удовлетворительно');
} else {
    console.log('Неудовлетворительно');
}
```

### Тернарный оператор
```javascript
let age = 20;
let status = age >= 18 ? 'Взрослый' : 'Ребёнок';
```

### switch
```javascript
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Понедельник';
        break;
    case 2:
        dayName = 'Вторник';
        break;
    case 3:
        dayName = 'Среда';
        break;
    default:
        dayName = 'Неизвестный день';
}
```

## Циклы

### for
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
```

### while
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### do...while
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

### for...of (для массивов)
```javascript
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}
```

### for...in (для объектов)
```javascript
let user = { name: 'Иван', age: 25 };
for (let key in user) {
    console.log(key + ': ' + user[key]);
}
```

## Функции

### Объявление функции
```javascript
function greet(name) {
    return `Привет, ${name}!`;
}

console.log(greet('Иван')); // Привет, Иван!
```

### Функциональное выражение
```javascript
const greet = function(name) {
    return `Привет, ${name}!`;
};
```

### Стрелочная функция
```javascript
const greet = (name) => {
    return `Привет, ${name}!`;
};

// Короткая запись
const greet = name => `Привет, ${name}!`;

// Без параметров
const sayHello = () => 'Привет!';

// Несколько параметров
const add = (a, b) => a + b;
```

### Параметры по умолчанию
```javascript
function greet(name = 'Гость') {
    return `Привет, ${name}!`;
}

console.log(greet());        // Привет, Гость!
console.log(greet('Иван'));  // Привет, Иван!
```

## Массивы

### Создание и доступ
```javascript
let fruits = ['яблоко', 'банан', 'апельсин'];

console.log(fruits[0]); // яблоко
console.log(fruits.length); // 3
```

### Методы массивов
```javascript
let numbers = [1, 2, 3, 4, 5];

// push - добавить в конец
numbers.push(6); // [1, 2, 3, 4, 5, 6]

// pop - удалить с конца
numbers.pop(); // [1, 2, 3, 4, 5]

// unshift - добавить в начало
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]

// shift - удалить с начала
numbers.shift(); // [1, 2, 3, 4, 5]

// splice - удалить/добавить элементы
numbers.splice(2, 1); // удалить 1 элемент с индекса 2

// slice - получить часть массива
let slice = numbers.slice(1, 3); // [2, 3]

// indexOf - найти индекс
let index = numbers.indexOf(3); // 2

// includes - проверить наличие
let hasThree = numbers.includes(3); // true
```

## Объекты

### Создание и доступ
```javascript
let user = {
    name: 'Иван',
    age: 25,
    email: 'ivan@example.com'
};

// Доступ к свойствам
console.log(user.name); // Иван
console.log(user['age']); // 25

// Изменение свойств
user.age = 26;
user['email'] = 'newemail@example.com';

// Добавление свойств
user.city = 'Москва';

// Удаление свойств
delete user.email;
```

### Методы объекта
```javascript
let user = {
    name: 'Иван',
    age: 25,
    greet: function() {
        console.log(`Привет, я ${this.name}`);
    }
};

user.greet(); // Привет, я Иван
```

## Практическое задание

Создайте программу, которая:
1. Объявляет переменные разных типов
2. Выполняет арифметические операции
3. Использует условные операторы
4. Создаёт и использует функции
5. Работает с массивами и объектами
6. Использует циклы для обработки данных
