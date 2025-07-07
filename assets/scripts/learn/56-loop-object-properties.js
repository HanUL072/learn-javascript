// ---------------------------------------------------------
// 📌 객체 속성 순환
// ---------------------------------------------------------

// for...in 문
;(() => {
  
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }

  for(const key in cssMap) {
    const value = cssMap[key]
    console.log({ key, value })
  }

})

// for...of 문
// Object.entries()
;(() => {
  
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }
  // ????
  // for(const key in cssMap) {
  //   console.log(key)
  // }
  
  // console.log(Array.from(cssMap)) ❌
  // console.log(Object.entries(cssMap)) ✅ // [[key, value] , [key, value]]
  
  
  // 객체 -> 배열 변경
  // for(const key in cssMap) {
  //   const value = cssMap[key]
  //   console.log({ key, value })
  // }

  // 객체 -> 배열 변경
  // 구조 분해 할당
  for(const [ key, value ] of Object.entries(cssMap)) {
    console.log([key])
    console.log([value])
  }

})


