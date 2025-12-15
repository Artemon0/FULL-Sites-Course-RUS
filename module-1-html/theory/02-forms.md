# Формы в HTML

## Базовая структура формы

```html
<form action="/submit" method="POST">
    <!-- Поля формы -->
</form>
```

## Типы полей ввода

### Текстовые поля
```html
<label for="name">Имя:</label>
<input type="text" id="name" name="name" required>

<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<label for="password">Пароль:</label>
<input type="password" id="password" name="password">
```

### Другие типы input
```html
<!-- Число -->
<input type="number" min="0" max="100" step="1">

<!-- Дата -->
<input type="date">

<!-- Цвет -->
<input type="color">

<!-- Файл -->
<input type="file" accept="image/*">

<!-- Чекбокс -->
<input type="checkbox" id="agree" name="agree">
<label for="agree">Я согласен</label>

<!-- Радио кнопки -->
<input type="radio" id="male" name="gender" value="male">
<label for="male">Мужской</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Женский</label>
```

### Textarea и Select
```html
<!-- Многострочное поле -->
<textarea name="message" rows="5" cols="30"></textarea>

<!-- Выпадающий список -->
<select name="country">
    <option value="">Выберите страну</option>
    <option value="ru">Россия</option>
    <option value="ua">Украина</option>
    <option value="by">Беларусь</option>
</select>
```

### Кнопки
```html
<button type="submit">Отправить</button>
<button type="reset">Очистить</button>
<button type="button">Обычная кнопка</button>
```

## Атрибуты валидации

```html
<input type="text" required>
<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
<input type="text" minlength="3" maxlength="20">
<input type="number" min="18" max="100">
```

## Полный пример формы

```html
<form action="/register" method="POST">
    <div>
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" name="username" required minlength="3">
    </div>
    
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" name="password" required minlength="8">
    </div>
    
    <div>
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">Я принимаю условия использования</label>
    </div>
    
    <button type="submit">Зарегистрироваться</button>
</form>
```

## Практическое задание

Создайте форму регистрации с полями:
- Имя и фамилия
- Email
- Пароль и подтверждение пароля
- Дата рождения
- Пол (радио кнопки)
- Согласие с условиями (чекбокс)
