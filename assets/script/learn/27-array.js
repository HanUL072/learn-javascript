// -------------------------------------------------
// 📌 배열(Array) 객체
// -------------------------------------------------

// 배열 리터럴로 배열 만들기 (배열 생성)
const shoppingCart = ['두부', '양파', '대파', '부추', '계란']
//                       0  ,   1   ,  2  ,    3   ,  4
console.log('장바구니 =', shoppingCart)

const shoppingCartCount = shoppingCart.length

console.log('장바구니 항목 갯수 = ',shoppingCartCount)

// 리터럴 방식 말고, 정석적인 방법으로 배열 객체 생성
// const numbers = new Array('one', 'two', 'three', 'four', 'five')
const numbers = Array('one', 'two', 'three', 'four', 'five')


console.log(numbers, numbers.length)