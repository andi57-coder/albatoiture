const menu = document.querySelector(".menu");
const menu_burger = document.querySelector(".menu-burger");

menu_burger.addEventListener("click", () => {
  menu.classList.toggle("menu_visible");
  menu_burger.classList.toggle("open");
});


