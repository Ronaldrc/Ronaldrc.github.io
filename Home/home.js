//
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});
const hiddenElements = document.querySelectorAll('.test-transition');
hiddenElements.forEach((el) => observer.observe(el));

//
const observerMainHeader = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        entry.target.classList.toggle('showMainHeader', entry.isIntersecting);
    });
});
const hiddenElementsMainHeader = document.querySelectorAll('.main-header');
hiddenElements.forEach((el) => observer.observe(el));

//
var firstPage = document.querySelector('.container');
var secondPage = document.querySelector('.test-transition, .test-transition.show');

document.onscroll = function scroll() {
    if (window.scrollY > 0) {
        secondPage.scrollIntoView({behavior: "smooth"});
    }
}

//
/*
window.onload = function() {
    var helloText = document.getElementById("hello");
    helloText.style.opacity = 0;
    while (helloText.style.opacity < 1) {
        helloText.style.opacity += 0.1;
    }
};
*/

window.onload = function() {
    var img = new Image();
    img.src = "/home/stick_man.png";
    var src = document.getElementById("hello");
    src.appendChild(img);
}