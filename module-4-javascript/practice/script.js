// Калькулятор
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Введите оба числа!';
        resultDiv.style.color = 'red';
        return;
    }

    let result;
    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Ошибка: деление на 0'; break;
    }

    resultDiv.textContent = `Результат: ${result}`;
    resultDiv.style.color = '#667eea';
}

// Счётчик
let count = 0;

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById('counter').textContent = count;
}
