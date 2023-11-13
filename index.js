const navLinks = document.querySelectorAll(".nav-links li");
const mobileLinks = document.querySelectorAll(".mobile-links li");
const moblieButton = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

navLinks.forEach((link)=>{
    const subMenu = link.querySelector(".sub-menu");
    link.addEventListener("click",()=>{
        link.classList.toggle("active");
        subMenu.classList.toggle("hidden");
    });
});

mobileLinks.forEach((link)=>{
    const subMenu = link.querySelector(".moblie-sub");
    link.addEventListener("click",()=>{
        link.classList.toggle("active");
        subMenu.classList.toggle("hidden");
    });
});

moblieButton.addEventListener('click',(e)=>{
    mobileMenu.classList.toggle("hidden");
})