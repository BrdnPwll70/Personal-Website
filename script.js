// script.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social-linksa');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#555'; 
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '#333';
        });
    });
});