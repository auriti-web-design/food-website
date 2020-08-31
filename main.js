
var slideshow = document.getElementById('slideshow');
var slides = slideshow.getElementsByTagName('img');
var index = 0;

function nxSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}



var slideTX = document.getElementById('slideTX');
var slidesTX = slideTX.getElementsByTagName('div');
var i = 0;

function nxSlideTX() {
    slidesTX[i].classList.remove('active');
    i = (i + 1) % slidesTX.length;
    slidesTX[i].classList.add('active');
}
function prSlideTX() {
    slidesTX[i].classList.remove('active');
    i = (i - 1 + slidesTX.length) % slidesTX.length;
    slidesTX[i].classList.add('active');
}

function menuToggle() {
    var nav = document.getElementById('navbar');
    nav.classList.toggle('active');
}
