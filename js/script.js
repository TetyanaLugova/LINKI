// Мобільне меню
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const menu = document.getElementById("mobileMenu");

openBtn.addEventListener("click", () => {
  menu.classList.add("is-open");
  openBtn.style.display = "none"; // Ховаємо MENU
  closeBtn.style.display = "flex"; // Показуємо CLOSE
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("is-open");
  openBtn.style.display = "flex"; // Показуємо MENU
  closeBtn.style.display = "none"; // Ховаємо CLOSE
  document.body.style.overflow = "";
});

// Мобільний пошук
const searchToggle = document.getElementById("searchToggle");
const searchDropdown = document.getElementById("searchDropdown");

searchToggle.addEventListener("click", () => {
  // Перемикаємо класи
  const isActive = searchToggle.classList.toggle("is-active");
  searchDropdown.classList.toggle("show");

  // Якщо відкрили — ставимо фокус на поле
  if (isActive) {
    searchDropdown.querySelector("input").focus();
  }
});
