// ----------------------------------------
// 📌 캐러셀(Carousel) 컴포넌트 만들기
// --------------------------------------
// 1. 문서에서 제어할 대상 요소 선택(찾기)
;(() => {
  console.log('step 1')

  // 케러셀 컴포너트 찾기
  const carousel = document.querySelector('.carousel')

  // 케러셀 콘텐츠 레퍼
  const contentWarpper = carousel.querySelector('.carousel__contents')
  
  // 이전, 다음 탐색 버튼 찾기
  const preButton = carousel.querySelector(['[aria-label^="이전"]'])
  const nextButton = carousel.querySelector(['[aria-label^="다음"]'])
  


}) 

// 2. 상태 클래스 이름 상수로 설정
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  // 활성 상태를 나타내는 클래스 이름 지정 (유지 보수 고려)
  const SELECTED_CLASSNAME = 'is-selected'

})

// 3-1. 현재/다음 콘텐츠 탐색 | 다음 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')
  
  const SELECTED_CLASSNAME = 'is-selected'

  // 다음 탐색 버튼 클릭 이벤트 리스너 추가
  // 구현할 기능은 다음 콘텐츠 탐색
  // - 현재/다음 콘텐츠 탐색
  nextButton.addEventListener('click', () => {
    // console.log('다음 콘텐츠 탐색')

    // 현재 선택된 콘텐츠 찾기(Qeuring)
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    console.log(selectedContent)


    //  다음에 선택될 콘텐츠 탐색(Traversing)
    const nextContent = selectedContent.nextElementSibling
    console.log(nextContent)
  })

})

// 3-2. //3-1.다음 콘텐츠 탐색 | 다음 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')
  
  const SELECTED_CLASSNAME = 'is-selected'

  // 다음 탐색 버튼 클릭 이벤트 리스너 추가
  // 구현할 기능은 다음 콘텐츠 탐색
  // - 현재/다음 콘텐츠 탐색
  nextButton.addEventListener('click', () => {
    // console.log('다음 콘텐츠 탐색')

    // 현재 선택된 콘텐츠 찾기(Qeuring)
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    // 다음 콘텐츠로 이동
    // 다음 콘텐츠의 브라우저에 의해 계산된 너비 값을 읽기
    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    console.log(distance)

    // 콘텐츠들을 감싼 래퍼에 transform 인라인 스타일 설정 (예: -800px, -1600px)
    // contentWrapper.style.setProperty('transform', 'translateX(-'+ '800' +')')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')
    
    // console.log(contentWarpper.style)

  })

})


// 3-3. 선택된 상태 변경 | 다음 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling
    
    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    // 선택된 상태 변경
    // 이전 선택된 콘텐츠에서 활성 상태 클래스 이름 제거
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    // 현재 선택된 콘텐츠에 활성 상태 클래스 이름 추가
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

})

// 3-4. 선택된 상태 변경
;(() => {
  
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')
  
  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling
  
    // 다음 탐색 버튼 감춤
    // 1 | 2 | 3
    // if(!nextContent.nextElementSibling){
    //   console.log('다음에 표시될 콘텐츠는 존재하지 않아요')
    //   nextButton.hidden = true
    // }

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    // 현재 1 / 다음 2  / 다다음3  -> 다음 탐색 버튼 표시 Y
    // 현재 2 / 다음 3  / 다다음 null   -> 다음 탐색 버튼 표시 Y
 


    const distance = getComputedStyle(nextContent).getPropertyValue('left')

    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')
    
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

})

// 4-1. 현재/이전 콘텐츠 탐색 | 다음 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling
  

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')

    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')
    
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    
    // 현재 선택된 콘텐츠 찾기
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    // 선택된 콘텐츠의 이전 위치에 있는 콘텐츠 탐색
    const prevContent = selectedContent.previousElementSibling




  })

})

// 4-2. 이전 콘텐츠로 이동 | 이전 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    // 이전 콘텐츠로 이동
    // prevContent로부터 거리를 계산해서 가져와야 함
    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    // contentWrapper에 transform 스타일 지정
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

  })

})

