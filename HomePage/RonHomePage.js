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
    if (window.pageYOffset > 0) {
        secondPage.scrollIntoView({behavior: "smooth"});
    }
}