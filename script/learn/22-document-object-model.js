// --------------------------------------------
//  📌 DOM (문서 객체 모델)
// - 문서 요소 선택(접근)하는 함수들 (Web APIs)
// -----------------------------------------------

// Document.getElementsByTegName(tagName) //<a>
// console.log(document.getElementsByTagName('li'))


// Document.getlemenById(idName) //태그의 id 에 접근

// 이것만 했을 땐 null 이 뜨는데 해당 자바스크립트 를 html 에 연결 할때 type="module" 하면 됨
// 이유: html 에서 script 를 연결 하면 <body> 영역의 문서를 읽지 않음 , 그래서 불러왔을 때 null 이 뜸
// 여기서 type="module" 을 붙이면 <body> 의 끝자락에서 실행되는 효과를 줌//

// id 는 책임질 수 있을 때 부여하자. (권장 안함)

// const emailInput = document.getElementById('useremail') // const 이유  = id 는 하나만 존재하는 변하지 않는 값
// console.log(emailInput)

// let 내맘대로요소 = document.getElementById('내맘대로')
// console.log(내맘대로요소)


// Document.getElementsByName(name) // 속성 name 값 
// console.log(document.getElementsByName('email')) 


// 주로 사용되는 건 getElementById() // but, 남용금물




// Document.getElementsByClassName(className) // class 값
// const items = document.getElementsByClassName('item')
// console.log(items)



const elementById = document.querySelector('#useremail')
// console.log(elementById)

const elementByName = document.querySelector('[name="email"]')
// console.log(elementByName)

const firstElementByClassName = document.querySelector('.item')
// console.log(firstElementByClassName)

const elementByTagName = document.querySelector('h1')
console.log(elementByTagName)

