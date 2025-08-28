const mainContent = document.querySelector('main');
const navbar = document.querySelector('nav');

lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './animation/home.json'
});

window.onscroll = function() {
    removeNavbar();
}

function removeNavbar( ) {
    if(window.scrollY > 1050){
        navbar.style.top = '-100px';
    }
    else{
        navbar.style.top = '0';
    }
}