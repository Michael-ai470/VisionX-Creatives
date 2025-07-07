// VisionX Creative Agency JavaScript

// Scroll-Triggered Section Animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Light/Dark Mode Toggle
    const lightToggle = document.getElementById('light-toggle');
    lightToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            lightToggle.classList.remove('fa-moon');
            lightToggle.classList.add('fa-sun');
        } else {
            lightToggle.classList.remove('fa-sun');
            lightToggle.classList.add('fa-moon');
        }
    });

    // Responsive Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });
});
