 /* global gsap, GSDevTools */

// GSAP - Getting Started
;(() => {

  // Web Animations API
  function playground() {
    const boxElements = document.querySelectorAll('.box')

    
    // const boxAni = document.querySelector('.box').animate([
    //   { translate: '0 0'},
    //   { translate: '80vw 0'}
    // ],
    // {
    //   duration: 1000,
    //   fill: 'forwards',
    // })
    // boxAni.pause()

      const keyframes = [
    { translate: '0 0' },
    { translate: '80vw 0' },
  ]
  
  const options = {
    duration: 1000,
    fill: 'forwards',
  }
    
    boxElements.forEach((element) => {
    const animation = element.animate(keyframes, options)
    animation.pause()
    // animation.play()
  })
    
  }

  /* global gsap */

  // GSAP API
  // gsap.to(target, varObject)
  // gsap.to(selector, varObject)
  // gsap.to(htmlElement, varObject)
  // gsap.to(svgElement, varObject)
  // gsap.to(jsObject, varObject)
  function playgroundGSAP() {
    // Tween Animation
    // to(target, vars)
    // gsap.to('.box', { x: '80vw' })
    // gsap.to( '.box', { x: 500 })
    // gsap.to( ['.box', '.term'], { x: 500 })

    // gsap.to('.box', {
    //   //  xPercent: 100, 
    //   //  yPercent: 100, 
    //    duration: 3,  
    //    rotation: 360 , 
    //    transformOrigin: 'center bottom'
    //   })


    // from(target, vars)
    // gsap.from('.box', { 
    //   opacity: 0, 
    //   xPercent: 50, 
    //   y: -200, 
    //   rotation: 360, 
    //   scale: 4,
    //   repeat: -1,
    //   delay: 1,
    //   repeatDelay: 1,
    //   yoyo: true,
    // })
  
    // fromTo(target, vars1, vars2)
    // gsap.fromTo('.box', { x: 400, y: -400 }, { x: 10, y: 50 })

    // set(target, vars)
    // gsap.set('.box', { x: 400, y: -200})

    // target
    
    // gsap.to('.box', { x: 200 })
    // gsap.to(document.querySelector('.box'), { x: 200})
    // gsap.to(document.querySelectorAll('.box'), { x: 200})
    // gsap.to(Array.from(document.querySelectorAll('.box')), { x: 200})


    // vars
    // gsap.to('.box', { 
    //   x: '+=300', 
    //   y: '-=50', 
    //   duraction: 3 ,
    //   backgroundColor: '#27c83f',
    //   borderRadius: '100px',
    //   width: 200,
    //   height: 200
    // })

    // SVG 요소
    //   gsap.to('.svgBox', {
    //     attr: {
    //       rx: 40,
    //       fill: 'red'
    //     }
    //   })

    // JavaScript 객체
    const o = {
      num: 0,
      color: 'yellow'
    }

    const output = document.querySelector('output')
    
    const renderCount = () => {
      output.value = Math.round(o.num)
      output.style.setProperty('color', o.color)
    }

     gsap.to(o, {
      num: 100,
      color: 'cyan',
      duration: 3,
      // repeat: 1,
      // yoyo: true,
      // ease: 'power4.in',
      // ease: 'power4.Out',
      // ease: 'power4.inOut',
      // ease: 'back.out',
      // ease: 'back.out(9)',
      // ease: 'bounce',
      // ease: 'steps(10)',
      ease: 'elastic',
      onUpdate: renderCount,
      onComplete: () => {
        // console.log('finished gsap animation')
        // gsap.set(output, { opacity: 0 })
      }
    })
    
    // delay
    // repeatDelay
      // gsap.to('.box:first-of-type', {
      //   rotation: 360,
      //   duration: 1,
      //   repeat: 1,
      //   repeatDelay: 1,
      // })
      
      // gsap.to('.box.yellow', { rotation: 360, duration: 1, delay: 1 })

      // Canvas Animation
      // const canvasELemnt = document.querySelector('.canvas')
      // const canvas = canvasELemnt.getContext('2d')

      // canvas.fillStyle = "#29a02b"

      // const position = { x: 0, y:0}

      // function draw() {
      //   canvas.clearRect(0, 0, 400, 400)

      //   // redraw the square at it's new position
      //   canvas.fillRect(position.x, position.y, 100, 100);
      // }

      // gsap.to(position, {
      //   x: 300,
      //   y: 300,
      //   duration: 1,
      //   ease: 'back.inOut(7)',
      //   // unlike DOM elements, canvas needs to be redrawn and cleared on every tick
      //   onUpdate: draw
      // });

      // Easing
      // none
      // power(1,2,3,4).in
      // power(1,2,3,4).out
      // power(1,2,3,4).inOut
      // back
      // back(1,2,3,4).in()
      // back(1,2,3,4).out()
      // back(1,2,3,4).inOut()
  }

  setTimeout(() => {
    playground()
    playgroundGSAP()
  }, 500)

})

