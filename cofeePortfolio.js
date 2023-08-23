const searchBar = document.querySelector('.search-box');

document.querySelector('#search-icon')
    .addEventListener('click', () => {
        searchBar.classList.toggle('active');
        navbar.classList.remove('active');
    });

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon')
    .addEventListener('click', () => {
        navbar.classList.toggle('active');
        searchBar.classList.remove('active');
    });

window.onscroll = () => {
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
};