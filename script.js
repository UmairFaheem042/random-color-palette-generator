const generateBtn = document.querySelector('.generatorBtn');
const paletteBoxes = 4;
let boxes = document.querySelectorAll('.colors .color');
const lockIcon = document.querySelectorAll('.lock-toggle');
const hexCode = document.querySelectorAll('.color .color-input');
const copyIcon = document.querySelectorAll('.color .copy-hex');

// For Locking the individual Color Palette
function lockUnlockIcons() {
  lockIcon.forEach((icons) => {
    icons.addEventListener('click', () => {
      if (icons.classList.contains('is-not-Locked')) {
        icons.classList.remove('is-not-Locked');
        icons.classList.add('is-Locked');
        icons.innerHTML = `<i class="ri-lock-line"></i>`;
      } else {
        console.log('is-Locked');
        icons.classList.remove('is-Locked');
        icons.classList.add('is-not-Locked');
        icons.innerHTML = `<i class="ri-lock-unlock-line"></i>`;
      }
    });
  });
}

// Funtion to generate Colors
const generateColors = () => {
  for (let i = 0; i < paletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex}`;
    if (lockIcon[i].classList.contains('is-Locked')) {
      continue;
    } else {
      hexCode[i].innerHTML = randomHex;
      boxes[i].style.backgroundColor = randomHex;
    }
  }
};

// Copy Hex code
for (let i = 0; i < paletteBoxes; i++) {
  copyIcon[i].addEventListener('click', () => {
    navigator.clipboard.writeText(hexCode[i].innerText);
  });
}

// If space option is clicked on webpage
generateBtn.addEventListener('click', generateColors);
lockUnlockIcons();


window.addEventListener('load', generateColors);
