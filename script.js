// функции скролла
document.addEventListener('click', function () {
    const buttonScrollExscursionLeft = document.querySelector('.scroll-button-left');
    buttonScrollExscursionLeft.onclick = function () {
        document.querySelector('.excursions__list').scrollLeft += -50;
    };
}, false);


document.addEventListener('click', function () {
    const buttonScrollExscursionRight = document.querySelector('.scroll-button-right');
    buttonScrollExscursionRight.onclick = function () {
        document.querySelector('.excursions__list').scrollLeft += 50;
    };
}, false);