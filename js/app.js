const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}


function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.track__title, .track__description, .sponsor__content, .tracking__img-one, .join__title, .join .app_btn, .target__img-one, .footer__rights, .track__box-item, .join__img`,{
    origin: 'top',
    interval: 100,
})
sr.reveal(`.home__data-title, .home__data-subtitle, .button, .tracking__title, .tracking__description, .tracking .app_btn`,{
    origin: 'left',
})
sr.reveal(`.home__img, .target__title, .target__description, .target .app_btn, .track__description-item`,{
    origin: 'right',
    interval: 100,
})