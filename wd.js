// Фільтрація квітів у каталозі
document.addEventListener('DOMContentLoaded', function() {
    // Перевіряємо, чи ми на сторінці каталогу
    if (document.querySelector('.filter-btn')) {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const flowerCards = document.querySelectorAll('.flower-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Видаляємо активний клас у всіх кнопок
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Додаємо активний клас до поточної кнопки
                this.classList.add('active');

                const category = this.dataset.category;

                flowerCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Обробка форми зворотного зв'язку
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Тут можна додати відправку форми на сервер
            console.log('Форма відправлена:', { name, email, message });
            
            // Сповіщення про успішну відправку
            alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
            
            // Очищення форми
            feedbackForm.reset();
        });
    }

    // Плавна прокрутка для навігаційних посилань
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Анімація при скролі
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    
    if (scrollPosition > 100) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        header.style.padding = '0.5rem 2rem';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        header.style.padding = '1rem 2rem';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Карусель у шапці
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const slideCount = slides.length;

    // Функція для оновлення каруселі
    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * 33.333}%)`;
        
        // Оновлення активних точок
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Оновлення активних слайдів
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }

    // Перехід до наступного слайду
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }

    // Перехід до попереднього слайду
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    }

    // Обробники кнопок
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Обробники точок
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Автоматична зміна слайдів
    let interval = setInterval(nextSlide, 5000);

    // Зупинка автоматичної зміни при наведенні
    const carousel = document.querySelector('.header-carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    carousel.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 5000);
    });

});

function openTab(tabId) {
    // Приховуємо всі вкладки
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Видаляємо активний клас у всіх кнопок
    const tabBtns = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove('active');
    }
    
    // Показуємо вибрану вкладку
    document.getElementById(tabId).classList.add('active');
    
    // Робимо кнопку активною
    event.currentTarget.classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Видаляємо активні класи
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Додаємо активні класи
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});



