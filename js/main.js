const changeLang = document.querySelector('.change-lang');

if(changeLang){
     changeLang.addEventListener('click', () => {
          document.querySelector('.change-lang-menu').classList.toggle("show")
     })
}

const showMenu = document.querySelector('.show-menu');

if(showMenu){
     showMenu.addEventListener("click", () => {
          document.querySelector('.responsive-menu').classList.add("show")
          document.querySelector('.overlay').classList.add("show")
     })


     document.querySelector('.overlay').addEventListener("click", () => {
          document.querySelector('.responsive-menu').classList.remove("show")
          document.querySelector('.overlay').classList.remove("show")
     })
}


$(".owl-carousel.carousel-hero").owlCarousel({
     loop: true,
     margin: 10,
     nav: true,
     autoplay: true,
     autoplayTimeout: 3000,
     autoplayHoverPause: true,
     smartSpeed: 1000,  
     responsive: {
       0: {
         items: 1
       }
     }
   });

   $(".owl-carousel.owl-partner").owlCarousel({
     loop: true,
     margin: 10,
     nav: false,
     dots: false,
     autoplay: true,
     autoplayTimeout: 3000,
     autoplayHoverPause: true,
     smartSpeed: 1000, 
     responsive:{
          0:{
              items:2
          },
          500:{
              items:3
          },
          700:{
              items:3
          },
          1000:{
              items:4
          },
          1200:{
              items:5
          }

      } 
    
   });
   

   $(".owl-carousel.owl-customers").owlCarousel({
     loop: true,
     margin: 20,
     nav: true,
     navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
     dots: false,
     autoplay: false,
     autoplayTimeout: 3000,
     autoplayHoverPause: true,
     smartSpeed: 1000, 
     responsive:{
          0:{
            nav: false,
              items:1
              
          },
          950:{
            nav: false,
            items:2
          },

          1000:{
            nav: true,
              items:2
          },


      } 
    
   });
   

   

  //  counter

  if ($(".counter").length) {
    var a = 0;
    $(window).scroll(function () {
      var oTop = $(".counter-box").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-number");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
  
            {
              duration: 2550,
              easing: "swing",
              step: function () {
                 
                $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              },
              complete: function () {
                $this.text(Math.ceil(this.countNum).toLocaleString("en"));
                
              },
            }
          );
        });
        a = 1;
      }
    });
  
    const animationDuration = 4000;
  
    const frameDuration = 1000 / 60;
  
    const totalFrames = Math.round(animationDuration / frameDuration);
  
    const easeOutQuad = (t) => t * (2 - t);
  
    const animateCountUp = (el) => {
      let frame = 0;
      const countTo = parseInt(el.innerHTML, 10);
  
      const counter = setInterval(() => {
        frame++;
  
        const progress = easeOutQuad(frame / totalFrames);
  
        const currentCount = Math.round(countTo * progress);
  
        if (parseInt(el.innerHTML, 10) !== currentCount) {
          el.innerHTML = currentCount;
        }
  
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    };
  
    const countupEls = document.querySelectorAll(".timer");
    countupEls.forEach(animateCountUp);
  
    $(".animated-progress span").each(function () {
      $(this).animate(
        {
          width: $(this).attr("data-progress") + "%",
        },
        2100
      );
      $(this).text($(this).attr("data-progress") + "%");
    });
  }