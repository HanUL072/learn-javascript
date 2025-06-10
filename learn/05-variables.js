//변수(Variables)

// ---------------------------------------------------------
// 의미없는 코드
// ---------------------------------------------------------
//4 + 27 = 31
//console.log(31)
//console.log(4 + 27) //non-semantic

// ---------------------------------------------------------
// 의미있는 코드
// ---------------------------------------------------------

// 처음 가진 사과의 갯수 = 4
// 변수 선언 및 값 할당
//let 처음_가진_사과의_갯수 = 4
//console.log('처음_가진_사과의_갯수 = ', 처음_가진_사과의_갯수) //4
let $initialApples = 4 // camelCase 
console.log('initialApples = ', $initialApples )
// let initial_apples = 4 // sneakCase
// console.log('initial_apples = ', initial_apples ) 

//수업은 camelCase 로 진행

// 잘못된 변수이름
// 공백(' ') 안돼요!
// let initial apples[x]
// 첫 글자가 숫자 안돼요!
// let 4people = '4명의 친구들' [x]
// 예약어(ex. if, for, while, function) 안돼요!
// let return = '회귀' - becuase 예약어 [x]
// 하이픈(-) 기호 안돼요!
// let dark-impact = '다크 임팩트' [x]

// 추가로 구매한 사과의 갯수 = 27
//let 추가로_구매한_사과의_갯수 = 27


// 변수 선언 및 값 할당
let addBuyApples //기본값 (undefined)
// let addBuyApples = undefined (암묵적)
console.log('addBuyApples =', addBuyApples) //undefined

//선언된 변수에 값 할당
addBuyApples = 27
console.log('addBuyApples =', addBuyApples) //undefined → 27

//console.log('추가로_구매한_사과의_갯수 = ', 추가로_구매한_사과의_갯수) //27

// 현재 내가 가진 사과의 갯수 = 31
//let 현재_내가_가진_사과의_갯수 = 처음_가진_사과의_갯수 + 추가로_구매한_사과의_갯수
//console.log('현재_내가_가진_사과의_갯수 = ', 현재_내가_가진_사과의_갯수) // 31

// let 변수 vs. var 변수
// let 변수 vs. const 변수(상수)