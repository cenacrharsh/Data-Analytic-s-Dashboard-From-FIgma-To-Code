const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");
const menu = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});

backBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";
});

// window.addEventListener("resize", (event) => {
//   if (document.body.clientWidth >= 1000) menu.style.transform = "translateX(0)";
//   else menu.style.transform = "translateX(-100%)";
// });
