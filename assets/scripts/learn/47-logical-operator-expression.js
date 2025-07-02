// ---------------------------------------------------------
// 📌 논리 연산자 식을 활용해 조건 처리
//     && "그리고(AND)"
//     || "또는(OR)"
// -----------------------------------------------------------

;(() => {
  
  let isLightGreen = false
  let noCarsAround = false

  if (isLightGreen || noCarsAround) {
    // 신호등 불빛이 초록불이거나, 주변에 차가 없다면? 건너라.
    walk()
  } else {
    // 그렇지 않다면? 멈춰라.
    stop()
  }

  function walk() {
    console.log('건너라.')
  }

  function stop() {
    console.log('멈춰라.')
  }

})

// && 논리 연산자 (AND)
;(() => {

  let x, y

  x = '엑-스' // [true] or false -> Truthy
  y = NaN // true or [false] -> Falsy of Falsey
  // z = Math.random() > 0.5 // true of false -> ???

  // && 연산자는 첫번째 Falsey(거짓으로 평가되는) 값을 찾는다.
  // 즉, 거짓으로 끝날경우 다음으로 넘어가지 않고 그 즉시 거짓값을 반환
  console.log(1, x && y) 
  console.log(2, y && x) 

  // 논리 연산자 사용한 식
  // 논리 연산자식을 사용해서 함수를 실행한다, 실행하지 않는다 간단한 경우 트리거 가능
  let result1 = x && play() // x가 참이면? play() 함수 실행 (이유: && 연산자는 첫번째 거짓으로 평가되는 값을 찾으니까)
  let result2 = y && study() // y가 참이면? study() 함수 실행 (반대로 말하면 y가 거짓이면, 함수 실행은 없다.)

  console.log('1', result1)
  console.log('2', result2)

  function study() {
    return '우리는 함꼐 공부한다.'
  }

  function play() {
    return '우리는 다같이 논다.'
  }
})

// || 논리 연산자 (OR)
;(() => {

  const user = {
    name: '성은',
    email: 'dbstjrals125@naver.com',
    isSigned: !true,
  }

  // 조건문 (if...else 문)
  if (!user.isSigned) {
    signIn()
  } else {
    signOut()
  }

  // if (user.isSigned) signOut()
  // else signIn()

  // ------------------------------

  // 조건식 (3항 연산자 표현식)
  user.isSigned ? signOut() : signIn()
  
  // -----------------------------
  // 논리 연산자 식 (&&, ||)

  // user.inSigned // true of [false]
  // || 연산자는 첫번째 Truthy 값을 찾는다. (&& 연산자의 반대)
  user.isSigned || signIn()
  // && 연산자는 첫번째 Falsey 값을 찾는다. (|| 연산자의 반대)
  user.isSigned && signOut()

  function signIn() {
    console.log('로그인되었습니다.') 
  }

  function signOut() {
    console.log('로그아웃되었습니다.') 
  }

})()