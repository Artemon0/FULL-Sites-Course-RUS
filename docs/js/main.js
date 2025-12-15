// Главный файл

// Отрисовка модулей
function renderModules() {
    const container = document.getElementById('modulesGrid');
    if (!container) return;

    const html = modulesData.map(module => `
        <div class="module-card" data-module="${module.id}">
            <div class="module-header">
                <div class="module-icon">${module.icon}</div>
                <div>
                    <div class="module-number">${module.number}</div>
                    <h3 class="module-title">${module.title}</h3>
                </div>
            </div>
            <p class="module-description">${module.description}</p>
            <ul class="module-topics">
                ${module.topics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
            <div class="module-footer">
                <span class="module-duration">⏱️ ${module.duration}</span>
                <a href="${module.link}" class="module-link">Начать →</a>
            </div>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border); color: var(--secondary); font-size: 0.9rem;">
                📁 Проект: ${module.project}
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            if (nav.style.display === 'flex') {
                nav.style.position = 'fixed';
                nav.style.top = '70px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'white';
                nav.style.flexDirection = 'column';
                nav.style.padding = '1rem';
                nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
        }
    });
}

// Активная ссылка в навигации
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function () {
    renderModules();
    updateActiveLink();
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Применить анимацию к карточкам модулей
setTimeout(() => {
    document.querySelectorAll('.module-card, .about-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}, 100);
