
const getElement = (selector) => {
    const element = document.querySelector(selector)
    if(element) return element
    throw Error(`please doublecheck your class names, there is no ${selector}class`)
}


const links = getElement ('.nav-links')
const navBtnDOM = getElement ('.nav-btn')

 navBtnDOM.addEventListener('click', () => {
     links.classList.toggle('show-links')
 })

const date= getElement('#date')
const currentYear= new Date() .getFullYear()
date.textcontent = currentYear
