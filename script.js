let wpala = document.querySelector('.wpala');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  wpala.classList.toggle('light-theme');
  wpala.classList.toggle('dark-theme');
  
};