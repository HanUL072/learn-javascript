// ---------------------------------------------------------------
// 📌 배열의 reduce() 메서드
// - 누산 : 이미 계산한 결과에 수치를 계속하여 더하여 계산함. 또는 그런 합계.
// ---------------------------------------------------------------

// reduce() 메서드
;(() => {
  
  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  let initialValue = 0

  // reduce() 메서드를 사용해 만든 sum() 함수
  const total = numbers.reduce(
    (
    prevValue, 
    currentValue, 
    // currentIndex, 
    // array
    ) => {
      // prveValue = 0 | 0 + 1 | 1 + 2 | 3 + 3 | 6 + 4 | ...
      // currentValue = 1 | 2 | 3 | 4 | ...
      // currentIndex = 0 | 1 | 2 | 3 | ...
      // array = numbers
      const nextValue = prevValue + currentValue
      return nextValue  
    }, 
    initialValue
  )
  console.log(total)


  // 추가설명
   const 숫자들 = [1, 2, 3]
   
   let 초깃값 = 5
   
   const 콜백 = (이전누산값, 현재값/* , 현재인덱스, 배열 */) => {
     const 누산된값 = 이전누산값 + 현재값
     return 누산된값
   }
   
   const 총합계 = 숫자들.reduce(콜백, 초깃값)
   
   console.log(총합계)

  // for문을 사용해 만든 sum() 함수
})

// sum() 함수 만들기 : for 문 vs. reduce() 메서드
;(() => {
  const numbers = [2, 4, 6, 8, 12]

  let totalForValue = sumFor(...numbers)
  console.log({totalForValue})

  let totalReduceValue = sumReduce(...numbers)
  console.log({totalReduceValue})
  
  // for문 사용해 만든 sum() 함수
  function sumFor(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) total += numbers[i]
    return total
  }

  // reduce() 메서드를 사용해 만든 sum() 함수
  function sumReduce(...numbers) {
    return numbers.reduce((total, number) => total + number, 0)
  }

})()