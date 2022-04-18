import './style.css'
const button = document.querySelector('.dropdown__container > button')

button.addEventListener('click', () => {
  const collapsedContainer = document.querySelector('.dropdown__container div')
  collapsedContainer.classList.toggle('collapsed')
})