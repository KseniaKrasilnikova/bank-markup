import {ScrollLock} from '../utils/scroll-lock';

const breakpointTablet = window.matchMedia('(min-width:1024px)');
const openButton = document.querySelector('.js-btn-open-menu');
const closeButton = document.querySelector('.js-btn-close-menu');
const mobileMenu = document.querySelector('.mobile-nav__wrapper');
const overlay = document.querySelector('.bg-overlay');
const header = document.querySelector('.mobile-nav');
const scrollLock = new ScrollLock();
const active = 'active';

const openBurgerMenu = () => {
  if (breakpointTablet.matches) {
    return;
  }
  openButton.classList.add('_hide');
  closeButton.classList.add('_show');
  overlay.classList.add(active);
  header.classList.add('mobile-active');
  mobileMenu.classList.add('mobile-nav__wrapper_active');
};

const closeMenu = () => {
  closeButton.classList.remove('_show');
  openButton.classList.remove('_hide');
  mobileMenu.classList.remove('mobile-nav__wrapper_active');
  header.classList.remove('mobile-active');
  overlay.classList.remove(active);
};

const closeMenuOnResize = () => {
  if (mobileMenu.classList.contains('mobile-nav__wrapper_active')) {
    closeMenu();
    scrollLock.enableScrolling()
  }
};

const initBurger = () => {
  if (!openButton) {
    return;
  }

  breakpointTablet.addListener(closeMenuOnResize);
  window.addEventListener('orientationchange', closeMenu);

  openButton.addEventListener('click', () => {
    openBurgerMenu();
    scrollLock.disableScrolling();
  });

  closeButton.addEventListener('click', () => {
    closeMenu();
    scrollLock.enableScrolling();
  });
};

export {initBurger};
