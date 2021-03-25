const hamburgerr = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list li");
const line = document.querySelector(".line")

hamburgerr.addEventListener("click", ()=> {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade")
    } )
})