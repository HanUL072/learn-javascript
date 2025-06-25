{
  // -------------------------------------------------
  // 📌 DOM 탐색(Traversing)
  // -------------------------------------------------
  
  const starWars = document.getElementById('star-wars')
  // console.log(starWars)

  // // querySelector()
  const ai = starWars.querySelector('i')
  // console.log(ai)

  // // querySelectorAll()
  const characters = starWars.querySelector('.character') // NodeList
  // console.log('자식들', characters)

  // // children (HTMLCollection)
  const children = starWars.children
  // // console.log('자식들:', children)


  // // 배열화 (배열 객체로 변경)
  // console.log(Array.from(characters), Array.isArray(Array.from(characters)))
  // console.log(Array.from(children), Array.isArray(Array.from(children)))

  // firstChild 
  // console.log('첫번째 자식 (타입: ??)', starWars.firstChild.nodeType.nexSibling) // 1 = 요소, 2 = 속성, 3 = 텍스트

  // firstElementChild
  console.log('첫번째 자식 (타입: ??)', starWars.firstElementChild) // 1 = 요소, 2 = 속성, 3 = 텍스트

  // lastChild
  // lastElementChild
  console.log('마지막 요소 노드 자식', starWars.lastElementChild)
}