# Асинхронный JavaScript

## Что такое асинхронность?

Асинхронность позволяет выполнять длительные операции (запросы к серверу, чтение файлов) без блокировки основного потока.

## Callback функции

```javascript
// Простой callback
function fetchData(callback) {
    setTimeout(() => {
        let data = { name: 'Иван', age: 25 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log(data);
});

// Callback hell (ад колбэков)
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                console.log(d);
            });
        });
    });
});
```

## Promises (Промисы)

### Создание промиса
```javascript
let promise = new Promise((resolve, reject) => {
    // Асинхронная операция
    let success = true;
    
    setTimeout(() => {
        if (success) {
            resolve('Успех!'); // Промис выполнен
        } else {
            reject('Ошибка!'); // Промис отклонён
        }
    }, 1000);
});
```

### Использование промиса
```javascript
promise
    .then(result => {
        console.log(result); // Успех!
        return 'Следующий результат';
    })
    .then(result => {
        console.log(result); // Следующий результат
    })
    .catch(error => {
        console.error(error); // Обработка ошибки
    })
    .finally(() => {
        console.log('Завершено'); // Выполнится в любом случае
    });
```

### Цепочка промисов
```javascript
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Иван' });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Пост 1' },
                { id: 2, title: 'Пост 2' }
            ]);
        }, 1000);
    });
}

fetchUser()
    .then(user => {
        console.log('Пользователь:', user);
        return fetchPosts(user.id);
    })
    .then(posts => {
        console.log('Посты:', posts);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
```

### Promise методы

```javascript
// Promise.all - ждёт выполнения всех промисов
let promise1 = Promise.resolve(3);
let promise2 = new Promise(resolve => setTimeout(() => resolve(42), 1000));
let promise3 = Promise.resolve('foo');

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [3, 42, 'foo']
    });

// Promise.race - возвращает первый выполненный промис
Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log(value); // 3 (первый выполненный)
    });

// Promise.allSettled - ждёт завершения всех (даже с ошибками)
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach(result => {
            console.log(result.status); // 'fulfilled' или 'rejected'
        });
    });

// Promise.any - возвращает первый успешный промис
Promise.any([promise1, promise2, promise3])
    .then(value => {
        console.log(value);
    });
```

## Async/Await

### Базовый синтаксис
```javascript
async function fetchData() {
    // await ждёт выполнения промиса
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}

// Вызов async функции
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### Обработка ошибок
```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
        }
        
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка:', error);
        throw error; // Пробросить ошибку дальше
    }
}
```

### Последовательное выполнение
```javascript
async function processData() {
    let user = await fetchUser();
    let posts = await fetchPosts(user.id);
    let comments = await fetchComments(posts[0].id);
    
    return { user, posts, comments };
}
```

### Параллельное выполнение
```javascript
async function fetchAllData() {
    // Запускаем все запросы одновременно
    let [users, posts, comments] = await Promise.all([
        fetchUsers(),
        fetchPosts(),
        fetchComments()
    ]);
    
    return { users, posts, comments };
}
```

### Async в циклах
```javascript
// Последовательная обработка
async function processItems(items) {
    for (let item of items) {
        await processItem(item);
    }
}

// Параллельная обработка
async function processItems(items) {
    let promises = items.map(item => processItem(item));
    await Promise.all(promises);
}
```

## Fetch API

### GET запрос
```javascript
async function getUsers() {
    try {
        let response = await fetch('https://api.example.com/users');
        
        if (!response.ok) {
            throw new Error('Ошибка: ' + response.status);
        }
        
        let users = await response.json();
        return users;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
```

### POST запрос
```javascript
async function createUser(userData) {
    try {
        let response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        let newUser = await response.json();
        return newUser;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Использование
createUser({ name: 'Иван', age: 25 });
```

### PUT запрос (обновление)
```javascript
async function updateUser(id, userData) {
    let response = await fetch(`https://api.example.com/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    
    return await response.json();
}
```

### DELETE запрос
```javascript
async function deleteUser(id) {
    let response = await fetch(`https://api.example.com/users/${id}`, {
        method: 'DELETE'
    });
    
    return response.ok;
}
```

### Работа с заголовками
```javascript
async function fetchWithAuth() {
    let response = await fetch('https://api.example.com/data', {
        headers: {
            'Authorization': 'Bearer YOUR_TOKEN',
            'Content-Type': 'application/json'
        }
    });
    
    // Получить заголовки ответа
    console.log(response.headers.get('Content-Type'));
    
    return await response.json();
}
```

## Практические примеры

### Загрузка данных с индикатором
```javascript
async function loadData() {
    let loader = document.querySelector('.loader');
    let content = document.querySelector('.content');
    
    try {
        loader.style.display = 'block';
        
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        
        content.innerHTML = data.map(item => `
            <div class="item">${item.name}</div>
        `).join('');
        
    } catch (error) {
        content.innerHTML = '<p>Ошибка загрузки данных</p>';
    } finally {
        loader.style.display = 'none';
    }
}
```

### Поиск с задержкой (debounce)
```javascript
let timeoutId;

function searchWithDelay(query) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(async () => {
        try {
            let response = await fetch(`https://api.example.com/search?q=${query}`);
            let results = await response.json();
            displayResults(results);
        } catch (error) {
            console.error('Ошибка поиска:', error);
        }
    }, 500); // Задержка 500мс
}

let searchInput = document.querySelector('#search');
searchInput.addEventListener('input', (e) => {
    searchWithDelay(e.target.value);
});
```

### Загрузка файла
```javascript
async function uploadFile(file) {
    let formData = new FormData();
    formData.append('file', file);
    
    try {
        let response = await fetch('https://api.example.com/upload', {
            method: 'POST',
            body: formData
        });
        
        let result = await response.json();
        console.log('Файл загружен:', result);
    } catch (error) {
        console.error('Ошибка загрузки:', error);
    }
}

let fileInput = document.querySelector('#file');
fileInput.addEventListener('change', (e) => {
    let file = e.target.files[0];
    if (file) {
        uploadFile(file);
    }
});
```

### Retry механизм (повтор при ошибке)
```javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            let response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            if (i === maxRetries - 1) {
                throw error;
            }
            // Ждём перед повтором
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}
```

### Timeout для запроса
```javascript
async function fetchWithTimeout(url, timeout = 5000) {
    let controller = new AbortController();
    let timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        let response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Превышено время ожидания');
        }
        throw error;
    }
}
```

## Практическое задание

Создайте приложение, которое:
1. Загружает список пользователей с API
2. Отображает индикатор загрузки
3. Обрабатывает ошибки
4. Позволяет создавать новых пользователей
5. Реализует поиск с задержкой
6. Использует async/await для всех запросов
