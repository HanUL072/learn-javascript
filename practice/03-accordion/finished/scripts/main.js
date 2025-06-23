{
  const accordionContainer = document.querySelector('.accordion__container')
  const accordions = accordionContainer.querySelectorAll('.accordion')
  
  // 
  // const firstAccordion = accordions.item(0)
  // const firstAccordionButton = firstAccordion.querySelector('button')
  // firstAccordionButton.addEventListener('click', () => {
  //   firstAccordion.classList.toggle('is-open')
  // })


  // 1. while 문
  // let i = 0
  // let l = accordions.length

  // while(i<l) {  
  //   const firstAccordion = accordions.item(i)
  //   const firstAccordionButton = firstAccordion.querySelector('button')
  //   firstAccordionButton.addEventListener('click', () => {
  //     firstAccordion.classList.toggle('is-open')
  //   })

  //   i = i + 1
  // }

  // 2. for 문
  // for(let i = 0, l = accordions.length; i<l; i += 1) {  
  //   const firstAccordion = accordions.item(i)
  //   const firstAccordionButton = firstAccordion.querySelector('button')
  //   firstAccordionButton.addEventListener('click', () => {
  //     firstAccordion.classList.toggle('is-open')
  //   })
  // }


  // 3. for of 문
  // for(let i = 0, l = accordions.length; i<l; i += 1) {  
  //   const firstAccordion = accordions.item(i)
  //   const firstAccordionButton = firstAccordion.querySelector('button')
  //   firstAccordionButton.addEventListener('click', () => {
  //     firstAccordion.classList.toggle('is-open')
  //   })
  // }

  // 4. forEach 문
  accordions.forEach((accordion) => {
    const accordionButton = accordion.querySelector('button')
    accordionButton.addEventListener('click', () => {
      accordion.classList.toggle('is-open')
    })
  })
}