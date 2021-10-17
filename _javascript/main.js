/*============================== Get Elements By ID =========================== */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('toggle-menu')
const navClose = document.getElementById('close-menu')
const Header = document.querySelector('header')
/*============================== Toggle Validate ======================= */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-menu'),
    Header.classList.add('scroll-header'),
    navToggle.classList.add('remove-toggle')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu'),
    navToggle.classList.remove('remove-toggle')
  })
}

/*=============== Change background color - Header ==================*/

function scrollHeader () {
  const Header = document.querySelector('header')
  console.log(Header)

  if(this.scrollY >= 50) {
    Header.classList.add('scroll-header')
  } else {
    Header.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)