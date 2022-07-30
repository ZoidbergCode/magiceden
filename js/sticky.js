// Когда пользователь прокручивает страницу, выполните myFunction
window.onscroll = function() {myFunction()};

// Получить заголовок
var header = document.getElementById("myHeader");
var myNav = document.getElementById("myNav");
var pageInfo = document.getElementById("pageInfo")
var main = document.getElementById("main");

// Получить смещение позиции навигационной панели
var sticky = header.offsetTop;

// Добавить класс "sticky" к заголовку, когда вы достигнете его позиции прокрутке.
// Удалить "sticky" при выходе из положения прокрутки
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    myNav.classList.add("stickyNav");
    pageInfo.style = "margin-bottom: 82px";
    main.style = "padding-left: 254.547px";
  } else {
    header.classList.remove("sticky");
    myNav.classList.remove("stickyNav");
    pageInfo.style = "";
    main.style = "";

  }
}

