
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


document.addEventListener('click', function () {
    const buttonScrollExscursionLeft = document.querySelector('.scroll_type_review-left');
    buttonScrollExscursionLeft.onclick = function () {
        document.querySelector('.reviews__conteiner').scrollLeft += -50;
    };
}, false);


document.addEventListener('click', function () {
    const buttonScrollExscursionRight = document.querySelector('.scroll_type_review-right');
    buttonScrollExscursionRight.onclick = function () {
        document.querySelector('.reviews__conteiner').scrollLeft += 50;
    };
}, false);


