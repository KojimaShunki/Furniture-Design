'use strict';

const humbergerMenu = document.querySelector('.humberger-menu');

const navi = document.getElementById('humberger-navigation');

humbergerMenu.addEventListener('click', function () {
  humbergerMenu.classList.toggle('active');
  navi.classList.toggle('active');
});