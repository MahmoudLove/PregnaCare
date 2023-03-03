const headerIcon = document.querySelector(".header__icon");
headerIcon.addEventListener("click", function (e) {
  headerIcon.closest("header").classList.add("open");
});

const headerIconClose = document.querySelector(".nav__close-icon");

headerIconClose.addEventListener("click", function (e) {
  headerIconClose.closest("header").classList.remove("open");
});
