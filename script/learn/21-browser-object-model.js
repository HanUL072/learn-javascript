// -----------------------------------------------------------------
// 📌 BOM (브라우저 오브젝트 모델)
// --------------------------------------------------------------------

// 브라우저 윈도우 객체
// console.log(window) // Window {} === html

// 모니터 스크린 객체
// console.log(window.screen) // Screen {}
// console.log(screen) // Screen {} === body //css 의 바로지정 스타일 처럼 window. 생략 가능

// 로케이션 객체
// console.log(window.location) //Location {}
// console.log(location) // Location {}

// 주소창의 정보값 데이터를 가져올 수 있다.
// console.log(location.port)
// console.log(location.href)

// 히스토리 객체
// console.log(window.history) //History {}
// console.log(history) // History {}

// 도큐멘트 객체
// console.log(window.document) // Document
// console.log(document) // Document


// ------------------------------------------------------------------
// 📌 DOM (문서 객체 모델)
// ------------------------------------------------------------------

console.log(document) // 브라우저 객체 중 도큐먼트 객체
console.log(document.compatMode) // 웹 표준 호환 모드인지 확인
console.log(document.activeElement) // 초점(focus) 이 주어진 엘리먼트 (웹 접근성)