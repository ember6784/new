const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');
  
    var swiper = new Swiper('.swiper-container-testimonials', {
      navigation: {
        nextEl: '.right-arrow',
        prevEl: '.left-arrow',
      },
    });
    rightArrow.addEventListener('click', function() {
      console.log("Right arrow clicked");
      swiper.slideNext(); 
    });
  
    leftArrow.addEventListener('click', function() {
      console.log("Left arrow clicked");
      swiper.slidePrev(); 
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const rightArrow = document.querySelector('.right-arrow-2');
  const leftArrow = document.querySelector('.left-arrow-2');

  var swiper2 = new Swiper('.swiper-container-testimonials-2', {
      slidesPerView: 1, // Only show one slide
      navigation: {
          nextEl: '.right-arrow-2',
          prevEl: '.left-arrow-2',
      },
  });

  rightArrow.addEventListener('click', function() {
      console.log("Right arrow clicked");
      swiper2.slideNext(); // Slide to the next slide
  });

  leftArrow.addEventListener('click', function() {
      console.log("Left arrow clicked");
      swiper2.slidePrev(); // Slide to the previous slide
  });
});
