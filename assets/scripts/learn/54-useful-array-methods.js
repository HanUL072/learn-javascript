// ------------------------------------------------------
// 📌 유용한 JS 기능 - 배열의 유용한 메서드
// -------------------------------------------------------

;(() => {
  // Array의 .foundIndex() 메서드
 
  const people = [
	{ id: 1, name: '지훈' }, // index: 0
	{ id: 2, name: '아름' }, // index: 1
	{ id: 3, name: '한영' }, // index: 2
  ]

  // 일치하는(참으로 평가되는)사람을 찾아서 해당 인덱스 반환
  let foundIndex = people.findIndex((person) => {
    return person.name === '아름'
  });

  console.log(foundIndex)

})

// find() 메서드
;(() => {
  const people = [
    { id: 1, name: '지훈' },
    { id: 2, name: '아름' },
    { id: 3, name: '한영' },
  ]

  const hanyuoung = people.find((person) => person.name === '반영')
  console.log(hanyuoung)
})()