// 4-3. 선택된 상태의 변경 | 이전 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    // 선택된 상태 변경
    // 이전 선택된 콘텐츠에서 활성 상태 클래스 이름 제거
    selectedContent.classList.remove(SELECTED_CLASSNAME)

    // 현재 선택된 콘텐츠에 활성 상태 클래스 이름 추가
    prevContent.classList.add(SELECTED_CLASSNAME)
  })

})

// 4-4. 이전 탐색 버튼 감춤 | 이전 탐색 기능(함수) 구현
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    // 이전 탐색 버튼 감춤
    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

})

// 5-1. 이전/다음 탐색 버튼 표시
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  nextButton.addEventListener('click', () => {
    // 사용자가 다음 탐색 버튼을 누르면
    // 이전 탐색 버튼의 hidden 속성 값이 true 인지 확인해서
    // 만약 그 값이 true 라면? hidden 속성 값을 false 로 변경해라
    if (prevButton.hidden === true) {
      console.log('이전 탐색 버튼의 hidden 값이 true 에요')

      // 다음 탐색 버튼의 hidden 속성 값을 false로 설정해라.
      prevButton.hidden = false
    }  

    
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
     
    // 이전 탐색 버튼을 사용자가 눌렀을 때
    // 만약 다음 탐색 버튼의 hidden 속성 값이 true 라면?
    if (nextButton.hidden === true) {
      console.log('다음 탐색 버튼의 hidden 값이 true 에요')

      // 다음 탐색 버튼의 hidden 속성 값을 false로 설정해라.
      nextButton.hidden = false
    }  


    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    // 이전 탐색 버튼 감춤
    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

})

// 5-2. 로딩 시, 이전 탐색 버튼 감춤 
;(() => {
  
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  // 로딩 시, 사용자가 보는 화면에서 이전 탐색 버튼 감춤
  prevButton.hidden = true

  nextButton.addEventListener('click', () => {

    if (prevButton.hidden === true) prevButton.hidden = false
  

    
    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
  
    if (nextButton.hidden === true) nextButton.hidden = false
    
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    // 이전 탐색 버튼 감춤
    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

})

// 5-3 로딩 시, 이전/다음 탐색 버튼 표시 설정
// - 사용자가 활성 상태 클래스 이름을 설정하지 않을 경우 경고
// - 첫 콘텐츠인 경우, 이전 탐색 버튼 감춤
// - 마지막 콘텐츠인 경우, 다음 탐색 버튼 감춤
;(() => {
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  // 문서에서 콘텐츠를 순회(루프, Loop)해서
  // 콘텐츠 중에 하나가 활성 상태 클래스 이름을 소유하고 있는 지 확인
  // 확인된 경우 활성(선택된) 상태의 인덱스를 변수에 기억해보자.

  // 활성 상태 인덱스를 기억할 변수를 정의하자
  let selectedIndex = -1

  // for 반복문 (모든 콘텐츠를 순환 활성 상태 확인)
  for (let i = 0, l = contents.length; i < l; ++i) {
    // 순환 중인 콘텐츠에 활성 상태 클래스 이름이 있는 지 확인
    // console.log('순환 중')

    if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
      // console.log(i + 1 + '번째 콘텐츠가 활성 클래스 이름을 가지고 있어요')
      selectedIndex = i
      // 활성 상태 클래스 이름을 가진 콘텐츠를 찾았으니 더 이상의 순환은 무의미하다!
      // 그러니 멈춰라!!
      break
    }
   
  }
  
  // - 사용자가 활성 상태 클래스 이름을 설정하지 않을 경우 경고
  // - 첫 콘텐츠인 경우, 이전 탐색 버튼 감춤
  // - 마지막 콘텐츠인 경우, 다음 탐색 버튼 감춤

  // 조건 처리
  // 활성 클래스를 가진 요소의 인덱스가 -1이면
  if (selectedIndex === -1) {
    console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
  } 
  // 활성 클래스를 가진 요소의 인덱스가 0이면
  else if (selectedIndex === 0) {
    // 이전 탐색 버튼을 화면에서 감춰라!
    prevButton.hidden = true
  }
  // 활성 클래스를 가진 요소의 인덱스가 모든 콘텐츠 갯수보다 1 작은 값이라면
  // 활성 클래스를 가진 요소가 맨 마지막 요소라면?
  else if (selectedIndex === contents.length - 1) {
    nextButton.hidden = true
  }
  
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

})


// 6. 버튼 숨겨진 상태 설정 기능(함수) 추출Add commentMore actions
;(() => {
  const carousel = document.querySelector('.carousel')
  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')
  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

  // 버튼 숨겨진 상태 설정 기능(함수)
  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

})

// 7-1. 인디케이터 | 인디케이터
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  // 인디케이터 래퍼 요소 찾기
  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  // 인디케이터 요소 찾기
  const indicators = carousel.querySelectorAll('.carousel__indicators')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

})

