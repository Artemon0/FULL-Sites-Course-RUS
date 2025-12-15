# ES6+ возможности

## Деструктуризация

### Деструктуризация массивов
```javascript
let colors = ['red', 'green', 'blue'];

// Обычный способ
let first = colors[0];
let second = colors[1];

// Деструктуризация
let [first, second, third] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'

// Пропуск элементов
let [, , third] = colors;
console.log(third); // 'blue'

// Остаточные элементы
let [first, ...rest] = colors;
console.log(rest); // ['green', 'blue']

// Значения по умолчанию
let [a, b, c, d = 'yellow'] = colors;
console.log(d); // 'yellow'
```

### Деструктуризация объектов
```javascript
let user = {
    name: 'Иван',
    age: 25,
    email: 'ivan@example.com'
};

// Деструктуризация
let { name, age, email } = user;
console.log(name); // 'Иван'

// Переименование
let { name: userName, age: userAge } = user;
console.log(userName); // 'Иван'

// Значения по умолчанию
let { name, city = 'Москва' } = user;
console.log(city); // 'Москва'

// Вложенная деструктуризация
let user = {
    name: 'Иван',
    address: {
        city: 'Москва',
        street: 'Ленина'
    }
};

let { address: { city, street } } = user;
console.log(city); // 'Москва'

// Остаточные свойства
let { name, ...rest } = user;
console.log(rest); // { age: 25, email: '...' }
```

### Деструктуризация в параметрах функции
```javascript
function greet({ name, age }) {
    console.log(`Привет, ${name}! Тебе ${age} лет.`);
}

greet({ name: 'Иван', age: 25 });

// С значениями по умолчанию
function createUser({ name, age = 18, role = 'user' }) {
    return { name, age, role };
}
```

## Spread и Rest операторы

### Spread оператор (...)
```javascript
// Копирование массива
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

// Объединение массивов
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Копирование объекта
let user = { name: 'Иван', age: 25 };
let userCopy = { ...user };

// Объединение объектов
let defaults = { theme: 'light', lang: 'ru' };
let settings = { lang: 'en', fontSize: 14 };
let config = { ...defaults, ...settings };
// { theme: 'light', lang: 'en', fontSize: 14 }

// Передача аргументов в функцию
let numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5
```

### Rest оператор
```javascript
// В параметрах функции
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Комбинирование с обычными параметрами
function greet(greeting, ...names) {
    return `${greeting}, ${names.join(' и ')}!`;
}

console.log(greet('Привет', 'Иван', 'Пётр', 'Мария'));
// 'Привет, Иван и Пётр и Мария!'
```

## Шаблонные строки

```javascript
let name = 'Иван';
let age = 25;

// Обычная конкатенация
let message = 'Привет, ' + name + '! Тебе ' + age + ' лет.';

// Шаблонная строка
let message = `Привет, ${name}! Тебе ${age} лет.`;

// Многострочные строки
let html = `
    <div class="card">
        <h2>${name}</h2>
        <p>Возраст: ${age}</p>
    </div>
`;

// Выражения в шаблонах
let price = 100;
let message = `Цена со скидкой: ${price * 0.9} руб.`;

// Вызов функций
function formatDate(date) {
    return date.toLocaleDateString();
}

let message = `Сегодня: ${formatDate(new Date())}`;
```

## Стрелочные функции

```javascript
// Обычная функция
function add(a, b) {
    return a + b;
}

// Стрелочная функция
const add = (a, b) => {
    return a + b;
};

// Короткая запись (неявный return)
const add = (a, b) => a + b;

// Один параметр (скобки необязательны)
const square = x => x * x;

// Без параметров
const greet = () => 'Привет!';

// Возврат объекта (нужны скобки)
const createUser = (name, age) => ({ name, age });
```

### Особенности стрелочных функций
```javascript
// Нет своего this
let user = {
    name: 'Иван',
    sayHi: function() {
        setTimeout(function() {
            console.log(this.name); // undefined
        }, 1000);
    },
    sayHello: function() {
        setTimeout(() => {
            console.log(this.name); // 'Иван'
        }, 1000);
    }
};

// Нельзя использовать как конструктор
const User = (name) => {
    this.name = name;
};
// let user = new User('Иван'); // Ошибка!

// Нет arguments
function regular() {
    console.log(arguments); // Работает
}

const arrow = () => {
    console.log(arguments); // Ошибка!
};
```

## Методы массивов

### map
```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let users = [
    { name: 'Иван', age: 25 },
    { name: 'Мария', age: 30 }
];
let names = users.map(user => user.name);
console.log(names); // ['Иван', 'Мария']
```

### filter
```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4, 6]

let users = [
    { name: 'Иван', age: 25 },
    { name: 'Мария', age: 17 },
    { name: 'Пётр', age: 30 }
];
let adults = users.filter(user => user.age >= 18);
```

### reduce
```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// Подсчёт элементов
let fruits = ['яблоко', 'банан', 'яблоко', 'апельсин', 'банан', 'яблоко'];
let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count); // { яблоко: 3, банан: 2, апельсин: 1 }
```

### find и findIndex
```javascript
let users = [
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Мария' },
    { id: 3, name: 'Пётр' }
];

let user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: 'Мария' }

let index = users.findIndex(user => user.id === 2);
console.log(index); // 1
```

### some и every
```javascript
let numbers = [1, 2, 3, 4, 5];

// some - хотя бы один элемент удовлетворяет условию
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every - все элементы удовлетворяют условию
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
```

### forEach
```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
    console.log(`Индекс ${index}: ${num}`);
});
```

## Классы

```javascript
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Привет, я ${this.name}!`;
    }
    
    get info() {
        return `${this.name}, ${this.age} лет`;
    }
    
    set age(value) {
        if (value < 0) {
            throw new Error('Возраст не может быть отрицательным');
        }
        this._age = value;
    }
    
    get age() {
        return this._age;
    }
    
    static create(name, age) {
        return new User(name, age);
    }
}

let user = new User('Иван', 25);
console.log(user.greet()); // 'Привет, я Иван!'

// Наследование
class Admin extends User {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    
    greet() {
        return `${super.greet()} Я администратор.`;
    }
}

let admin = new Admin('Мария', 30, 'admin');
console.log(admin.greet());
```

## Модули (import/export)

```javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;

// Экспорт по умолчанию
export default function multiply(a, b) {
    return a * b;
}

// main.js
import multiply, { add, subtract, PI } from './math.js';

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6

// Импорт всего
import * as math from './math.js';
console.log(math.add(2, 3));
```

## Optional Chaining (?.)

```javascript
let user = {
    name: 'Иван',
    address: {
        city: 'Москва'
    }
};

// Без optional chaining
let street = user.address && user.address.street;

// С optional chaining
let street = user.address?.street;
console.log(street); // undefined (без ошибки)

// С методами
let result = user.greet?.();

// С массивами
let firstItem = arr?.[0];
```

## Nullish Coalescing (??)

```javascript
// || возвращает первое truthy значение
let value = 0 || 'default'; // 'default'

// ?? возвращает первое не-null/undefined значение
let value = 0 ?? 'default'; // 0
let value = null ?? 'default'; // 'default'
let value = undefined ?? 'default'; // 'default'

// Практическое применение
function greet(name) {
    name = name ?? 'Гость';
    return `Привет, ${name}!`;
}
```

## Практическое задание

Создайте приложение используя ES6+ возможности:
1. Используйте деструктуризацию для работы с данными
2. Примените методы массивов (map, filter, reduce)
3. Создайте классы с наследованием
4. Используйте async/await
5. Примените optional chaining и nullish coalescing
