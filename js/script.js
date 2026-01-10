const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuToggle.classList.toggle("active");

  if (isOpen) {
    menuToggle.textContent = "CLOSE ×"; // Міняємо текст на закриття
    document.body.style.overflow = "hidden";
  } else {
    menuToggle.textContent = "MENU"; // Повертаємо назад
    document.body.style.overflow = "";
  }
});
