let minScroll = 41;
window.onscroll = () => {
  if (minScroll < document.documentElement.scrollTop) {
    document.querySelector('.header').classList.add('color-bg');
  } else {
    document.querySelector('.header').classList.remove('color-bg');
  }
};
