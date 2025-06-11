// ------------------------------------------------------
// 화살표 함수 표현식 (Arrow Function Expression)
// ------------------------------------------------------

// 함수를 만드는 방법 3가지

// 1. 함수 선언
function shoMeTheMoney() { console.log('show me thd money') }

// shoMeTheMoney()

// 2. 함수 표현식
let lookAndMe = function() { console.log('look at me')}

// lookAndMe()
 
// 3. 화살표 함수 표현식 ***
// let readABook = (bookName) => { console.log('"' + bookName + '" 을(를) 읽다.')}

// readABook('윈드 브레이커')


// --------------------------------------------------------------------------------
// 다양한 화살표 함수 구문
// ---------------------------------------------------------------------------------

// 1. 매개변수의 개수
// 0개, 2개 이상은 소괄호 생략할 수 없다.
// 1개인 경우에만 소괄호 생략 가능하다

// 
// --------------------------------
//    0개:
// let readABook = () => {
//    console.log('"책"을 읽다.')
// }


// 자바스크립트 월드 사람들의 관례
// 매개변수를 사용하지 않을 경우, 관례적으로 밑줄(_)을 사용한다.
// let readABook = _ => {
//   console.log('"책"을 읽다.')
// }

// --------------------------------
//    1개:
// let readABook = (bookName) => {
//   console.log('"' + bookName + '" 을(를) 읽다.')
// }

// readABook('윈드 브레이커')


//    1개면 소괄호 생략 가능 (권장은 안함)
// let readABook = bookName => {
//   console.log('"' + bookName + '" 을(를) 읽다.')
// }

// readABook('윈드 브레이커')
// --------------------------------
//    2개 이상:
//    2개 이상인 경우, 소괄호 생략을 허용하지 않는다.
// let readABook = (bookName, day) => {
//    console.log(day + '일에 걸쳐' + '"' + bookName + '" 을(를) 읽다.')
// }

// readABook('윈드 브레이커', 1)



// 2. 암묵적 반환
// return undefined (암묵적 반환, 기본 반환)
// return 값 (명시적 반환)

// const ROOT_FONT_SIZE = 16

// 함수 선언
// function px2rem(pxValue){
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 함수 표현식
// let px2rem = function (pxValue) {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 1 (기본 화살표 함수 표현식)
// let px2rem = (pxValue) => {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 2 (매개변수 1개 : 소괄호 생략)
// let px2rem = pxValue => {
//   return pxValue / ROOT_FONT_SIZE + 'rem'
// }

// 화살표 함수 표현식 변형 3 (암묵적 반환)
// let px2rem = pxValue =>  pxValue / ROOT_FONT_SIZE + 'rem'

// console.log(px2rem(28))

// ------- 객체 맛보기 -----------
// 객체
// let cssStyles = {
//   'display' : 'flex',
//   'row-gap' : 24
// }

// 객체를 반환하는 함수
// function getStyles() {
//    let cssStyles = {
//      'display' : 'flex',
//      'row-gap' : 24
//    }

//   return cssStyles
// }

// 함수 표현식
// let getStyles = function() {
//    let cssStyles = {
//      'display' : 'flex',
//      'row-gap' : 24
//    }

//   return cssStyles
// }

// 화살표 함수 표현식
// let getStyles = _ => {
//    return {
//      'display' : 'flex',
//      'row-gap' : 24
//    }
// }


// let getStyles = _ => (객체값에중괄호가포함되면문법오류)

// '=> { ' = 함수블록의 시작 // '=> ({ ' = 값을 묶었구나 인식  
// let getStyles = _ => ({
//   'display' : 'flex',
//   'row-gap' : 24
// })

// console.log(getStyles())


// -----------------------------------------------
// 짤막 실습
// -----------------------------------------------
// 1
// const ten = () => 10


// 2
// const logger = message => '로그 메시지: ' + message


// 3
// let pxToRem = (pxValue) => {
//   let rem = (pxValue / 16 + 'rem')
//   return pxToRem
// }

// const pxToRem = (pxValue) => pxValue / 16 + 'rem' 


// 4
// const percentage = (part, total) => {
//   return part / total * 100 + '%'
// }

// const percent = (part, total) => part / total * 100 + '%'

// --------------------------------------------------------
// 왜 함수를 화살표 함수 표현식으로 사용할 때
// let이 아닌 const 를 사용했을까?
// 협업을 할 때 내가 쓴 함수명을 누군가가 객체로 사용했을 수 있음 이러면, 함수로 인식하지 않음
// let = 변수, const = 상수 이기때문에 이런때를 고려해서 const를 사용

// let thisIsAFunction = () => {
//   console.log('이것은 함수입니다.')
// }

const thisIsAFunction = () => {
  console.log('이것은 함수 입니다.')
}

thisIsAFunction = {}

thisIsAFunction()