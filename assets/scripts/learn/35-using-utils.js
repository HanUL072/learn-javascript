/* eslint-disable no-unused-vars, no-undef */

{
  const tester = document.querySelector('h1')
  
  // 유틸리티 함수를 사용해서 요소 스타일 읽기
  const contentValue = getStyle(tester, 'content', '::before')
  // console.log(contentValue)

  // 유틸리티 함수를 사용해서 요소 스타일 쓰기
  const resultElement = setStyle(tester, 'color', '#910038')
  // console.log(tester === resultElement) // true
}

// ---------------------------------------------------------------------
// css(element, propertyName, ?propertyValue): element