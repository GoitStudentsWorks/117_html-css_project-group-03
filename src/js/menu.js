document.querySelector('.burger-btn').onclick = e => {
  e.preventDefault();
  document.querySelector('.menu-overlay').classList.add('is-open');
};
document.querySelector('.button-svg-close').onclick = e => {
  e.preventDefault();
  document.querySelector('.menu-overlay').classList.remove('is-open');
};