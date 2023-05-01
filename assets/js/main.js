// function for tabs of login and sign up 
function signUp_login(e, tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  e.currentTarget.className += " active";
}

// mobile menu toggle
const mobileMenu = document.querySelector(".mobile_menu");
const navbar = document.querySelector(".navbar");
mobileMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


// // // card slider
// const cardSlide = document.querySelectorAll(".card_slide");
// const prevBtn = document.querySelector(".prev_btn");
// const nextBtn = document.querySelector(".next_btn");

// prevBtn.addEventListener("click", (e) => {
//   for (let items of cardSlide) {
//     items.style.transform += "translateX(-52%)";
//     console.log(e)
//   }
//   // prevBtn.style.display = "none";
//   nextBtn.style.display = "flex";
// });

// nextBtn.addEventListener("click", () => {
//   for (let items of cardSlide) {
//     if(items.length < 2){
//       items.style.transform += "translateX(52%)";
//     }
//   }
//   // nextBtn.style.display = "none";
//   // prevBtn.style.display = "flex";
// });


$(".slick-slider").slick({
  slidesToShow: 2.5,
  infinite:false,
  prevArrow: $('.prev'),
   nextArrow: $('.next'),
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
 });





