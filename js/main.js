const changeLang = document.querySelector('.change-lang');
const changeLnMenu = document.querySelector('.change-lang-menu');

if(changeLang){
     changeLang.addEventListener('click', (event) => {
          event.stopPropagation();
          document.querySelector('.change-lang-menu').classList.toggle("show")
     })


       document.addEventListener("click", (event) => {
               if(changeLnMenu.classList.contains("show")){
                   changeLnMenu.classList.remove("show")
               } 
          });
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
   

$(".owl-carousel.department_classifications_slider").owlCarousel({
     loop: true,
     margin: 10,
     // nav: true,
     autoplay: true,
     autoplayTimeout: 3000,
     autoplayHoverPause: true,
     smartSpeed: 1000,  
     responsive: {
       0: {
         items: 1
       }, 500: {
          items: 2
       }, 1024: {
          items: 3
       }, 1200: {
          items: 4
       }
     }
   });
   
const changePasswordType = document.querySelector('.input-frm .icon');
const passInput = document.querySelector('.frm-pass-text');

const eye =  document.querySelector('.input-frm .icon i');

if(changePasswordType){
     changePasswordType.addEventListener("click", () => {
          if(passInput.getAttribute("type") === "password"){
               passInput.setAttribute("type", "text")
          } else{
               passInput.setAttribute("type", "password")
          }

          if(eye.className === "fa-regular fa-eye-slash"){
              eye.className = "fa-regular fa-eye"
          } else{
              eye.className = "fa-regular fa-eye-slash"
          }
     })
}


const inputsVerification = document.querySelectorAll('.verify-inputs input');

if (inputsVerification.length > 0) { // Check if inputs exist
    inputsVerification.forEach((input, index) => {
        input.addEventListener("change", () => {
            // Ensure the next input exists before focusing
            if (index + 1 < inputsVerification.length) { 
                inputsVerification[index + 1].focus();
            }
        });
    });
}

