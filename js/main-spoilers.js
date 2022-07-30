const mainSpoiler__1 = document.getElementById('main-spoiler__1');
const mainSpoiler__2 = document.getElementById('main-spoiler__2');
const mainSpoiler__3 = document.getElementById('main-spoiler__3');
const mainSpoiler__4 = document.getElementById('main-spoiler__4');
const mainSpoiler__5 = document.getElementById('main-spoiler__5');
const mainSpoiler__6 = document.getElementById('main-spoiler__6');
const mainSpoilerContent__1 = document.getElementById('main-spoiler__content__1');
const mainSpoilerContent__2 = document.getElementById('main-spoiler__content__2');
const mainSpoilerContent__3 = document.getElementById('main-spoiler__content__3');
const mainSpoilerContent__4 = document.getElementById('main-spoiler__content__4');
const mainSpoilerContent__5 = document.getElementById('main-spoiler__content__5');
const mainSpoilerContent__6 = document.getElementById('main-spoiler__content__6');
const mainSpoiler__1_second = document.getElementById('main-spoiler__1-second');
const mainSpoilerButton1 = document.getElementById('main-spoiler__button-1');
const mainSpoilerButton2 = document.getElementById('main-spoiler__button-2');
const mainSpoilerButton3 = document.getElementById('main-spoiler__button-3');
const mainSpoilerButton4 = document.getElementById('main-spoiler__button-4');
const mainSpoilerButton5 = document.getElementById('main-spoiler__button-5');
const mainSpoilerButton6 = document.getElementById('main-spoiler__button-6');
const mainSpoilerButton1Second = document.getElementById('main-spoiler__button-1-second');
if (windowWidth <= 991) {
  mainSpoiler__1.style.display = 'none';
  mainSpoiler__1_second.style.display = 'block';
} else {
  mainSpoiler__1.style.display = 'block';
  mainSpoiler__1_second.style.display = 'none';
}
const mainSpoiler__1Closer = () => {
  if (mainSpoiler__1.classList.contains('main-spoiler')) {
    mainSpoiler__1.classList.remove('main-spoiler');
    mainSpoiler__1.classList.add('main-spoiler__active');
  } else {
    mainSpoiler__1.classList.remove('main-spoiler__active');
    mainSpoiler__1.classList.add('main-spoiler');
  }
};
const mainSpoiler__1SecondCloser = () => {
  if (mainSpoiler__1_second.classList.contains('main-spoiler')) {
    mainSpoiler__1_second.classList.remove('main-spoiler');
    mainSpoiler__1_second.classList.add('main-spoiler__active');
  } else {
    mainSpoiler__1_second.classList.remove('main-spoiler__active');
    mainSpoiler__1_second.classList.add('main-spoiler');
  }
};

const mainSpoiler__2Closer = () => {
  if (mainSpoiler__2.classList.contains('main-spoiler')) {
    mainSpoiler__2.classList.remove('main-spoiler');
    mainSpoiler__2.classList.add('main-spoiler__active');
  } else {
    mainSpoiler__2.classList.remove('main-spoiler__active');
    mainSpoiler__2.classList.add('main-spoiler');
  }
};

const mainSpoiler__3Closer = () => {
  if (mainSpoiler__3.classList.contains('main-spoiler')) {
    mainSpoiler__3.classList.remove('main-spoiler');
    mainSpoiler__3.classList.add('main-spoiler__active');
  } else {
    mainSpoiler__3.classList.remove('main-spoiler__active');
    mainSpoiler__3.classList.add('main-spoiler');
  }
};

const mainSpoiler__4Closer = () => {
  if (mainSpoiler__4.classList.contains('main-spoiler')) {
    mainSpoiler__4.classList.remove('main-spoiler');
    mainSpoiler__4.classList.add('main-spoiler__active');
  } else {
    mainSpoiler__4.classList.remove('main-spoiler__active');
    mainSpoiler__4.classList.add('main-spoiler');
  }
};

const mainSpoiler__5Closer = () => {
  if (mainSpoiler__5.classList.contains('main-spoiler')) {
    mainSpoiler__5.classList.remove('main-spoiler');
    mainSpoiler__5.classList.add('main-spoiler__active');
  } else {
    mainSpoiler__5.classList.remove('main-spoiler__active');
    mainSpoiler__5.classList.add('main-spoiler');
  }
};

const mainSpoiler__6Closer = () => {
  if (mainSpoiler__6.classList.contains('main-spoiler')) {
    mainSpoiler__6.classList.remove('main-spoiler');
    mainSpoiler__6.classList.add('main-spoiler__active');
  } else {
    mainSpoiler__6.classList.remove('main-spoiler__active');
    mainSpoiler__6.classList.add('main-spoiler');
  }
};

mainSpoilerButton1.addEventListener('click', mainSpoiler__1Closer);
mainSpoilerButton1Second.addEventListener('click', mainSpoiler__1SecondCloser);
mainSpoilerButton2.addEventListener('click', mainSpoiler__2Closer);
mainSpoilerButton3.addEventListener('click', mainSpoiler__3Closer);
mainSpoilerButton4.addEventListener('click', mainSpoiler__4Closer);
mainSpoilerButton5.addEventListener('click', mainSpoiler__5Closer);
mainSpoilerButton6.addEventListener('click', mainSpoiler__6Closer);

const mainSpoiler__1_991px = () => {
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth <= 991) {
    mainSpoiler__1.style.display = 'none';
    mainSpoiler__1_second.style.display = 'block';
  } else {
    mainSpoiler__1.style.display = 'block';
    mainSpoiler__1_second.style.display = 'none';
  }
};

window.addEventListener('resize', mainSpoiler__1_991px);
