// ---------------------------------------------------
// 실습
// -----------------------------------------------------

// 1.빈 객체를 정의합니다.
kbo = {}

// 2.점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
kbo.KIA = '기아 타이거즈'
console.log(kbo)

// 3.대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
kbo['삼성'] = '삼성 라이온즈'
console.log(kbo)


// 4.점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
kbo.KIA = '기아 타이거즈으'
console.log(kbo)

// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
kbo['삼성'] = '삼성 라이온즈으'
console.log(kbo)

// 6.객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
kbo.getPlayer = function() {
  return '김도영'
}

console.log(kbo.getPlayer)
console.log(kbo.getPlayer())

// 7.객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.
kbo.getRanking = function(unit) {
  return '1' + unit
}

console.log(kbo.getRanking)
console.log(kbo.getRanking('위'))

// 8. 객체의 속성 중 하나를 선택해, 삭제해보세요.
console.log(kbo)
delete kbo['삼성']
console.log(kbo)
kbo.getPlayer = '나성범'
console.log(kbo)