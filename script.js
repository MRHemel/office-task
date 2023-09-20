// hambuger icon 
let menu = document.querySelector('#hamburger')
let navbar = document.querySelector('.nav-items-dropdown')

menu.onclick = ()=>{
    console.log(123)
    
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle('open')
}

// hambuger icon end

