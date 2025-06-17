// const button1 = document.querySelector('.button-1')
// const button2 = document.querySelector('.button-2')



// 실습2 : 마우스 오버했을 때와 하지 않았을 때 문구가 나옴 + (클래스가 추가되어)색이 바뀜
// - mouseenter(element, listener)
const body = document.body
const button1 = document.querySelector('.button-1')
const button2 = document.querySelector('.button-2')
const button3 = document.querySelector('.button-3')
const button4 = document.querySelector('.button-4')
const button5 = document.querySelector('.button-5')

// Mouse EventAdd commentMore actions
// - click
// - dblclick
// - mousedown
// - mousemove
// - mouseup
// - mouseenter(element, listener)
// - mouseleave(element, listener)

const handleActive = () => {
  body.classList.add('is-active')
  button1.classList.add('is-active')
  button2.classList.add('is-active')
  button3.classList.add('is-active')
  button4.classList.add('is-active')
  button5.classList.add('is-active')
}

const handleInactive = () => {
  body.classList.remove('is-active')
  button1.classList.remove('is-active')
  button2.classList.remove('is-active')
  button3.classList.remove('is-active')
  button4.classList.remove('is-active')
  button5.classList.remove('is-active')
}

// button1.addEventListener('mouseenter', handleActive)
// button1.addEventListener('mouseleave', handleInactive)
// button2.addEventListener('mouseenter', handleActive)
// button2.addEventListener('mouseleave', handleInactive)
// button3.addEventListener('mouseenter', handleActive)
// button3.addEventListener('mouseleave', handleInactive)
// button4.addEventListener('mouseenter', handleActive)
// button4.addEventListener('mouseleave', handleInactive)
// button5.addEventListener('mouseenter', handleActive)
// button5.addEventListener('mouseleave', handleInactive)

mouseenter(button1, handleActive)
mouseleave(button1, handleInactive)
mouseenter(button2, handleActive)
mouseleave(button2, handleInactive)
mouseenter(button3, handleActive)
mouseleave(button3, handleInactive)
mouseenter(button4, handleActive)
mouseleave(button4, handleInactive)
mouseenter(button5, handleActive)
mouseleave(button5, handleInactive)



click(document.querySelector('.button-1'), () => console.log('button 1'))
click(document.querySelector('.button-2'), () => console.log('button 2'))

const handleClick = () => console.log('clicked button')
// button.addEventListener('click', handleClick)

// click(button1, handleClick)
// click(button2, handleClick)

function click(element, listener) {
  element.addEventListener('click', listener)
}

// --------------------------------------------------------------------------

function callToAction(callback) {
  callback()
}

// callToAction(() => {
//   console.log('콜백은 다른 함수에 인수로 전달되는 함수를 말합니다.')
// })



