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
// Open the Modal
const openModal = () => {
  document.getElementById('myModal').style.display = 'block';
};
// Close the Modal
const closeModal = () => {
  document.getElementById('myModal').style.display = 'none';
};

const getGallery = (num) => {
  let modalContent = document.getElementById('myModalContent');
  modalContent.innerHTML = '';

  contents[num].forEach((ele, index) => {
    let imgRow = document.createElement('div');
    imgRow.classList.add('img-content');

    let img = `<img src="${ele[0]}" alt="" />`;
    let caption = `<div class="caption-container">
        <p> ${index + 1}. 
           ${ele[1]}
        </p>
      </div>`;
    index % 2 === 0
      ? (imgRow.innerHTML = img + caption)
      : (imgRow.innerHTML = caption + img);

    modalContent.appendChild(imgRow);
  });
};

// let galleryWrapper = document.getElementById('gallery-wrapper');
// if (galleryWrapper) {
//   let arr = galleryWrapper.querySelectorAll('a.card');
//   console.log(arr);
//   arr.forEach((card) => {
//     card.addEventListener('click', openModal);
//   });
// }
