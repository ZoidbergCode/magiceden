const navButton = document.getElementById('nav-button');

if (document.documentElement.clientWidth <= 991) {
  navButton.style.display = 'flex';
}

const addNavButton = () => {
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth <= 991) {
    navButton.style.display = 'flex';
  }
  if (windowWidth > 991) {
    navButton.style.display = 'none';
  }
};

window.addEventListener('resize', addNavButton);

let globalNavStatus = 1;
const navCloser = () => {
  if (globalNavStatus > 1) {
    marketplace.classList.remove('nav__item__active');
    marketplace.classList.add('nav__item');
    insights.classList.remove('nav__item__active');
    insights.classList.add('nav__item');
    launchpad.classList.remove('nav__item__active');
    launchpad.classList.add('nav__item');
    edengames.classList.remove('nav__item__active');
    edengames.classList.add('nav__item');
    creators.classList.remove('nav__item__active');
    creators.classList.add('nav__item');
    resources.classList.remove('nav__item__active');
    resources.classList.add('nav__item');
  }
};

const marketplace = document.getElementById('marketplace');

const marketplaceFunc = () => {
  if (marketplace.classList.contains('nav__item')) {
    navCloser();
    marketplace.classList.remove('nav__item');
    marketplace.classList.add('nav__item__active');
    globalNavStatus++;
  } else {
    marketplace.classList.remove('nav__item__active');
    marketplace.classList.add('nav__item');
    globalNavStatus--;
  }
};

marketplace.addEventListener('click', marketplaceFunc);

const insights = document.getElementById('insights');

const insightsFunc = () => {
  if (insights.classList.contains('nav__item')) {
    navCloser();
    insights.classList.remove('nav__item');
    insights.classList.add('nav__item__active');
    globalNavStatus++;
  } else {
    insights.classList.remove('nav__item__active');
    insights.classList.add('nav__item');
    globalNavStatus--;
  }
};

insights.addEventListener('click', insightsFunc);

const launchpad = document.getElementById('launchpad');

const launchpadFunc = () => {
  if (launchpad.classList.contains('nav__item')) {
    navCloser();
    launchpad.classList.remove('nav__item');
    launchpad.classList.add('nav__item__active');
    globalNavStatus++;
  } else {
    launchpad.classList.remove('nav__item__active');
    launchpad.classList.add('nav__item');
    globalNavStatus--;
  }
};

launchpad.addEventListener('click', launchpadFunc);

const edengames = document.getElementById('edengames');

const edengamesFunc = () => {
  if (edengames.classList.contains('nav__item')) {
    navCloser();
    edengames.classList.remove('nav__item');
    edengames.classList.add('nav__item__active');
    globalNavStatus++;
  } else {
    edengames.classList.remove('nav__item__active');
    edengames.classList.add('nav__item');
    globalNavStatus--;
  }
};

edengames.addEventListener('click', edengamesFunc);

const creators = document.getElementById('creators');

const creatorsFunc = () => {
  if (creators.classList.contains('nav__item')) {
    navCloser();
    creators.classList.remove('nav__item');
    creators.classList.add('nav__item__active');
    globalNavStatus++;
  } else {
    creators.classList.remove('nav__item__active');
    creators.classList.add('nav__item');
    globalNavStatus--;
  }
};

creators.addEventListener('click', creatorsFunc);

const resources = document.getElementById('resources');

const resourcesFunc = () => {
  if (resources.classList.contains('nav__item')) {
    navCloser();
    resources.classList.remove('nav__item');
    resources.classList.add('nav__item__active');
    globalNavStatus++;
  } else {
    resources.classList.remove('nav__item__active');
    resources.classList.add('nav__item');
    globalNavStatus--;
  }
};

resources.addEventListener('click', resourcesFunc);
