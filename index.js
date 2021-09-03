const icono=document.querySelector(".icono")
const navmenu=document.querySelector(".nav-menu")

icono.addEventListener("click",() => {
    navmenu.classList.toggle("menu-visible")
})