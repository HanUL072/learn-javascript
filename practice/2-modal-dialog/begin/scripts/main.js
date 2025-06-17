const body = document.body
const modal_open_button = document.querySelector('main .modal-open-button')
const modal_close_button = document.querySelector('.modal-overlay .modal-close-button')

// 접근성 4원칙
// 1원칙 : 인식의 용이성
// 2원칙 : 운용의 용이성
// 3원칙 : 이해의 용이성
// 4원칙 : 견고성

modal_open_button.addEventListener('click', () => {
  body.classList.add('modal-is-open')  
})

modal_close_button.addEventListener('click', () => {
  body.classList.remove('modal-is-open')  
})