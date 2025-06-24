/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 📌 유틸리티 함수 만들기
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// getStyle(element, propertyName, ?pseudoElement): propertyValue
function getStyle(element, propertyName, pseudoElement) {
  const elementStyles = getComputedStyle(element, pseudoElement)
  const propertyValue = elementStyles.getPropertyValue(propertyName)
  return propertyValue
}

// --------------------------------------------------------------------------
// setStyle(element, propertyName, propertyValue): element
function setStyle(element, propertyName, propertyValue) {
  // 요소에 스타일 적용(쓰기)
  element.style.setProperty(propertyName, propertyValue)
  return element
}


// --------------------------------------------------------------------------
// css(element, propertyName, ?propertyValue): element
