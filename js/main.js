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

// // Modal Gallery
// const showSlides = (n) => {
//   let i;
//   let slides = document.getElementsByClassName('mySlides');
//   let dots = document.getElementsByClassName('demo');
//   let captionText = document.getElementById('caption');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// };

// Open the Modal
const openModal = () => {
  document.getElementById('myModal').style.display = 'block';
};

// Close the Modal
const closeModal = () => {
  document.getElementById('myModal').style.display = 'none';
};

let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

// Thumbnail image controls
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};
