// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

function getMoney(price /*필수값*/ , unit /*옵션*/) {
  // 0. 
  // console.log(price)
  // console.log(unit)
  // unit 매개변수(옵션)
  // 설정 가능한 값: '달러' 또는 '원화'
  // 기본 값: '원'

  // 1. 만약 사용자가 전달한 인수에 의해 unit 매개변수 값이 undefined로 설정된다면
  // '원' 값을 unit 매개변수의 기본값으로 설정한다.

  if (unit === undefined) {
    // '원' 값을 unit 매개변수의 기본값으로 설정
    unit = '원'
  }
  // if (unit === undefined) unit = '원'  - 한 줄일땐 생략가능
  // if (!unit) unit = '원'  - 부정연산자 사용 (같은값 실행)

  // 2. 사용자가 전달한 인수 값이 '달러'인 경우,
  // 문자 연결하는 방법을 달리해서 결과값을 반환한다.

  if (unit === '달러') {
    // 반환값 '$ + 80.75'
    return '$' + price
  }

  // 0. 개발자가 명시적으로 반환값 설정
  return price + unit

  // 함수는 undefined 반환
  // return undefined


  // !결과적으로 모두 정리한 코드!
  // if (!unit) unit = '원'
  // if (unit === '달러') return '$' + price
  // return price + unit
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500) // '10000원'
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') // '$80.75'


console.log(moneyKR)
console.log(moneyUS)

//console.log(typeof moneyKR)