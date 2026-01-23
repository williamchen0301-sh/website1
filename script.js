document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Dynamic Greeting (Time-based)
    // Only runs if the element exists (which is on index.html)
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        const hour = new Date().getHours();
        let greetingText = 'Hello,';

        if (hour >= 5 && hour < 12) {
            greetingText = 'Good Morning,';
        } else if (hour >= 12 && hour < 18) {
            greetingText = 'Good Afternoon,';
        } else if (hour >= 18) {
            greetingText = 'Good Evening,';
        }

        greetingElement.textContent = greetingText;
    }

    // 3. Simple Form Handling (Prevents actual submission for demo)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! This is a demo form.');
            form.reset();
        });
    }
});