// GSAP - Stagger
;(() => {

  function animate() {
    
    // gsap.from('.blue', { y: 100, opacity: 0, duration: 1 })
    // gsap.from('.yellow', { y: 100, opacity: 0, duration: 1, delay: 1 })
    // gsap.from('.green', { y: 100, opacity: 0, duration: 1, delay: 2 })

    gsap.from('.box', { 
      y: 100, 
      opacity: 0,
      stagger: 0.1, 
      ease: 'power1.out'
    } )

    const boxes = document.querySelectorAll('.box')

    // 이벤트 위임(Event Delegation)
    document.querySelector('main')
    .addEventListener('click', (e) => {
      if (e.target.matches('.box')) {
        gsap.to('.box', { 
          y: -100, 
          opacity: 0, 
          scale: 1.2,
          repeat: -1,
          
          // stagger: 0.1,

            stagger : {
              each: 0.3,
              repeat: 5,
              yoyo: true,
            },

            // stagger: (index, target, /* list */) => {
            //   // return index * 0.2 // 0, 0.2, 0.4
            //   // return index * 0.4 // 0, 0.4, 0.8

            //   if (target.matches('.green')) {
            //     return 1.5
            //   } else {
            //     return index * 0.2
            //   }
            // },
            ease: 'power4.out',

            // Callbacks
            onStart: () => { console.log('start') },
            onUpdate: () => { console.log('update') },
            onComplete: () => { console.log('complete') },
          })
        }
      })


    // 루프문 사용
    // for (const box of boxes) {
    //   box.addEventListener('click', () => {
    //     gsap.to('.box', { y: 100, opacity: 0, stagger: 0.1, ease: 'power4.out'})
    //   })
    // }

  }

  setTimeout(animate, 800)
})

// GSAP -TimeLine
;(() => {
   
    function animate() {
      // const tween = gsap.to('.box:first-of-type', {})
      // console.log(tween)
      
      // GSAP의 타임라인 인스턴스 생성
      const tl = gsap.timeline({ 
        repeat: -1, 
        repeatDelay: 1, 
        yoyo: true, 
        defaults: { 
          opacity: 0, 
          duration: 0.4, 
          ease: 'back.out'
        } 
      })

      tl
        //  add tween
         .from('.blue', { y: 200}) // 0s
         .from('.purple', { y: 200}, '<')
         .from('.yellow', { y: -200 }, '-=0.2')
         .from('.pink', { y: -200}, '<')
         .from('.green', { y: 200 }, 0 + 0.3) 
    }
         
    // 0.5초가 지난 후에 animate 함수 실행
    setTimeout(animate, 500) 

})


// GSAP - Callbakcs & Controls 
;(() => {
   function animate() {
    
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
    defaults: { opacity: 0, duration: 1, ease: 'back.inOut(4)' },
    // 타입라인 콜백 설정
    onStart: () => {
      console.log('start')
    },
    onUpdate: () => {
      console.log('updating...')
    },
    onRepeat: () => {
      console.log('repaat')
    },
    onComplete: () => {
      console.log('completed')
    },
    onReverseComplete: () => {
      console.log('reverse completed')
      document.querySelector('[data-control="timeScale-2"]').click()
      console.log('2배속 재생 시작!')
    },
  })
    .from('.blue', { y: 200 }) // 0s
    .from('.purple', { y: 200 }, '<')
    .from('.yellow', { y: -200 }, '-=0.3')
    .from('.pink', { y: -200 }, '<')
    .from('.green', { y: 200 }, 0 + 0.3)


  // 타임라인 인스턴스 제어
  // pause()
  tl.pause()

  // 이벤트 위임
  // 타임라인 컨트롤 (재생, 일시정지, 재개, 역재생, 재시작, 2배속, 0.5배속)
  document.querySelector('header').addEventListener('click', (e) => {
    const button = e.target.closest('button')

    if (button.matches('[data-control="play"]')) {
      tl.play()
    }
    if (button.matches('[data-control="pause"]')) {
      tl.pause()
    }
    if (button.matches('[data-control="resume"]')) {
      tl.resume()
    }
    if (button.matches('[data-control="reverse"]')) {
      tl.reverse()
    }
    if (button.matches('[data-control="restart"]')) {
      tl.restart()
    }
    if (button.matches('[data-control="timeScale-2"]')) {
      tl.timeScale(2).play()
    }
    if (button.matches('[data-control="timeScale-0.5"]')) {
      tl.timeScale(0.5).play()
    }

  })

   }
   
   function tweenAnimate() {
     const greenTween = gsap.to('.green', {
       scale: 1.3,
       rotation: 270,
       skewX: 30,
       duration: 1.5,
       ease: 'back.inOut(2)',
       repeat: 1,
       yoyo: true,
       repeatDelay: 1,
       onStart: () => { console.log('start tween') },
       onRepeat: () => {
         console.log('2배속')
         greenTween.timeScale(2).play()
       },
       onComplete: () => { 
         console.log('complete tween') 
       },
     })
   
     greenTween.pause()
   
     document.querySelector('.purple').addEventListener('click', () => {
       greenTween.timeScale(0.4).play()
     })
   }


   setTimeout(() => {
    animate()
    tweenAnimate()
   }, 200)

  

})


// GSAP - Animation Debugging (with GSDevTools)
;(() => {
  // GSAP Plugin - GSDevTools
  // 플러그인 등록(register plugin)
  gsap.registerPlugin(GSDevTools)

  // 타입라인 애니메이션 생성
  const tl = gsap.timeline({
    id: 'box 로테이션 타임라인 애니메이션',
    repeat: 2,
    yoyo: true, 
    defaults: { x: -200, duration: 0.4, opacity: 0, rotation: 270},
  })

    .from('.blue', { })
    .from('.yellow', { })
    .from('.green', { }, '+=1')
    .from('.pink', { })
    .from('.purple', { }, 0.84)

  // tl.pause()

  // GSDevTools 인스턴스 
  GSDevTools.create({ 
     animation: tl,
    persist: false,
    paused: false,
    timeScale: 2,
    loop: true,
    // visibility: 'auto'
  })
  

})()

