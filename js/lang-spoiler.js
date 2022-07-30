const languages = document.getElementById('languages');
const spoiler = document.getElementById('lang-spoiler');

function f1() {
  if (spoiler.classList.contains('lang-spoiler')) {
    spoiler.classList.remove('lang-spoiler');
    spoiler.classList.add('lang-spoiler_active');
  } else if (spoiler.classList.contains('lang-spoiler_active')) {
    spoiler.classList.remove('lang-spoiler_active');
    spoiler.classList.add('lang-spoiler');
  }
}
languages.addEventListener('click', f1);
