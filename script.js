document.addEventListener("DOMContentLoaded", function() {
 
    // Пример ночного режима
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.innerText = 'Ночной режим';
    toggleThemeButton.style.position = 'fixed';
    toggleThemeButton.style.top = '20px';
    toggleThemeButton.style.right = '20px';
    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

    // Эффект увеличения изображений при наведении
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.2)'; // Увеличиваем изображение
            image.style.transition = 'transform 0.3s ease'; // Плавный переход
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)'; // Возвращаем к исходному размеру
        });
    });
});
