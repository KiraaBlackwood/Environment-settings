import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

let swiper;
function initSwiper() {
  const isSmallScreen = window.innerWidth < 768;
  if (isSmallScreen && !swiper) {
    swiper = new Swiper('.swiper', {
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  if (!isSmallScreen && swiper) {
    swiper.destroy(true, true);
    swiper = null;
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (swiperWrapper) {
      swiperWrapper.style.transform = '';
    }
  }
}
initSwiper();
window.addEventListener('resize', () => {
  initSwiper();
  if (swiper) {
    swiper.update();
  }
});

// let swiper;
// let swipers = [];

// function initSwipers() {
//   const isSmallScreen = window.innerWidth < 768;

//   if (isSmallScreen && !swiper) {
//     document.querySelectorAll('.swiper').forEach((swiper) => {
//       swiper = new Swiper(swiper, {
//         loop: true,

//         pagination: {
//           el: '.swiper-pagination',
//         }
//       });

//       swipers.push(swiper);
//     });
//   }

//   if (!isSmallScreen && swipers.length != 0) {
//     swipers.forEach((swiper) => {
//       if (swiper && typeof swiper.destroy === 'function') {
//         swiper.destroy(true, true);
//         swiper = null;

//         const swiperWrapper = document.querySelector('.swiper-wrapper');
//         if (swiperWrapper) {
//           swiperWrapper.style.transform = '';
//         }
//       }
//     });
//     swipers = [];
//   }
// }
// initSwipers();

// window.addEventListener('resize', () => {
//   initSwipers();

//   if (swiper) {
//     swipers.forEach((swiper) => {
//       if (swiper && typeof swiper.update === 'function') {
//         swiper.update();
//       }
//     });
//   }
// });

const burgerButton = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const mainContainer = document.querySelector('.main-container');
const mainHeader = document.querySelector('.main-header');

burgerButton.addEventListener('click', function (e) {
  e.preventDefault();
  sidebar.classList.toggle('active');
  mainContainer.classList.toggle('passive');
  mainHeader.classList.toggle('passive');
  callMenu.classList.remove('active');
  chatMenu.classList.remove('active');

});

const callButton = document.querySelectorAll('.call');
const callMenu = document.querySelector('.order-call');

callButton.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    callMenu.classList.toggle('active');
    sidebar.classList.remove('active');
    if (!mainContainer.classList.contains('passive')) {
      mainContainer.classList.toggle('passive');
      mainHeader.classList.toggle('passive');
    }
  });
});

const chatButton = document.querySelectorAll('.chat');
const chatMenu = document.querySelector('.feedback');

chatButton.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    chatMenu.classList.toggle('active');
    sidebar.classList.remove('active');
    if (!mainContainer.classList.contains('passive')) {
      mainContainer.classList.toggle('passive');
      mainHeader.classList.toggle('passive');
    }
  });
});

const closeButton = document.querySelectorAll('.close');

closeButton.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    sidebar.classList.remove('active');
    callMenu.classList.remove('active');
    chatMenu.classList.remove('active');
    mainContainer.classList.remove('passive');
    mainHeader.classList.remove('passive');
  });
});

mainContainer.addEventListener('click', function (e) {
  e.preventDefault();
  sidebar.classList.remove('active');
  callMenu.classList.remove('active');
  chatMenu.classList.remove('active');
  mainContainer.classList.remove('passive');
  mainHeader.classList.remove('passive');
});

