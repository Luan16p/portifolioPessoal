const target = document.querySelectorAll("header");
const animateclass = "fixado";

var navTopBar = document.getElementById('nav-topbar')

let lastScrollTop = 0
let disabletop = 0 

function fixaTopBar(){
    if(lastScrollTop > window.pageYOffset){
        target.forEach(function(element){
            element.classList.add(animateclass)
            disabletop = lastScrollTop
            
        })
        if(disabletop > window.pageYOffset){
            lastScrollTop = window.pageYOffset
            navTopBar.style.background = "rgba(107, 62, 179, 0)";
        }
    } else if (lastScrollTop < window.pageYOffset){
        target.forEach(function(element){
            element.classList.remove(animateclass)
            lastScrollTop = window.pageYOffset
            navTopBar.style.background = "rgb(107, 62, 179)";
        })
    }
}
window.addEventListener('scroll', () => {
    fixaTopBar()
})


function levarSite() {
    const btn_levar = document.getElementById('btn-abb');
    btn_levar.addEventListener('click', ()=> {
        window.location.replace("https://github.com/Luan16p?tab=repositories")    
    });
}

levarSite();