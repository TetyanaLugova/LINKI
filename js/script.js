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

// Вибираємо ВСІ кнопки з цим класом
const modalTriggers = document.querySelectorAll(".btn-get-modal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

// Функція для закриття (виніс в окрему функцію, щоб не дублювати код)
const handleCloseModal = () => {
  modalOverlay.classList.remove("is-open");
  document.body.style.overflow = "";
};

// Проходимо циклом по кожній знайденій кнопці
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    modalOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
});

// Закрити через кнопку
closeModal.addEventListener("click", handleCloseModal);

// Закрити кліком на темний фон
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    handleCloseModal();
  }
});

// (Опціонально) Закриття клавішею Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("is-open")) {
    handleCloseModal();
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
});

// Не забудь оновити функцію закриття, щоб при наступному відкритті знову була форма
document.getElementById("closeModal").addEventListener("click", () => {
  setTimeout(() => {
    formContent.style.display = "block";
    thankYouContent.style.display = "none";
    mainForm.reset(); // Очищуємо поля
  }, 300); // Чекаємо поки модалка закриється візуально
});

// Отримуємо всі кнопки
const chatStartBtns = document.querySelectorAll(".chat-start-btn");
const chatModal = document.getElementById("chatModal");
const closeChat = document.getElementById("closeChat");

// Проходимо циклом по кожній кнопці і додаємо подію
chatStartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    chatModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
});

// Закрити чат (тут все правильно, бо кнопка закриття одна)
closeChat.addEventListener("click", () => {
  chatModal.classList.remove("is-open");
  document.body.style.overflow = "";
});

// Закриття кліком на фон
chatModal.addEventListener("click", (e) => {
  if (e.target === chatModal) {
    chatModal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
});

const swiper = new Swiper(".myProcessSwiper", {
  // Головне налаштування для фіксованої ширини:
  slidesPerView: "auto",
  spaceBetween: 20, // Відступ між картками
  freeMode: true, // Дозволяє плавно скролити без жорсткої фіксації (опціонально)

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Якщо хочете, щоб слайди все одно "приліпали" до країв при скролі:
  centeredSlides: false,
  grabCursor: true,
});

let advantagesSwiper = null;

function handleAdvantagesSwiper() {
  const swiperElement = document.querySelector(".advantages-swiper");
  if (!swiperElement) return;

  const isMobile = window.innerWidth < 1280;

  if (isMobile) {
    // Показуємо Swiper, ховаємо гріду (якщо потрібно)
    swiperElement.classList.remove("grid-mode");

    if (!advantagesSwiper) {
      // Ініціалізація Swiper
      advantagesSwiper = new Swiper(".advantages-swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        grabCursor: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  } else {
    // Перемикаємось на grid режим
    swiperElement.classList.add("grid-mode");

    if (advantagesSwiper) {
      // Знищуємо Swiper
      advantagesSwiper.destroy(true, true);
      advantagesSwiper = null;

      // Очищуємо інлайнові стилі Swiper
      const wrapper = swiperElement.querySelector(".swiper-wrapper");
      if (wrapper) {
        wrapper.removeAttribute("style");
      }

      const slides = swiperElement.querySelectorAll(".swiper-slide");
      slides.forEach((slide) => slide.removeAttribute("style"));
    }
  }
}

// Використовуємо 'DOMContentLoaded' замість 'load' для швидшого спрацювання
window.addEventListener("DOMContentLoaded", handleAdvantagesSwiper);
window.addEventListener("resize", handleAdvantagesSwiper);

const reviewsSwiper = new Swiper(".reviews-slider", {
  // Головне налаштування для фіксованої ширини:
  slidesPerView: "auto",
  spaceBetween: 20, // Відступ між картками
  freeMode: true, // Дозволяє плавно скролити без жорсткої фіксації (опціонально)

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Якщо хочете, щоб слайди все одно "приліпали" до країв при скролі:
  centeredSlides: false,
  grabCursor: true,
});

const blogSwiper = new Swiper(".blog-slider", {
  // Swiper візьме ширину з CSS .swiper-slide { width: ... }
  slidesPerView: "auto",
  spaceBetween: 24, // Відстань між картками
  centeredSlides: false,
  grabCursor: true,

  // Навігація стрілками
  navigation: {
    nextEl: ".blog-next",
    prevEl: ".blog-prev",
  },

  // Пагінація у вигляді лінії (progressbar)
  pagination: {
    el: ".blog-pagination",
    type: "bullets",
  },

  // Дозволяє плавно скролити мишкою або пальцем
  freeMode: {
    enabled: true,
    sticky: true,
  },
});
