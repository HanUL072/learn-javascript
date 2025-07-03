// --------------------------------------------------------------
// 📌 향상된 객체 리터럴 (Enhanced Object Literals)
// ----------------------------------------------------------------

// 속성 할당 단축
;(() => {

  const nickname = '야무'
  const phone = 'Gallaxy'

  // nickname, phone 변수 값을 객체 속성 값으로 할당하고자 한다.
  const instructor = { nickname, phone}
  console.log(instructor)

})


// 매서드 단축
;(() => {

  const instructor = { 
    nickname: '야무', 
    phone: '갤럭시',
    location: '서울',
    instruction: function() {
      console.log(this)
      // console.log(this.location)

      // this : 상위 scope 의 this 를 가리킴, 화살표 함수를 사용하면 window 를 가리킴 (쓰지마)
      // 2015년 부터 해당 문법을 사용할 수 있게 됨 : 매서드 단축
      let { nickname: name, phone, location } = this  
      console.log(name, phone, location)
    }  
  }
  instructor.instruction()
  
})


// 계산된 속성 이름
// 속성이 변수명과 동일하다면 생략 가능 (매서드도 마찬가지)
;(() => {

  let methodName = 'computedProperty'
  let property = 'currentTime'

  const o = {
    [property]: '00:09:21',
    [methodName]() {
      console.log(`${methodName} time =`, this.currentTime)
      // 2015년 부터 이러한 표기법이 사용가능해짐
      // console.log('record time =', this.currentTime)
    }
  }

  // o.record()
  o[methodName]()

  console.log(o.currentTime)
  console.log(o[property])
  
// 객체 속성에 접근하는 표기법
// - 점(.) 문법
// - 대괄호([]) 문법

// o.record()
// o['record']()
 


})()


