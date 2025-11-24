function mousetrackking() {
  window.addEventListener("pointermove", (dets) => {
    document.querySelector(
      `.circle`
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    document.querySelector(`.circle`).style.left = `0%`;
    document.querySelector(`.circle`).style.top = `0%`;
  });
}



mousetrackking();


// ----barr animation

let a = document.querySelectorAll(".bar");
let barcon = document.querySelector(".bar-container");
a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let url = item.getAttribute("data-img");
    let con = document.querySelector(".fixed");
    con.style.backgroundImage = `url(${url})`;
    con.style.display = "block";
    if (window.innerWidth <= 600){
    item.querySelector("p").style.display="block";
    }
  });

barcon.addEventListener("mouseout", () => {
  let con = document.querySelector(".fixed");
  con.style.display = "none";
    if (window.innerWidth <= 600){
   item.querySelector("p").style.display="none";
    }
});
});

// SWIPER _______________________________________

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });
}

swiper();

//menu effect

let flag = 0;

document.querySelector("#menu").addEventListener("click", () => {
  if (flag === 0) {
    document.querySelector(".hidden").style.top = `10%`;
    document.querySelector(".menu-nav").style.top = `0%`;
    document.querySelector(".logo img").style.opacity="0";
    flag = 1; // CHANGE THE FLAG!
  } else {
    document.querySelector(".hidden").style.top = `-100%`;
    document.querySelector(".menu-nav").style.top = `-100%`;
     document.querySelector(".logo img").style.opacity="1";
    flag = 0; // RESET FLAG
  }

   document.querySelectorAll(".menu-nav button").forEach(btn=>{
       btn.addEventListener("click",()=>{
         document.querySelector(".hidden").style.top = `-100%`;
     document.querySelector(".menu-nav").style.top = `-100%`;
     document.querySelector(".logo img").style.opacity="1";
      flag = 0;
       })
    });
});

// ------scroll effect
let button =document.querySelectorAll(".scroll-btn");


button.forEach(btn => {
  btn.addEventListener("click", () => {
    let target = btn.getAttribute("data-target");
    document.getElementById(target).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

