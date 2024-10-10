// toggle mobile menu

document.addEventListener('DOMContentLoaded', function(){
    const togglebutton = document.querySelector('.navbar .mobile-menu-toggle');
    
    const mobilemenu = document.querySelector('.navbar .mobile-menu-items');
    togglebutton.addEventListener('click', function(){
        mobilemenu.classList.toggle('active');
    });
}); 

// change navbar background on scroll

window.addEventListener('scroll' , function(){
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 0){
       navbar.classList.add('navbar-scroll');
    }
    else{
        navbar.classList.remove('navbar-scroll');
    }
});