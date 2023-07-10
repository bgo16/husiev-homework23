function random() {
  return '/images/' + (Math.floor(Math.random() * 9) + 1) + '.png';
}

const body = document.querySelector('body');
const button = document.createElement('button');
const img = document.createElement('img');
button.textContent = 'press';
body.appendChild(button);
button.addEventListener('click', () => {
  img.src = random();
  body.appendChild(img);
});
