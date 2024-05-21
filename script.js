'use strict';

const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const bcg = document.querySelector('#background');
const whiteFontElements = document.querySelectorAll('.white-font'); // all elements with text has this class
const socialIcons = document.querySelectorAll('.social-icons');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');
const navMenu = document.getElementById('navmenu');

// Dark Mode functionality

darkMode.addEventListener('click', function () {
  bcg.style.backgroundColor = '#001523';
  darkMode.style.color = 'white';
  whiteFontElements.forEach(element => {
    element.style.color = 'white';
  });
  lightMode.style.color = 'white';
  darkMode.classList.toggle('hidden');
  lightMode.classList.toggle('hidden');
  socialIcons.forEach(icon => {
    icon.classList.toggle('text-dark');
    icon.style.color = 'white';
  });
});

lightMode.addEventListener('click', function () {
  bcg.style.backgroundColor = '#fffae6';
  darkMode.style.color = 'black';
  whiteFontElements.forEach(element => {
    element.style.color = 'black';
  });
  lightMode.classList.toggle('hidden');
  darkMode.classList.toggle('hidden');
  socialIcons.forEach(icon => {
    icon.classList.toggle('text-dark');
  });
});

// Hamburger icon functionality

navbarToggler.addEventListener('click', function () {
  const navbarNav = navMenu.querySelector('.navbar-nav');
  navbarNav.classList.toggle('show');
});
