
function createScrollHandler(blockClass, buttonLeftClass, buttonRightClass, scrollContainerClass) {
    const block = document.querySelector(`.${blockClass}`);
    block.addEventListener('click', function (event) {
      const target = event.target;
      const container = document.querySelector(`.${scrollContainerClass}`);
  
      if (target.classList.contains(buttonLeftClass)) {
        container.scrollLeft += -50;
      } else if (target.classList.contains(buttonRightClass)) {
        container.scrollLeft += 50;
      }
    }, false);
  }
  
  createScrollHandler('excursions', 'scroll-button-left', 'scroll-button-right', 'excursions__list');
  createScrollHandler('reviews', 'scroll_type_review-left', 'scroll_type_review-right', 'reviews__conteiner');
