// --------------------------------------------------------------------------Add commentMore actions
// 📌 (dataType).toString(radix?)
// --------------------------------------------------------------------------
// - 타입 변경 (문자열화)
// - 10진수를 다른 진수로 변경 (최소값: 2진수 / 최대값: 36진수)
// --------------------------------------------------------------------------

// 타입 변경
// console.log('하요'.toString())
// console.log((1004).toString())
// console.log((true).toString())
// console.log((false).toString())
// console.log((undefined).toString())
// console.log((null).toString())


// 10진수 -> 2진수 변경
let n = 255 // 10진수
console.log(n.toString(2)) // 컴퓨터 이진수
console.log(n.toString(8)) // 8진수
console.log(n.toString(16)) // 10진수

// 10진수 -> 16진수 변경
// ...

// 10진수를 2진수 또는 16진수로 변경하는 함수 작성
// 1. 함수 기능 고민
// 2. 적절한 함수 이름 작성(toHax)
// 3 함수 기능 구현
// 4. 반환값 설계
// 5. 테스트 (함수 호출 정상 작동 검사)

function toHexadecimal(n) {
  return n.toString(16)
}

// const toHexadecimal = n => n.toString(16)

console.log(toHexadecimal(255) === 'ff')


// --------------------------------------------------------------------------
// 📌 Number.parseInt(string, radix?), Number.parseFloat(string, radix?)
// --------------------------------------------------------------------------
// - 단위(예: px, rem, cm, mm 등) 제거
// - 2 또는 16진수 문자열을 10진수로 변경
// --------------------------------------------------------------------------

// 단위 제거
console.log(parseInt('24px'))
console.log(parseFloat('1.625rem'))

// 단위 제거 함수 작성
// 1. 함수 기능 고민
// 2. 적절한 함수 이름 작성(toHax)
// 3 함수 기능 구현
// 4. 반환값 설계
// 5. 테스트 (함수 호출 정상 작동 검사)

function unitRemove(unitValue) {
  return parseFloat(unitValue, 10)
} 

console.log(unitRemove('10px') === 10)
console.log(unitRemove('8.425rem') === 8.425)

// 2진수 문자열 -> 10진수 변경
console.log(parseInt('10', 2))
console.log(parseInt('100', 2))

// 16진수 문자열 -> 10진수 변경
console.log(parseInt('00', 16))
console.log(parseInt('80', 16))
console.log(parseInt('a0', 16))
console.log(parseInt('a1', 16))
console.log(parseInt('ff', 16))

// 16진수 문자열을 10진수로 변경하는 함수 작성Add commentMore actions
function formHaxadecimel(haxvalue){
   return parseInt(haxvalue, 16)
}

console.log(formHaxadecimel('a1'))
console.log(formHaxadecimel('80'))
