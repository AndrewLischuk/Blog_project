

// ======================MODAL FORM SEND MESSAGE======================

let modal = document.querySelector(".modal ");
let container = document.querySelectorAll(".container")

let scrollParam = document.documentElement.scrollHeight / 2;

window.addEventListener("scroll", scrollFuncShow)

let btnClose = document.querySelector(".btn-close")
btnClose.addEventListener("click", scrollFuncHide)

modal.addEventListener("click", function(e) {
    if(e.target === modal || e.target === container[9]) {        
        scrollFuncHide()
    }
})

function scrollFuncShow() {
    let scroll = window.pageYOffset
    if(scroll >= scrollParam) {
        modal.classList.add("show"); 
    }       
}

function scrollFuncHide() {
    modal.classList.add("hide")
    modal.classList.remove("show");
}

// ======================MOBILE MENU======================

let mobileMenu = document.querySelector(".nav-mobile-menu");
let menu = document.querySelector(".menu");
let menuBtn = document.querySelectorAll(".menu a");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        menu.classList.add("active-menu")
    } else {
        menu.classList.remove("active-menu")
    }
})

menuBtn.forEach(btn => 
    btn.addEventListener("click", function() {
        mobileMenu.classList.toggle("active-menu");
        menu.classList.remove("active-menu");
    })
)
