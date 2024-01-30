
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const content = document.querySelector(`.accordion-content[data-target="${target}"]`);
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            content.classList.toggle('active');
          
        });
    });
});
function toggleAccordion(element) {
  const content = element.nextElementSibling;
  const isOpen = element.classList.toggle('is-open');

  if (isOpen) {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var testimonialsSwiper = new Swiper('.swiper-container-testimonials', {
    slidesPerView: 1, // Отображать только один отзыв за раз
    navigation: {
      nextEl: '.swiper-button-next-testimonials',
      prevEl: '.swiper-button-prev-testimonials',
    },
  });

  const arrows = document.querySelectorAll('.testimonial .right-arrow, .testimonials .left-arrow');
  arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      // Determine direction based on arrow class
      const direction = arrow.classList.contains('right-arrow') ? 'next' : 'prev';

      // Slide to the next or previous slide based on direction
      testimonialsSwiper.slideTo(direction);
    });
  });
});document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper('.swiper-container-testimonials', {
    slidesPerView: 1,
    spaceBetween: 11,
    navigation: {
      nextEl: '.right-arrow',
      prevEl: '.left-arrow',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const swiper = document.querySelector('.swiper-container-testimonials');
  const rightArrow = document.querySelector('.right-arrow');
  const leftArrow = document.querySelector('.left-arrow');

  rightArrow.addEventListener('click', function() {
    swiper.slideNext();
  });

  leftArrow.addEventListener('click', function() {
    swiper.slidePrev();
  });
});