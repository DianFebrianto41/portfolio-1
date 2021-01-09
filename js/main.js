// menu show Y hidden 
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// remove menu 
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n =>n.addEventListener('click', linkAction))

// scroll Section Active link
const section = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = windowPageYOffset

    section.forEach(current =>{
        const sectionHeight = current.sectionHeight
        const sectionTop = current.sectionTop - 50
        sectionId =current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll('.nav_menu a[href*='+ sectionId+']').classList.add('active')
        }else {
            document.querySelectorAll('.nav_menu a[href*='+ sectionId+']').classList.remove('active')
        }
    })
}
