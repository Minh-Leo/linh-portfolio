// Toggle light or dark mode
const body = document.querySelector('body');
const wrapper = document.getElementById('fold-effect');
const iconsWrapper = document.getElementById('social-circle');
const btnTheme = document.getElementById('btn-theme');
const btnSocial = document.getElementById('btn-social');

const toggleTheme = () => {
  // body.classList.toggle('theme');
  wrapper.classList.toggle('theme');
};
const toggleSocialIcons = () => {
  iconsWrapper.classList.toggle('appear');
  btnSocial.classList.toggle('shake');
};

btnTheme.addEventListener('click', toggleTheme);
btnSocial.addEventListener('click', toggleSocialIcons);
