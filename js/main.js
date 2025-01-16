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