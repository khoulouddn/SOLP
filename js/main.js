
/* VIDEO POPUP */

const modalViews = document.querySelectorAll('.player__modal'),
      modalBtns = document.querySelectorAll('.player__button'),
      modalCloses = document.querySelectorAll('.player__modal-close')
       
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) =>{
    modalBtns.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalViews) =>{
            modalViews.classList.remove('active-modal')
        })
    })
})

/*==================== CHANGE BACKGROUND NAV ====================*/
function scrollNavbar(){
    const navbar = document.getElementById('navbar')
    if(this.scrollY >= 50) navbar.classList.add('scroll-navbar'); else navbar.classList.remove('scroll-navbar')
}
window.addEventListener('scroll', scrollNavbar)



$(document).ready(function(){
/*==================== CAROUSEL ====================*/
$('.services-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,

        }
    }
});
});