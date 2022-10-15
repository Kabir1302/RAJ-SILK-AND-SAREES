// (function(){
// 	var welcome = document.getElementById("welcome");
// 	var name = prompt("What's your name?");
	
//   if(window.confirm("Hii "+name+" ! Nice to see you. We have a 15% promo code for new customers! Would you like to get yours now?"))
//   {
//     window.location='#login-form-container';
//   }
// })();

searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}

let loginForm=document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}

window.onscroll=()=>{

    searchForm.classList.remove('active');

    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload=()=>{

    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

var swiper = new Swiper(".slider", {
    loop:true,
    centeredSlides:true,
    autoplay:
    {
        delay:9500,
        disableonInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      
      1300: {
        slidesPerView: 3,
      },
    },
  });




  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:
    {
        delay:9500,
        disableonInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:
    {
        delay:9500,
        disableonInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:
    {
        delay:9500,
        disableonInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });