import {initBurger} from './modules/init-burger-action';
import {initSelect} from './modules/init-custom-select';
import {initTabs} from './modules/init-tabs';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initBurger();
    initSelect();
    initTabs();
  });
});

// ---------------------------------
