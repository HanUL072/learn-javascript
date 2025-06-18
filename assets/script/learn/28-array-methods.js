// ------------------------------------------
// 📌 배열의 메서드(Array's Methods)
// --------------------------------------------

const JS_학습_주제 = ['변수', '함수', '조건문', '객체', '배열', '비교 연산자', '부정 연산자']

// 배열 항목 위치(index) 찾기(find)
let 함수_인덱스, 비교_연산자_인덱스

함수_인덱스 = JS_학습_주제.indexOf('함수') // 기대값: 1 / 결과값 : 1
console.log('함수_인덱스 =', 함수_인덱스)
함수_인덱스 = JS_학습_주제.indexOf('함 수') // 기대값: 1 / 결과값 : -1
console.log('함수_인덱스 =', 함수_인덱스)

비교_연산자_인덱스 = JS_학습_주제.indexOf('비교') // 기대값: -1 / 결과값 : -1
console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스)

비교_연산자_인덱스 = JS_학습_주제.indexOf('비교연산자') // 기대값: -1 / 결과값 : -1
console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스)

비교_연산자_인덱스 = JS_학습_주제.indexOf('비교 연산자') // 기대값: 5 / 결과값 : 5
console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스)





// indexOf() 메서드의 결과 값을 불리언 값으로 변경하려면?

const fruitBasket = ['패션후르츠', '애플망고', '워터멜론', '오렌지']

// indexOf() 메서드가 반환한 값이 -1 보다 크다면? 그 값은 true 이다.
// console.log(fruitBasket.indexOf('패션') > -1) // false
// console.log(fruitBasket.indexOf('패션후르츠') > -1) // true
// console.log(fruitBasket.indexOf('애플망고') > -1) // true
// console.log(fruitBasket.indexOf('워터멜론') > -1) // true
// console.log(fruitBasket.indexOf('오렌지') > -1) // true
// 배열.indexOf(값): 불리언

// 구문이 긴데? 재사용 가능한 함수로 작성해볼까요?
// 배열.indexOf(값): 불리언

// 1. 일반함수 예시
// function hasItem(array, value) {
//    return array.indexOf(value) > -1
// }

// 2. 화살표 함수 예시
// const hasItem = (array, value) => {
//    return array.indexOf(value) > -1
// }

// 3. 화살표 함수(축약) 예시
const hasItem = (array, value) => array.indexOf(value) > -1

console.log(hasItem(fruitBasket, '패션')) // 반환값: false
console.log(hasItem(fruitBasket, '오렌지')) // 반환값: true


// indexOf() 매서드 대신 includes() 매서드 활용
console.log(fruitBasket.includes('오렌지')) 
console.log(fruitBasket.includes('패션')) // 



// 객체 타입(함수, 배열, 객체) 은 indexOf() 로 판별 가능하지 않음
// 객체의 경우 메모리의 저장 주소가 다르기 때문에 indexOf 를 사용할 수 없다.
const 멋사14기_수강생 = [
  {이름: '이성은'},
  {이름: '김민지'},
  {이름: '신남일'},
]

// console.log(멋사14기_수강생.indexOf({이름: '이성은'})) // 1
console.log(멋사14기_수강생.findIndex(/* callback */(수강생) => console.log(수강생.이름 === '이성은')))// 1

console.log(멋사14기_수강생.findIndex(/* callback */(수강생) => {
  const 반환값 = 수강생.이름 === '이성은' // true of false
  return 반환값
}))// 1

멋사14기_수강생.findIndex((수강생) => 수강생.이름 === '이성은') // 0


