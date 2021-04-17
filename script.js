const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const container = document.querySelector(".container");

openMenu.addEventListener("click", toggleOpen);
closeMenu.addEventListener("click", toggleOpen);

function toggleOpen() {
  container.classList.toggle("show-nav");
}
