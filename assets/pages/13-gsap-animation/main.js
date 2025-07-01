{

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
      duration: 1,
      // repeat: 1,
      // yoyo: true,
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
  }

  setTimeout(() => {
    playground()
    playgroundGSAP()
  }, 500)
}
