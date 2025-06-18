// -------------------------------------------------
// 📌 배열(Array) 객체
// -------------------------------------------------

// 배열 리터럴로 배열 만들기 (배열 생성)
const 장바구니 = ['두부', '양파', '대파', '부추', '계란']
//                       0  ,   1   ,  2  ,    3   ,  4
console.log('장바구니 =', 장바구니)

// const shoppingCartCount = shoppingCart.length
// console.log('장바구니 항목 갯수 = ',shoppingCartCount)

// 리터럴 방식 말고, 정석적인 방법으로 배열 객체 생성
// const numbers = new Array('one', 'two', 'three', 'four', 'five')
const numbersEn = Array('one', 'two', 'three', 'four', 'five')


console.log(numbersEn, numbersEn.length)


// new Array() 를 사용해 배열 객체를 생성할 때 발생할 수 있는 문제점
// const messageList = ['hello', 'goodmorning'] // 2 
// console.log(messageList)

// const numbers = new Array(1, 2, 3)  // [1, ,2, 3]
// console.log(numbers)

// const onlyOneNumberList = [99]
const onlyOneNumberListLiteral = [99]
console.log(onlyOneNumberListLiteral.length) // 기대 값: [99] / 결과 값: ?

// 2번 보단 1번처럼 쓰는것이 낫다 (:숫자값을 하나만 넣었을 때 문제 발생)
const onlyOneNumberList = new Array(99)
console.log(onlyOneNumberList.length) // 기대 값: [99] / 결과 값: [empty x 99]




// 배열은 객체다.
// 객체의 조건은 속성:값을 가진다


// 배열의 인덱스(index)는 숫자 타입이다.
// [
//  0 : 값1,
//  1 : 값2,
//  2 : 값3,
//  3 : 값4,
// ]

// 객체['속성명'] -> 값
// 배열객체[인덱스(숫자)] -> 값

// 배열객체.속성
// 배열객체.메서드()




// 대괄호에 인덱스를 전달해 배열 항목 가져오기
const fistCartItem = 장바구니[장바구니.length -1]
let secondFromTheEndItem = 장바구니[장바구니.length -2] 
let lastCartItem = 장바구니[장바구니.length -1]
console.log(fistCartItem, secondFromTheEndItem, lastCartItem)

// .at() 메서드에서 인덱스를 전달해 배열 항목 가져오기
// 끝에서 가져올 때 at 을 사용하면 편함
let fistCartItem2 = 장바구니.at(0)
let secondFromTheEndItem2 = 장바구니.at(-2)
let lastCartItem2 = 장바구니.at(- 1)
console.log(fistCartItem2, secondFromTheEndItem2, lastCartItem2)

