
  let btnToggleDarkMode = document.querySelector(".nav-right button");
  let imgHeroRender = document.querySelector('.img-render');
  let imgcvrender = document.querySelector('.img-cv-icon-render');
  let rendertoggle = document.querySelector('.render-toggle');
  


// cek storage apakah ada key theme ada atau tidak di localstorage
// key theme adalah key yang menyimpan status darkmode
window.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.mode45 === "dark") {
      document.documentElement.classList.toggle("dark");
      rendertoggle.innerHTML = '<img src="img/night_mode_icon.svg">'
      imgHeroRender.innerHTML = `<img src="img/hero_down_dark.svg" class=" transform translate-y-1
         lg:-translate-y-36 relative z-10">`
      imgcvrender.innerHTML =`<div class="img-cv-icon-render">
      <img src="img/download_icon_dark.svg" class="mr-2">`
    } else {
      return;
    }
  });

    btnToggleDarkMode.addEventListener("click", function () {
      document.body.parentElement.classList.toggle("dark");
      if (localStorage.mode45 === undefined) {
        window.localStorage.setItem("mode45", "dark");

        imgHeroRender.innerHTML = `<img src="img/hero_down_dark.svg" class=" transform translate-y-1
         lg:-translate-y-36 relative z-10">`

        imgcvrender.innerHTML =`<div class="img-cv-icon-render">
        <img src="img/download_icon_dark.svg" class="mr-2">`
        console.log(window.localStorage.mode45);

        rendertoggle.innerHTML = '<img src="img/night_mode_icon.svg">'
      } else {
        window.localStorage.removeItem("mode45");
        console.log(window.localStorage.mode45);

        imgHeroRender.innerHTML = `<img src="img/hero_down_bg.svg" class=" transform translate-y-1
         lg:-translate-y-36 relative z-10">`

        imgcvrender.innerHTML =`<div class="img-cv-icon-render">
        <img src="img/download_icon_btn.svg" class="mr-2">`

        rendertoggle.innerHTML = '<img src="img/light_mode_icon.svg">'
      }
    });

  // aos
  AOS.init({
    once: true
  });
  
  // toggle mobile

  let toggle = document.querySelector(".toggle");
  let navlink = document.querySelector(".nav-right");
  let closeToggle = document.querySelector(".close");
  let openToggle = document.querySelector(".open");
  
  toggle.addEventListener("click", function () {
    navlink.classList.toggle("hidden");
    closeToggle.classList.toggle("hidden");
    openToggle.classList.toggle("hidden");
    document.body.classList.toggle('overflow-hidden')
  });

  let navitem = document.querySelectorAll(".nav-right a")




if(document.documentElement.clientWidth < 660 ){
  navitem.forEach((NavItem) => {
    NavItem.addEventListener('click', function(){
      document.body.classList.toggle('overflow-hidden');
      navlink.classList.toggle("hidden");
      closeToggle.classList.toggle("hidden");
      openToggle.classList.toggle("hidden");
    })
  })
}


  
  window.addEventListener('scroll',function(){
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('sticky',window.scrollY > 300)
    navbar.classList.toggle('top-0',window.scrollY > 300)
//     console.log("tes")
  })
  
let home = document.querySelector("#home");
let skill = document.querySelector("#skill");
let project = document.querySelector("#project");
let certificate = document.querySelector("#certificate");
let contact = document.querySelector("#contact");

window.addEventListener("scroll", () => {
    let navbar = document.querySelector("nav");
    var win = window.pageYOffset;
    if(skill.offsetTop <= win && project.offsetTop > win ){
        // console.log("skill")
        document.querySelector(".skill").setAttribute("id","active");
        document.querySelector(".home").removeAttribute("id","active");
        document.querySelector(".project").removeAttribute("id","active");
        document.querySelector(".certificate").removeAttribute("id","active");
        document.querySelector(".contact").removeAttribute("id","active");
    }
    else if(project.offsetTop <= win && certificate.offsetTop > win ){
        // console.log("project")
        document.querySelector(".project").setAttribute("id","active");
        document.querySelector(".home").removeAttribute("id","active");
        document.querySelector(".skill").removeAttribute("id","active");
        document.querySelector(".certificate").removeAttribute("id","active");
        document.querySelector(".contact").removeAttribute("id","active");
    }
    else if(certificate.offsetTop <= win && contact.offsetTop > win ){
      // console.log("project")
      document.querySelector(".certificate").setAttribute("id","active");
      document.querySelector(".home").removeAttribute("id","active");
      document.querySelector(".skill").removeAttribute("id","active");
      document.querySelector(".project").removeAttribute("id","active");
      document.querySelector(".contact").removeAttribute("id","active");
  }
    else if(contact.offsetTop <= win ){
        // console.log("certificate")
        document.querySelector(".contact").setAttribute("id","active");
        document.querySelector(".home").removeAttribute("id","active");
        document.querySelector(".project").removeAttribute("id","active");
        document.querySelector(".skill").removeAttribute("id","active");
        document.querySelector(".certificate").removeAttribute("id","active");
    }else{
        // console.log("home")
        document.querySelector(".home").setAttribute("id","active");
        document.querySelector(".certificate").removeAttribute("id","active");
        document.querySelector(".project").removeAttribute("id","active");
        document.querySelector(".skill").removeAttribute("id","active");
        document.querySelector(".contact").removeAttribute("id","active");
    }
})
