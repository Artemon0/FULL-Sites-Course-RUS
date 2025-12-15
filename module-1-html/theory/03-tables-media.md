# Таблицы и медиа элементы

## Таблицы

### Базовая структура
```html
<table>
    <thead>
        <tr>
            <th>Заголовок 1</th>
            <th>Заголовок 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Данные 1</td>
            <td>Данные 2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Итого</td>
            <td>100</td>
        </tr>
    </tfoot>
</table>
```

### Объединение ячеек
```html
<table>
    <tr>
        <td colspan="2">Объединение по горизонтали</td>
    </tr>
    <tr>
        <td rowspan="2">Объединение по вертикали</td>
        <td>Ячейка</td>
    </tr>
    <tr>
        <td>Ячейка</td>
    </tr>
</table>
```

## Медиа элементы

### Видео
```html
<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Ваш браузер не поддерживает видео.
</video>

<!-- С дополнительными атрибутами -->
<video controls autoplay muted loop poster="preview.jpg">
    <source src="video.mp4" type="video/mp4">
</video>
```

### Аудио
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Ваш браузер не поддерживает аудио.
</audio>
```

### Iframe (встраивание контента)
```html
<!-- YouTube видео -->
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

<!-- Google карты -->
<iframe src="https://www.google.com/maps/embed?pb=..." 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### Figure и Figcaption
```html
<figure>
    <img src="image.jpg" alt="Описание">
    <figcaption>Подпись к изображению</figcaption>
</figure>
```

## Meta теги и SEO

```html
<head>
    <!-- Основные meta теги -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Описание страницы для поисковиков">
    <meta name="keywords" content="ключевые, слова, через, запятую">
    <meta name="author" content="Имя автора">
    
    <!-- Open Graph для социальных сетей -->
    <meta property="og:title" content="Заголовок">
    <meta property="og:description" content="Описание">
    <meta property="og:image" content="image.jpg">
    <meta property="og:url" content="https://example.com">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
</head>
```

## Практическое задание

Создайте страницу с:
- Таблицей расписания или прайс-листом
- Встроенным видео
- Аудио плеером
- Правильными meta тегами
