const exorcists = document.getElementById('exorcist-characters')

const choi = exorcists.querySelector('.master-choi')
const villain = exorcists.querySelector('[data-type="villain"]')


// Element.classList -> DOMTokenList { add, remove, contains, item, replace, toggle }

// let firstClassName = choi.classList.item(0)
// let lastClassName = choi.classList.item(1)
// console.log('firstClassName =', firstClassName)
// console.log('lastClassName =', lastClassName)

// 토글 전
console.log('1. choi.classList.value의 아이템 갯수 =', choi.classList.length)

// 클래스 이름 토글
choi.classList.toggle('charactor-is-active')

// 토글 후
console.log('2. choi.classList.value의 아이템 갯수 =', choi.classList.length)

// let activeClassName = 'charactor-is-active'
// if (!choi.classList.contains(activeClassName)) {
//   choi.classList.add(activeClassName)
// } else {
//   choi.classList.remove(activeClassName)
// }

// 오늘날 주로 쓰는 방법(NEW)
{
  // choi.classList.add('active')
  // // console.log(choi.classList.value)
  // choi.classList.remove('master-choi')
}


// 이전 시대의 방법(OLD)
// {
// // 문서 객체 속성 읽기
// // console.log(choi.className)

// // 문서 객체 속성 수정
// // choi.className = choi.className + ' active'
// choi.className += ' active'

// // x = x + 15
// // x += 15

// // 문서에 나오는 방식은 세련된 방법, 지금 코드로 배우는 방법은 좀 오래된 방법
// // 왜 배운거냐? 오늘 배운 코드를 리마인드 할 겸 배웠고, 이렇게 쓰고있는 곳도 있을테니 
// }


// -------------------------------------------
// 25.06.16


{
  // villain-ghost 항목 요소를 찾아서 클래스 이름을 여럿 추가한 뒤,
  // 다시 클래스 이름을 여럿 제거해봅니다.
  villain.classList.add('alpha', 'beta')
  console.log(villain.className)
  
  villain.classList.remove('beta', 'character')
  console.log(villain.className)
  
}

