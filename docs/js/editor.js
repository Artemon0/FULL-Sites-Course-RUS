// Интерактивный редактор кода

let htmlEditor, cssEditor, jsEditor;

// Инициализация редакторов
document.addEventListener('DOMContentLoaded', function () {
    // HTML редактор
    htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlEditor'), {
        mode: 'htmlmixed',
        theme: 'monokai',
        lineNumbers: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        indentUnit: 2,
        tabSize: 2
    });

    // CSS редактор
    cssEditor = CodeMirror.fromTextArea(document.getElementById('cssEditor'), {
        mode: 'css',
        theme: 'monokai',
        lineNumbers: true,
        autoCloseBrackets: true,
        indentUnit: 2,
        tabSize: 2
    });

    // JavaScript редактор
    jsEditor = CodeMirror.fromTextArea(document.getElementById('jsEditor'), {
        mode: 'javascript',
        theme: 'monokai',
        lineNumbers: true,
        autoCloseBrackets: true,
        indentUnit: 2,
        tabSize: 2
    });

    // Установить начальный код
    setExampleCode();

    // Обработчики событий
    setupEditorEvents();
});

// Настройка обработчиков событий
function setupEditorEvents() {
    // Переключение вкладок
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const tab = this.dataset.tab;
            switchTab(tab);
        });
    });

    // Кнопка запуска
    document.getElementById('runBtn').addEventListener('click', runCode);

    // Кнопка очистки
    document.getElementById('clearBtn').addEventListener('click', clearCode);

    // Кнопка примера
    document.getElementById('exampleBtn').addEventListener('click', setExampleCode);

    // Автоматический запуск при изменении (с задержкой)
    let timeout;
    [htmlEditor, cssEditor, jsEditor].forEach(editor => {
        editor.on('change', function () {
            clearTimeout(timeout);
            timeout = setTimeout(runCode, 1000);
        });
    });
}

// Переключение вкладок
function switchTab(tab) {
    // Обновить кнопки
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    // Обновить панели
    document.querySelectorAll('.editor-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`${tab}Panel`).classList.add('active');

    // Обновить редактор
    if (tab === 'html') htmlEditor.refresh();
    if (tab === 'css') cssEditor.refresh();
    if (tab === 'js') jsEditor.refresh();
}

// Запуск кода
function runCode() {
    const html = htmlEditor.getValue();
    const css = cssEditor.getValue();
    const js = jsEditor.getValue();

    const preview = document.getElementById('preview');
    const previewDoc = preview.contentDocument || preview.contentWindow.document;

    const code = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>
                try {
                    ${js}
                } catch (error) {
                    document.body.innerHTML += '<div style="color: red; padding: 20px; background: #fee; border: 2px solid red; margin: 10px; border-radius: 5px;"><strong>Ошибка JavaScript:</strong><br>' + error.message + '</div>';
                }
            <\/script>
        </body>
        </html>
    `;

    previewDoc.open();
    previewDoc.write(code);
    previewDoc.close();
}

// Очистка кода
function clearCode() {
    if (confirm('Очистить весь код?')) {
        htmlEditor.setValue('');
        cssEditor.setValue('');
        jsEditor.setValue('');
        runCode();
    }
}

// Установить пример кода
function setExampleCode() {
    const exampleHTML = `<div class="container">
  <h1>Привет, мир!</h1>
  <p>Это интерактивный редактор кода.</p>
  <button id="myButton">Нажми меня!</button>
  <div id="output"></div>
</div>`;

    const exampleCSS = `body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  text-align: center;
  max-width: 500px;
}

h1 {
  color: #667eea;
  margin-bottom: 1rem;
}

p {
  color: #666;
  margin-bottom: 1.5rem;
}

button {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #764ba2;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

#output {
  margin-top: 1rem;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 6px;
  min-height: 50px;
}`;

    const exampleJS = `// Получаем элементы
const button = document.getElementById('myButton');
const output = document.getElementById('output');

let clickCount = 0;

// Обработчик клика
button.addEventListener('click', function() {
  clickCount++;
  output.innerHTML = \`
    <p style="color: #667eea; font-weight: bold;">
      Кнопка нажата \${clickCount} раз!
    </p>
  \`;
  
  // Анимация
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 100);
});

// Приветствие
output.innerHTML = '<p style="color: #999;">Нажмите на кнопку выше 👆</p>';`;

    htmlEditor.setValue(exampleHTML);
    cssEditor.setValue(exampleCSS);
    jsEditor.setValue(exampleJS);

    runCode();
}