// 7-2. 인디케이터 집합을 순환해 이벤트 리스너 추가 | 인디케이터
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = carousel.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })

  // 인디케이터 집합을 순환 처리
  for (const indicator of indicators) {
    // 각 인디케이터에 이벤트 리스너 추가
    indicator.addEventListener('click', () => {
      console.log(indicator)

    })
  }


  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

})


// 7-3. 탐색한 콘텐츠 찾기 | 인디케이터
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = carousel.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })


  for (const indicator of indicators) {
  indicator.addEventListener('click', () => {
    let selectedIndex

    for(let i = 0, l = indicators.length; i < l; i += 1) {
      // 순환 중인 상태의 인디케이터와 클릭한 인디케이터가 동일한가?
      if(indicators.item(i) === indicator) {
        // 동일하다면? 그 인덱스가 선택된 인덱스이다.
        selectedIndex = i 
        break
      }
    }

    // 사용자가 클릭한(선택한) 인디케이터의 선택된 인덱스 값 찾기
    console.log(indicator, selectedIndex)

  })
}


  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

}) 


// 7-4. 탐색한 콘텐츠 찾기 | 인디케이터
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = carousel.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })


  for (const indicator of indicators) {
  indicator.addEventListener('click', () => {
    let selectedIndex

    for(let i = 0, l = indicators.length; i < l; i += 1) {
      if(indicators.item(i) === indicator) {
        selectedIndex = i 
        break
      }
    }

    // 탐색한(사용자가 선택한 인디케이터의 인덱스) 콘텐츠 찾기
    const activeContent = contents.item(selectedIndex)
    console.log(activeContent)

  })
}


  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

}) 


// 7-5. 탐색한 콘텐츠로 전환(이동) | 인디케이터
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = carousel.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })


  for (const indicator of indicators) {
  indicator.addEventListener('click', () => {
    let selectedIndex

    for(let i = 0, l = indicators.length; i < l; i += 1) {
      if(indicators.item(i) === indicator) {
        selectedIndex = i 
        break
      }
    }

    const activeContent = contents.item(selectedIndex)
    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance + ')')
  })
}

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

}) 



// 7-6. 선택된 콘텐츠 상태 변경 | 인디케이터
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = carousel.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })


  for (const indicator of indicators) {
  indicator.addEventListener('click', () => {
    let selectedIndex

    for(let i = 0, l = indicators.length; i < l; i += 1) {
      if(indicators.item(i) === indicator) {
        selectedIndex = i 
        break
      }
    }

    const activeContent = contents.item(selectedIndex)
    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance + ')')

    // 선택된 콘텐츠 상태 변경
    // 이전에 선택된 콘텐츠 찾기

    // 선택된 콘텐츠 상태 변경
    // 이전에 선택된 콘텐츠 찾기
    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)

    // 이전 선택된 콘텐츠에 활성 클래스 이름 제거
    selectedContent.classList.remove(SELECTED_CLASSNAME)

    // 현재 선택된 콘텐츠에 활성 클래스 이름 추가
    activeContent.classList.add(SELECTED_CLASSNAME)

  })
}

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

}) 


// 7-7. 인디케이터 상태 변경 | 인디케이터
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = carousel.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
    if(prevButton.hidden) prevButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling

    if(!nextContent.nextElementSibling) nextButton.hidden = true

    const distance = getComputedStyle(nextContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })


  for (const indicator of indicators) {
  indicator.addEventListener('click', () => {
    let selectedIndex

    for(let i = 0, l = indicators.length; i < l; i += 1) {
      if(indicators.item(i) === indicator) {
        selectedIndex = i 
        break
      }
    }

    const activeContent = contents.item(selectedIndex)
    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance + ')')

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    activeContent.classList.add(SELECTED_CLASSNAME)

    // 이전 선택된 인디케이터 찾기
    const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)

    // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    
    // 현재 선택된 인디케이터에 활성 클래스 이름 추가
    indicator.classList.add(SELECTED_CLASSNAME)

  })
}

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

})


