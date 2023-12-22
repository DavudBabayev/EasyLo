let nav = document.querySelector("nav");

let navMenu = document.querySelector(".menu")

document.querySelector("#openMenu").addEventListener("click", (e)=>{
    e.preventDefault()
    if(navMenu.style.top == "-500px"){
        navMenu.style.top = "0";
    }
    else{
        navMenu.style.top = "-500px";
    }
})

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 992){
        navMenu.style.top = "-500px"
    }
})

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 50){
        nav.style.backgroundColor = "#26BE9F"
    } else{
        nav.style.backgroundColor = "transparent"
    }
})

///Go To Top///

document.addEventListener("DOMContentLoaded", function () {
    const upBtn = document.querySelector('.upBtn');

    upBtn.addEventListener('click', function (e) {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
