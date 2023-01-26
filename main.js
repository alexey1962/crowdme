window.onload = function () {
    let ourWorksItem1 = document.querySelector('.ourworks__item--1')
    let ourWorksItem2 = document.querySelector('.ourworks__item--2')
    let ourWorksItem3 = document.querySelector('.ourworks__item--3')
    let line = document.querySelector('.ourworks__item--1:after')


    ourWorksItem2.addEventListener('click', function () {
        line.style.left = "300%"
    })
}