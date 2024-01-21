import {initBurger} from './modules/init-burger-action';
import {initSelect} from './modules/init-custom-select';
import {initTabs} from './modules/init-tabs';
import {initChat} from './modules/init-chat-form';
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
    initChat();
  });
});

// ---------------------------------
