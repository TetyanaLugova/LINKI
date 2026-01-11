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

// Модальне вікно
const modalTrigger = document.querySelector(".hero-btn-modal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

// Відкрити
modalTrigger.addEventListener("click", () => {
  modalOverlay.classList.add("is-open");
  document.body.style.overflow = "hidden"; // Блокуємо скрол сторінки
});

// Закрити через кнопку
closeModal.addEventListener("click", () => {
  modalOverlay.classList.remove("is-open");
  document.body.style.overflow = ""; // Повертаємо скрол
});

// Закрити кліком на темний фон
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }
});

const mainForm = document.getElementById("mainContactForm");
const formContent = document.getElementById("modalFormContent");
const thankYouContent = document.getElementById("modalThankYouContent");

mainForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Зупиняємо реальну відправку для демонстрації

  // 1. Приховуємо форму
  formContent.style.display = "none";

  // 2. Показуємо блок подяки
  thankYouContent.style.display = "block";

  // Опціонально: через 5 секунд закриваємо модалку автоматично

  // setTimeout(() => {
  //   document.getElementById("modalOverlay").classList.remove("is-open");
  //   document.body.style.overflow = "";
  // }, 5000);
});

// Не забудь оновити функцію закриття, щоб при наступному відкритті знову була форма
document.getElementById("closeModal").addEventListener("click", () => {
  setTimeout(() => {
    formContent.style.display = "block";
    thankYouContent.style.display = "none";
    mainForm.reset(); // Очищуємо поля
  }, 300); // Чекаємо поки модалка закриється візуально
});

// Модальне чат
const chatStartBtn = document.querySelector(".chat-start-btn");
const chatModal = document.getElementById("chatModal");
const closeChat = document.getElementById("closeChat");

// Відкрити чат
chatStartBtn.addEventListener("click", () => {
  chatModal.classList.add("is-open");
  // Блокуємо скрол фону, якщо потрібно
  document.body.style.overflow = "hidden";
});

// Закрити чат
closeChat.addEventListener("click", () => {
  chatModal.classList.remove("is-open");
  document.body.style.overflow = "";
});

// Закриття кліком на темний фон (якщо він буде)
chatModal.addEventListener("click", (e) => {
  if (e.target === chatModal) {
    chatModal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
});
