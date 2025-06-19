// -------------------------------------------------------------------
// 📌 루프 (Loop)
// -------------------------------------------------------------------

// let count = 0
// const draw = () => {
//   // count = count + 1 // 0 + 1 = 1
//   // console.log('도화지에 ' + count + '번 그림을 그리다.')
//   console.count('도화지에 그림을 그린 횟수')
// }

// draw()
// draw()
// draw()
// draw()
// draw()

// const numbers = [100, 99, 98, 97]
// console.log(numbers)


// ---------------------------------------------------------------
// if 문 vs. while 문
// let wantToDraw = true

// 조건문
// 조건이 참이면 블록 내부의 코드 한 번 수행
// if (wantToDraw) {
//   console.log('if문')
//   draw()
// }

// 루프(반복)문 
// 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
// 특정 상황(조건) 설정
// let i = 10

// while (wantToDraw) {
//   console.log('while문')
//   draw()

//   // 특정 상황이 일치되는 경우
//   // 조건을 거짓으로 만들께요! (멈춤)
//   // wantToDraw = !wantToDraw
//   if (i-- <= 0) { // 현재 라인 기준 - 선감소(--i): i = 9  / 후감소(i--): i = 10
//     wantToDraw = false
//     console.log('i =', i, 'wantToDraw =', wantToDraw)
//   } else{
//     // i = i - 1 
//     // i -= i // 10 = 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1

//     // 후감소
//     i--
  
//    // 선감소
//   //  --i
//     console.log('i =', i)
//   }
  
// }


// ---------------------------------------------
// 사용자 입력 검증(while)
// while 문을 사용해 사용자 입력을 검증해봅니다.
// "1부터 10까지 숫자를 입력하세요."

// window.prompt('message')
// Number.praseInt(value, ?radix)
// Number.isNaN(value)

// let userInput = prompt("1부터 10까지 숫자를 입력하세요.")
// userInput = Number.parseInt(userInput, 10)
// console.log(userInput + 10, typeof userInput)

let userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요.", 10))

while (Number.isNaN(userInput) || userInput < 1 || userInput > 10){
  // [2] if 문 없이 : 
  // //console.error('입력 값이 1부터 10까지 숫자여야 합니다.'))
   userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요.", 10))
  
  // [1] if 문 사용 예시 
   if (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
      console.error('입력 값이 1부터 10까지 숫자여야 합니다.')
   }
}

console.log('사용자가 입력한 값은 ', + userInput + '입니다.' )