// 8-1. 다음 탐색 동기화 | 상태 동기화
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = carousel.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
  if(prevButton.hidden) prevButton.hidden = false

  const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
  const nextContent = selectedContent.nextElementSibling

  if(!nextContent.nextElementSibling) nextButton.hidden = true

  const distance = getComputedStyle(nextContent).getPropertyValue('left')
  contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

  selectedContent.classList.remove(SELECTED_CLASSNAME)
  nextContent.classList.add(SELECTED_CLASSNAME)

  // 사용자가 다음 탐색 버튼을 누르면
  // 인디케이터 중에 현재 활성 상태인 것을 찾기
  const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)
  const nextIndicator = selectedIndicator.nextElementSibling
  
  // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
  selectedIndicator.classList.remove(SELECTED_CLASSNAME)

  // 다음 선택될 인디케이터에 활성 클래스 이름 추가
  nextIndicator.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
    if (nextButton.hidden) nextButton.hidden = false

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    const prevContent = selectedContent.previousElementSibling

    if (!prevContent.previousElementSibling) prevButton.hidden = true

    const distance = getComputedStyle(prevContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

    selectedContent.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

  })


  for (const indicator of indicators) {
  indicator.addEventListener('click', () => {
    let selectedIndex

    for(let i = 0, l = indicators.length; i < l; i += 1) {
      if(indicators.item(i) === indicator) {
        selectedIndex = i 
        break
      }
    }

    const activeContent = contents.item(selectedIndex)
    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance + ')')

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    activeContent.classList.add(SELECTED_CLASSNAME)

    // 이전 선택된 인디케이터 찾기
    const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)

    // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    
    // 현재 선택된 인디케이터에 활성 클래스 이름 추가
    indicator.classList.add(SELECTED_CLASSNAME)

  })
}

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

}) 


// 8-2. 이전 탐색 동기화 | 상태 동기화
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = carousel.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
  if(prevButton.hidden) prevButton.hidden = false

  const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
  const nextContent = selectedContent.nextElementSibling

  if(!nextContent.nextElementSibling) nextButton.hidden = true

  const distance = getComputedStyle(nextContent).getPropertyValue('left')
  contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

  selectedContent.classList.remove(SELECTED_CLASSNAME)
  nextContent.classList.add(SELECTED_CLASSNAME)


  const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)
  const nextIndicator = selectedIndicator.nextElementSibling
 
  selectedIndicator.classList.remove(SELECTED_CLASSNAME)
  nextIndicator.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
  if (nextButton.hidden) nextButton.hidden = false

  const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
  const prevContent = selectedContent.previousElementSibling

  if (!prevContent.previousElementSibling) prevButton.hidden = true

  const distance = getComputedStyle(prevContent).getPropertyValue('left')
  contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

  selectedContent.classList.remove(SELECTED_CLASSNAME)
  prevContent.classList.add(SELECTED_CLASSNAME)

  // 사용자가 이전 탐색 버튼을 누르면
  // 인디케이터 중에 현재 활성 상태인 것을 찾기
  const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)
  const prevIndicator = selectedIndicator.previousElementSibling
  
  // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
  selectedIndicator.classList.remove(SELECTED_CLASSNAME)

  // 현재 선택될 인디케이터에 활성 클래스 이름 추가
  prevIndicator.classList.add(SELECTED_CLASSNAME)
  })


  for (const indicator of indicators) {
  indicator.addEventListener('click', () => {
    let selectedIndex

    for(let i = 0, l = indicators.length; i < l; i += 1) {
      if(indicators.item(i) === indicator) {
        selectedIndex = i 
        break
      }
    }

    const activeContent = contents.item(selectedIndex)
    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance + ')')

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    activeContent.classList.add(SELECTED_CLASSNAME)

    // 이전 선택된 인디케이터 찾기
    const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)

    // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    
    // 현재 선택된 인디케이터에 활성 클래스 이름 추가
    indicator.classList.add(SELECTED_CLASSNAME)

  })
}

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

}) 


