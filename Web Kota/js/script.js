const toggleButton = document.getElementsByClassName('toggler-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

addEventListener('scroll', () => {
    document.querySelector("nav").style.boxShadow = window.scrollY == 0 ? '' : "-1px 3px 5px 0px rgba(0,0,0,0.75)";
    document.querySelector("nav").style.backgroundColor = window.scrollY == 0 ? 'transparent' : "#333";
    if (navbarLinks.classList.contains('active')) navbarLinks.classList.remove('active')
} )

const carouselWidth = () => $(".carousel-inner")[0].scrollWidth;
const cardWidth = () => $(".carousel-item").width() + 0.3;

var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth() - cardWidth() * 4) {
        scrollPosition += cardWidth();
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth();
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }