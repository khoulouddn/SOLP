
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
/*==================== SERVICES CAROUSEL ====================*/
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

/*==================== TESTIMONIALS CAROUSEL ====================*/
$('.testimonials-carousel').owlCarousel({
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

/*==================== TEAM CAROUSEL ====================*/
$('.team-carousel').owlCarousel({
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
            items:4,

        }
    }
});

/*==================== Scrolling ScrolIt ====================*/
$.scrollIt({
    topOffset: -50
});

/*==================== Navbar Collapse ====================*/
 $(".nav-link").on("click", function(){
   $(".navbar-collapse").collapse("hide");
 });

 /*==================== Toggle Theme ====================*/
function toggleTheme(){
    if(localStorage.getItem("shala-theme") !== null){
        if(localStorage.getItem("shala-theme") === "dark"){
            $("body").addClass("dark");
    }
    else{
            $("body").removeClass("dark");
    }
}
    updateIcon();
}
toggleTheme();

$(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
      localStorage.setItem("shala-theme","dark");
    }
    else{
       localStorage.setItem("shala-theme","light");
    }

    updateIcon();
});
function updateIcon(){
    if($("body").hasClass("dark")){
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    }
    else{
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
    }
}
});