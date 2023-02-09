const body = document.querySelector('body')
const navMenu = document.querySelector('nav')
const closeIcon = document.querySelector('nav .close-icon')

function toggleMenu(){
    navMenu.classList.add('active')
    body.classList.add('active')
}

function closeMenu(){
    body.classList.remove('active')
    navMenu.classList.remove('active')
}

closeIcon.addEventListener('click', closeMenu)