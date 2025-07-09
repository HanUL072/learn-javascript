// ------------------------------------------------------------
// 📌 DOM에 요소 추가
// --------------------------------------------------------------

// 요소 동적 생성 (dynamic create element node)
;(() => {

  // 동적 생성된 요소들을 마운트 할 부모요소
  const mountElement = document.querySelector('.mount')
  
  // <section> 요소 생성
  const sectionElement = document.createElement('section')
  // 생성된 요소에 클래스 이름 설정(추가)
  sectionElement.classList.add('sectioning-content')
  // 커스텀 속성 설정(추가)
  sectionElement.dataset.category = 'sports'
  // 텍스트 콘텐츠 추가
  sectionElement.textContent = '스포츠는 역시 멋사!'
  // HTML 콘텐츠 추가(덮어쓰기)
  sectionElement.innerHTML = `<h2>${sectionElement.textContent}</h2>`
  console.log(sectionElement)

  // DOM에 추가(삽입)
  // const mountElement = document.querySelector('.mount')
  // 요소를 부모 요소의 마지막 자식으로 추가(append child)
  mountElement.appendChild(sectionElement)
  

   // <table> 요소 생성
  const tableElement = document.createElement('table')
  // 생성된 요소에 클래스 이름 설정(추가)
  tableElement.className = 'KBO'
  // 커스텀 속성 설정(추가)
  tableElement.setAttribute('data-presentation', 'true')
  // 표 제목 텍스트 콘텐츠 추가
  tableElement.textContent = '기아타이거즈 화이팅!'
  // 표 제목 HTML 콘텐츠 추가(덮어쓰기)
  tableElement.innerHTML =`<caption>${tableElement.textContent}</caption>`
  
  console.log(tableElement)

  // DOM에 추가(삽입)ㅇ
  // 요소를 부모 요소의 마지막 자식으로 추가(append child)
  mountElement.appendChild(tableElement)
})()