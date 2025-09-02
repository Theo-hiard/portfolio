const mainContent = document.querySelector('main');
const navbar = document.querySelector('nav');
const navUl = document.querySelector('nav ul');


lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './animation/home.json'
});

window.onscroll = function() {
    updateNavbar();
    console.log(window.scrollY);
    
}


function updateNavbar( ) {
    if(window.scrollY > 50){
        navbar.style.top = '0';
    }
    else{
        navbar.style.top = '-150px';
    }

    if (window.scrollY > 920) {
        navbar.classList.add('nav-active');
        navUl.classList.add('ul-active');
    }
    else {
        navbar.classList.remove('nav-active');
        navUl.classList.remove('ul-active');
    }
}