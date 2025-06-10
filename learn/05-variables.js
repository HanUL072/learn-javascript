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

// ----------------------------------------------------------------
// let 변수 vs. var 변수

// 블록 스코프(block scope)
// {
//     var myName 
//     console.log(1, myName)

//     myName = 'Seong9'
//     console.log(2, myName)
// }


// myName = 'seong9'
// console.log(3, myName)


// {
//     var myName
//     console.log(1, myName)

//     myName = 'yamoo9'
//     console.log(2, myName)
// }

// myName = 'y9'
// console.log(3, myName)

// {
//     let myName2
//     console.log(1, myName2)

//     myName2 = 'yamoo9'
//     console.log(2, myName2)
// }

// myName2 = 'y9'
// console.log(3, myName2)

// -----------------------------------------------------------------------------
// let 변수 vs. const 변수(상수)
// - 변수 = 시간의 흐름에 따라 값이 변경됨
// - 상수 = 처음 선언시, 할당된 후 값이 이후 변경되지 않음


// -----------------------------------------------------------------------------

//1. `const` 키워드를 사용해 값이 변하지 않는 상수를 선언해봅니다.
    //1. "하루는 24시간"
    const day = 24
    //2. "물의 어는 점은 섭씨 0도"
    const frezzing = 0
    //3. "삼각형 내각의 합은 180도"
    const angles = 180
    //4. "지구의 중력 가속도는 9.8 m/s²"
    const gravitational = 9.8

//2. 다음 내용을 코드로 작성해 결과 값을 콘솔 패널에 출력해보세요.
    //1. `let` 키워드를 사용해 `sum` 변수를 선언하고 값을 `0`으로 설정합니다.
    // let sum = 0
    //2. `num1`, `num2` 변수를 선언하고, 각각 `300`, `50`으로 값을 설정합니다.
    let num1 = 300
    console.log(1, num1)
    let num2 = 50
    console.log(2, num2)
   // 3. `num1`, `num2`의 합을 `sum` 변수에 할당합니다.
   let sum = num1 + num2
   console.log(3, sum)
//3. 사람 이름, 나이, 오늘의 기온, 장바구니 상품 갯수, 집 주소, 현재 시간,
//로그인 상태, 피자 가격, 학생 수 등에 걸맞는 변수 이름을 정하고 적절한 값을 설정합니다.
let name = 'mina'
console.log(name)

const year = 18
console.log(year)

let temperature = 25
console.log(temperature)

let adress = 'Anseong'
console.log(adress)