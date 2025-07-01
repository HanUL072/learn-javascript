
// 나혼자 실습
;(() => {
  
  function animate() {

    const tl = gsap.timeline({
      repeat: -1,
      default: {
        duration: 0.4,
        opacity: 0,
        ease: 'power2.out',
      }

    })

    tl
       .from('#earth', { y: 200,})
       .from('#controller', { y: 200})
       .from('#book_1_', { y: 200})
       .from('#pencil', { y: 200, })
       .to('#pencil', {
          x: 40,
          y: -10,
          rotation: 30,
          duration: 0.2,
          repeat: 5,
          yoyo: true,
          ease: 'power1.inOut',
        }) 
       .from('#ball', { y: 200})
       .from('#paint', { y: 200})

       .from('.banner__title', { opacity: 0, stagger: 0.1, ease: 'power2.out'})
       .from('.banner__description', { opacity: 0, stagger: 0.1, ease: 'power2.out'}, '<')
       .to('.banner__link', { scale: 1.2, stagger: 0.1, ease: 'power1.out'})
     
    
  }

  setTimeout(animate, 500) 
})

// 배너 애니메이션을 GSAP 애니메이션 라이브러리로 구현해보세요.Add commentMore actions
;(() => {
  /* global gsap, GSDevTools */

  // 애니메이션
  const tl = gsap.timeline({
    id: 'banner animation',
    defaults: { opacity: 0, ease: 'back.out(1.4)' },
  })

  tl
    .from('.banner', { ease: 'linear', autoAlpha: 0, })
    .from('.banner__title :first-child', { x: 80, duration: 1 })
    .from('.banner__title :last-child', { x: -80, duration: 1 }, '<')
    .from('.banner__description', { y: 30 }, '-=0.5') 
    .from('.banner__link', { y: 40, }, '-=0.4')
    .from('#items > g', { scale: 0, transformOrigin: 'center', stagger: 0.1 }, '-=0.2')

  // 플러그인
  gsap.registerPlugin(GSDevTools)
  GSDevTools.create({ animation: tl, loop: true, id: 'main' })

  // 이벤트 핸들링Add commentMore actions
  document.querySelector('.banner')
  .addEventListener('click', () => {
      alert('devtools kill!!!!')
      // 개발 도구 GSDevTools 인스턴스 제거
      GSDevTools.getById('main').kill()
    })

})

// 야무쌤과 작업
;(() => {
   
  // 타임라인 인스턴스 생성
  // const tl = gsap.timeline({ id: 'banner animation'})
  // console.log(tl)

  // // gsap에 GSDevTools 플러그인 등록
  // gsap.registerPlugin(GSDevTools)

  // // GSDevTools 인스턴스 생성
  // GSDevTools.create({ animation: tl, id: 'devtools '})

  // // 이벤트 핸들링
  // document.querySelector('.banner')
  // .addEventListener('click', () => {
  //   // GSDevTools.getById('main').kill()
  // })
})

