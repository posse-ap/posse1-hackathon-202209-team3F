// さら担当

"use strict"

const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.textContent = `いいね: ${event.detail}`;
});
