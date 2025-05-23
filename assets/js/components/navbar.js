// This file contains the logic for the navigation bar component, managing navigation between different pages of the site.

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('hidden');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.add('hidden');
        });
    });
});