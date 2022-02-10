const burgerMenuButton = document.querySelector('#burger-menu-button');
const burgerMenu = document.querySelector('#burger-menu');
const body = document.querySelector('#body');
const burgerMenuLink = document.querySelectorAll('.header__burger-item');

const toggleFunction = () => {
  burgerMenuButton.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
}

burgerMenuButton.addEventListener('click', toggleFunction);

burgerMenuLink.forEach((element) => {
  element.addEventListener('click', toggleFunction);
})

