const btn = document.getElementById("menuBTN");
const header = document.getElementById("header");
const nav = document.getElementById("nav");


btn.addEventListener('click', (e) =>{
  header.classList.toggle('header--open')
  nav.classList.toggle('nav--open')
  btn.classList.toggle('nav__menuBtn--open')
})