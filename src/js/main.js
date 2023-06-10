let burgerButton = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('header__burger--active');
  headerMenu.classList.toggle('header__menu--active');
});
