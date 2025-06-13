const exorcists = document.getElementById('exorcist-characters')

const choi = exorcists.querySelector('.master-choi')
// console.dir(choi.classList.add())

// 오늘날 주로 쓰는 방법(NEW)
{
  choi.classList.add('active')
  // console.log(choi.classList.value)
  choi.classList.remove('master-choi')
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