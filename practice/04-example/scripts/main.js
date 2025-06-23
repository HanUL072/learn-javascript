{
  const accordionContainer = document.querySelector('.accordion__container')
  const accordions = accordionContainer.querySelectorAll('.accordion')

  for(let i = 0, l = accordions.length; i<l; i += 1) {  
      const firstAccordion = accordions.item(i)
      const firstAccordionButton = firstAccordion.querySelector('button')
      firstAccordionButton.addEventListener('click', () => {
        firstAccordion.classList.toggle('is-open')
      })
    }
}