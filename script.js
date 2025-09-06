// script.js - shared JS for all pages

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link based on current page
  const navLinks = document.querySelectorAll('nav ul li a');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
    // Close menu on link click (mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('show');
      });
    });
  }

  // Contact form validation and submission (only on contact.html)
  if (document.getElementById('contact-form')) {
    const form = document.getElementById('contact-form');
    const nameInput = form.name;
    const emailInput = form.email;
    const messageInput = form.message;
    const formMessage = document.getElementById('form-message');

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', e => {
      e.preventDefault();

      // Reset errors
      errorName.textContent = '';
      errorEmail.textContent = '';
      errorMessage.textContent = '';
      formMessage.style.display = 'none';
      formMessage.textContent = '';

      let valid = true;

      // Name validation
      if (nameInput.value.trim() === '') {
        errorName.textContent = 'Please enter your name.';
        valid = false;
      }

      // Email validation (simple regex)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === '') {
        errorEmail.textContent = 'Please enter your email.';
        valid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        errorEmail.textContent = 'Please enter a valid email.';
        valid = false;
      }

      // Message validation
      if (messageInput.value.trim() === '') {
        errorMessage.textContent = 'Please enter your message.';
        valid = false;
      }

      if (!valid) return;

      // Simulate form submission success
      formMessage.style.color = '#4caf50';
      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.style.display = 'block';

      // Clear form fields
      form.reset();
    });
  }
});