const burger = document.getElementById('burger');
const search = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
const logo = document.getElementById('header-bottom__logo');
const input = document.getElementById('header-bot__input');
const walletButton1 = document.getElementById('wallet-1');
const walletButton2 = document.getElementById('wallet-2');
let nav = document.getElementsByClassName('nav__container');
nav = nav[0];

const windowWidth = document.documentElement.clientWidth;
if (windowWidth <= 991) {
  nav.style.transform = 'translate(-300px, 0)';
  burger.classList.remove('burger');
  burger.classList.add('burger_active');
  search.classList.remove('search');
  search.classList.add('search_active');
  walletButton1.style = "display: none;";
  walletButton2.style = "display: none;";
} else {
  nav.style.transform = 'translate(0, 0)';
  burger.classList.remove('burger_active');
  burger.classList.add('burger');
  search.classList.remove('search_active');
  search.classList.add('search');
  walletButton1.style = "display: block;";
  walletButton2.style = "display: block;";
}

const addElements = () => {
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth <= 991) {
    burger.classList.remove('burger');
    burger.classList.add('burger_active');
    search.classList.remove('search');
    search.classList.add('search_active');
    input.style.display = 'none';
    search.src = 'images/search.svg';
    logo.classList.remove('none');
    logo.classList.add('header-bottom__logo');
    nav.style.transform = 'translate(-300px, 0)';
    walletButton1.style = "display: none;";
    walletButton2.style = "display: none;";
  } else {
    nav.style.transform = 'translate(0, 0)';
    burger.classList.remove('burger_active');
    burger.classList.add('burger');
    search.classList.remove('search_active');
    search.classList.add('search');
    search.src = 'images/search.svg';
    logo.classList.remove('none');
    logo.classList.add('header-bottom__logo');
    input.style.flex = '0 0 560px';
    input.style.display = 'flex';
    walletButton1.style = "display: block;";
    walletButton2.style = "display: block;";
  }
};

window.addEventListener('resize', addElements);
const searchClick = () => {
  if (search.src.includes('images/search.svg')) {
    search.src = 'images/cross.svg';
    logo.classList.remove('header-bottom__logo');
    logo.classList.add('none');
    input.style.display = 'flex';
    input.style.flex = '1 1 auto';
  } else {
    search.src = 'images/search.svg';
    logo.classList.remove('none');
    logo.classList.add('header-bottom__logo');
    input.style.display = 'none';
    input.style.flex = '0 0 560px';
  }
};

search.addEventListener('click', searchClick);

let burgerStatus = false;

const burgerCloser = () => {
  if (burgerStatus) {
    nav.style.transform = 'translate(-300px, 0)';
    burgerStatus = !burgerStatus;
  } else {
    nav.style.transform = 'translate(0, 0)';
    burgerStatus = !burgerStatus;
  }
};

burger.addEventListener('click', burgerCloser);
