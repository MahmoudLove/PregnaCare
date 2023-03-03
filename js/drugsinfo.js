document
  .querySelector(".secsearch__form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.querySelector(".secsearch__input").value;
    if (!query) return;
    window.open(`https://www.drugs.com/pregnancy/${query}.html`);
  });

const foodContainer = document.querySelector(".drugs__info");
foodContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("drugs__info-btn")) return;
  if (e.target.closest(".collapse-container").classList.contains("open")) {
    e.target.closest(".collapse-container").classList.remove("open");
  } else {
    const allCollapseContainer = document.querySelectorAll(
      ".collapse-container"
    );

    allCollapseContainer.forEach((con) => con.classList.remove("open"));
    const collapseContainer = e.target.closest(".collapse-container");
    collapseContainer.classList.add("open");
  }
});

//navigation
const headerIcon = document.querySelector(".header__icon");
headerIcon.addEventListener("click", function (e) {
  headerIcon.closest("header").classList.add("open");
});

const headerIconClose = document.querySelector(".nav__close-icon");

headerIconClose.addEventListener("click", function (e) {
  headerIconClose.closest("header").classList.remove("open");
});
