//SELECTING ITEMS
const buttonMobile = document.querySelector("#menu-btn");
const menuMobile = document.querySelector("#menu");

buttonMobile.addEventListener("click", function () {
  buttonMobile.classList.toggle("open");
  menuMobile.classList.toggle("hidden");
  menuMobile.classList.toggle("flex");
});
