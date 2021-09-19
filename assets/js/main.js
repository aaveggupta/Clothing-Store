// Menu Button
const menuBtn = document.querySelector('.containerAbove__icons__menu');
const contOver = document.querySelector('.containerOver');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    contOver.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    contOver.classList.remove('open');
    menuOpen = false;
  }
});