// 8-3. 이전/다음 탐색 버튼 표시 동기화 | 상태 동기화
;(() => {
  const carousel = document.querySelector('.carousel')

  const contentWrapper = carousel.querySelector('.carousel__contents')
  const contents = contentWrapper.querySelectorAll('.carousel__content')

  const indicatorWrapper = carousel.querySelector('.carousel__indicators')
  const indicators = carousel.querySelectorAll('.carousel__indicator')

  const prevButton = carousel.querySelector('[aria-label^="이전"]')
  const nextButton = carousel.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  settingUpButtonHiddenStatus()
  
  nextButton.addEventListener('click', () => {
  if(prevButton.hidden) prevButton.hidden = false

  const selectedContent = contentWrapper.querySelector('.' + SELECTED_CLASSNAME)
  const nextContent = selectedContent.nextElementSibling

  if(!nextContent.nextElementSibling) nextButton.hidden = true

  const distance = getComputedStyle(nextContent).getPropertyValue('left')
  contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

  selectedContent.classList.remove(SELECTED_CLASSNAME)
  nextContent.classList.add(SELECTED_CLASSNAME)


  const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)
  const nextIndicator = selectedIndicator.nextElementSibling
 
  selectedIndicator.classList.remove(SELECTED_CLASSNAME)
  nextIndicator.classList.add(SELECTED_CLASSNAME)

  })

  prevButton.addEventListener('click', () => {
  if (nextButton.hidden) nextButton.hidden = false

  const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
  const prevContent = selectedContent.previousElementSibling

  if (!prevContent.previousElementSibling) prevButton.hidden = true

  const distance = getComputedStyle(prevContent).getPropertyValue('left')
  contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')

  selectedContent.classList.remove(SELECTED_CLASSNAME)
  prevContent.classList.add(SELECTED_CLASSNAME)

  // 사용자가 이전 탐색 버튼을 누르면
  // 인디케이터 중에 현재 활성 상태인 것을 찾기
  const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)
  const prevIndicator = selectedIndicator.previousElementSibling
  
  // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
  selectedIndicator.classList.remove(SELECTED_CLASSNAME)

  // 현재 선택될 인디케이터에 활성 클래스 이름 추가
  prevIndicator.classList.add(SELECTED_CLASSNAME)
  })


  for (const indicator of indicators) {
  indicator.addEventListener('click', () => {
    let selectedIndex

    for(let i = 0, l = indicators.length; i < l; i += 1) {
      if(indicators.item(i) === indicator) {
        selectedIndex = i 
        break
      }
    }

    // selectedIndex 값이 처음(0)일 때 
    // -> prevButton 숨긴다, nextButton 보인다
    if (selectedIndex === 0) {
        prevButton.hidden = true
        nextButton.hidden = false
      }

      // selectedIndex 값이 마지막 인덱스(indicators.length -1)일 때 
      // -> prevButton 보인다, nextButton 숨긴다Add commentMore actions
      else if (selectedIndex === indicators.length -1) {
        prevButton.hidden = false
        nextButton.hidden = true
      }

      // 둘 다 아닐 때
      // -> prevButton, nextButton 둘 다 보인다
      else {
        prevButton.hidden = false
        nextButton.hidden = false
      }

    const activeContent = contents.item(selectedIndex)
    const distance = getComputedStyle(activeContent).getPropertyValue('left')
    contentWrapper.style.setProperty('transform', 'translateX(-'+ distance + ')')

    const selectedContent = contentWrapper.querySelector('.'+SELECTED_CLASSNAME)
    selectedContent.classList.remove(SELECTED_CLASSNAME)
    activeContent.classList.add(SELECTED_CLASSNAME)

    
    const selectedIndicator = indicatorWrapper.querySelector('.'+SELECTED_CLASSNAME)
    selectedIndicator.classList.remove(SELECTED_CLASSNAME)
    indicator.classList.add(SELECTED_CLASSNAME)

  

  })
}

  function settingUpButtonHiddenStatus() {
    let selectedIndex = -1

    for (let i = 0, l = contents.length; i < l; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i
        break
      }
    }
    
    if (selectedIndex === -1) {
      console.warn('어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다.')
    } else if (selectedIndex === 0) {
      prevButton.hidden = true
    } else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true
    }
  }

}) ()


