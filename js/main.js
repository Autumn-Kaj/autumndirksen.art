$(document).ready(function(){
    $('#backtop').click(function(){
        window.scroll({top: 0, duration: 4000, behavior: 'smooth'});
    });
});
    
    ScrollReveal().reveal('#title-reveal', { distance: '150%',
    origin: 'bottom', duration: 2000});
    ScrollReveal().reveal('#sub-reveal', { distance: '120%',
    origin: 'bottom', duration: 2000, delay: 500});
    ScrollReveal().reveal('#arrow-reveal', { distance: '110%',
    origin: 'bottom', duration: 2000, delay: 1000 });

    ScrollReveal().reveal('#creatures', { distance: '30px',
    origin: 'bottom', duration: 1000});
    ScrollReveal().reveal('#characters', { distance: '30px',
    origin: 'bottom', duration: 1000, delay: 400});
    ScrollReveal().reveal('#illustrations', { distance: '30px',
    origin: 'bottom', duration: 1000, delay: 800 });
    
    ScrollReveal().reveal('#title-slide', { distance: '30px',
    origin: 'right', duration: 2000, });

    ScrollReveal().reveal('.nav-reveal', {duration: 2000});