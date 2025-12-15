// Простой и надёжный редактор кода

let htmlEditor, cssEditor, jsEditor;
let autoRunTimeout;

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
  // Получаем элементы
  htmlEditor = document.getElementById('htmlEditor');
  cssEditor = document.getElementById('cssEditor');
  jsEditor = document.getElementById('jsEditor');

  // Устанавливаем пример кода
  setExampleCode();

  // Настраиваем обработчики
  setupEvents();

  // Первый запуск
  runCode();
});

// Настройка событий
function setupEvents() {
  // Переключение вкладок
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      switchTab(this.dataset.tab);
    });
  });

  // Кнопки
  document.getElementById('runBtn').addEventListener('click', runCode);
  document.getElementById('clearBtn').addEventListener('click', clearCode);
  document.getElementById('exampleBtn').addEventListener('click', setExampleCode);

  // Автозапуск при вводе
  [htmlEditor, cssEditor, jsEditor].forEach(editor => {
    editor.addEventListener('input', function () {
      clearTimeout(autoRunTimeout);
      autoRunTimeout = setTimeout(runCode, 1500);
    });

    // Tab для отступов
    editor.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        this.value = this.value.substring(0, start) + '  ' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 2;
      }
    });
  });
}

// Переключение вкладок
function switchTab(tab) {
  // Убираем active со всех кнопок и панелей
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.editor-panel').forEach(panel => panel.classList.remove('active'));

  // Добавляем active к выбранным
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(`${tab}Panel`).classList.add('active');
}

// Запуск кода
function runCode() {
  const html = htmlEditor.value;
  const css = cssEditor.value;
  const js = jsEditor.value;

  const preview = document.getElementById('preview');
  const doc = preview.contentDocument || preview.contentWindow.document;

  const fullCode = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        ${css}
    </style>
</head>
<body>
    ${html}
    <script>
        try {
            ${js}
        } catch (error) {
            document.body.innerHTML += \`
                <div style="
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #ff4444;
                    color: white;
                    padding: 15px 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    font-family: monospace;
                    max-width: 400px;
                    z-index: 9999;
                ">
                    <strong>❌ Ошибка:</strong><br>
                    \${error.message}
                </div>
            \`;
            console.error('Ошибка:', error);
        }
    <\/script>
</body>
</html>`;

  doc.open();
  doc.write(fullCode);
  doc.close();
}

// Очистка
function clearCode() {
  if (confirm('Очистить весь код?')) {
    htmlEditor.value = '';
    cssEditor.value = '';
    jsEditor.value = '';
    runCode();
  }
}

// Пример кода
function setExampleCode() {
  htmlEditor.value = `<div class="container">
  <h1 class="title">🎨 Интерактивный редактор</h1>
  <p class="subtitle">Измените код и увидите результат!</p>
  
  <div class="card">
    <h2>Счётчик кликов</h2>
    <button id="clickBtn" class="btn">Нажми меня!</button>
    <p id="counter" class="counter">Кликов: 0</p>
  </div>
  
  <div class="card">
    <h2>Смена цвета</h2>
    <button id="colorBtn" class="btn btn-secondary">Изменить цвет</button>
  </div>
</div>`;

  cssEditor.value = `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  max-width: 600px;
  width: 100%;
}

.title {
  color: #667eea;
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
}

.subtitle {
  color: #666;
  text-align: center;
  margin-bottom: 30px;
}

.card {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
  text-align: center;
}

.card h2 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #5568d3;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn:active {
  transform: translateY(0);
}

.btn-secondary {
  background: #764ba2;
}

.btn-secondary:hover {
  background: #653a8a;
}

.counter {
  margin-top: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}`;

  jsEditor.value = `// Счётчик кликов
let count = 0;
const clickBtn = document.getElementById('clickBtn');
const counter = document.getElementById('counter');

clickBtn.addEventListener('click', function() {
  count++;
  counter.textContent = 'Кликов: ' + count;
  
  // Анимация кнопки
  clickBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    clickBtn.style.transform = 'scale(1)';
  }, 100);
});

// Смена цвета фона
const colorBtn = document.getElementById('colorBtn');
const colors = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
];

let colorIndex = 0;

colorBtn.addEventListener('click', function() {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.background = colors[colorIndex];
});

// Приветствие
console.log('👋 Привет! Редактор работает!');`;

  runCode();
}
