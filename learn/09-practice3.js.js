// 실습

// 1. logger 이름의 함수를 선언하고, logMessage 매개변수로 받아 콘솔 패널에 출력하도록 작성합니다.
function logger(logMessage) {
  console.log('로그 메세지 =', logMessage)
}

logger('실습을 통한 연습은 언제나 옳습니다.')

// 2. px 값을 rem 단위 값으로 변경하는 pxToRem 함수를 선언하고, 계산된 값을 반환하도록 작성하세요.
// --------------------------------------------------------------------
// 어떤 기능 작성??
// px -> rem (:root + em) 단위 변경 기능
// CSS 
// root element html 요소의 글자 크기 (기준)
// 16 / 16 = 1
// ---------------------------------------------------------------------
// pxToRem 함수
// ---------------------------------------------------------------------
function pxToRem(px) {
  // px size / base size + 'rem'
  let rem = px / 16 + 'rem'
  return rem
}

console.log(pxToRem(12)) // 0.75rem
console.log(pxToRem(16)) // 1rem
console.log(pxToRem(20)) // 1.25rem
console.log(pxToRem(24))

// 3. rem 단위 값을 px 값으로 변경하는 remToPx 함수를 선언하고, 계산된 값을 반환하도록 작성해보세요.
function remToPx(rem){
  let px = rem * 16 + 'px'
  return px
}

console.log(remToPx(1))
console.log(remToPx(2))
console.log(remToPx(3))

