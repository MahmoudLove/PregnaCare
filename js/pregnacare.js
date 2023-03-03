// bmi logic -------------------------------
// (A) CHANGE BMI MEASURING SYSTEM
const weight = document.querySelector("#bmi-weight");
const height = document.querySelector("#bmi-height");
const btnShowForm = document.querySelector(".drugs__intro-link");
btnShowForm.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".bmi-container").classList.toggle("open");
});
function measureBMI() {
  const unit = document.querySelector(".bmi-metric").checked;
  const results = document.querySelector(".bmi-results");

  // (A2) UPDATE HTML FORM FIELDS
  // TRUE = METRIC, FALSE = IMPERIAL
  if (unit) {
    weight.placeholder = "KG";
    weight.min = 1;
    weight.max = 635;
    weight.value = "";
    height.placeholder = "CM";
    height.min = 54;
    height.max = 272;
    height.value = "";
    results.style.display = "none";
  } else {
    weight.placeholder = "LBS";
    weight.min = 2;
    weight.max = 1400;
    weight.value = "";
    height.placeholder = "IN";
    height.min = 21;
    height.max = 107;
    height.value = "";
    results.style.display = "none";
  }
}

// (B) CALCULATE BMI
function calcBMI() {
  // (B1) GET HTML ELEMENTS
  let bmi = null;
  const unit = document.querySelector(".bmi-metric").checked; // true = metric, false = imperial
  let weight = +document.querySelector("#bmi-weight").value;
  let height = +document.querySelector("#bmi-height").value;
  const results = document.querySelector(".bmi-results");

  // (B2) CALCULATE BMI
  // METRIC BMI = MASS (KG) / HEIGHT (M) SQUARE
  if (unit) {
    height = height / 100;
    bmi = weight / (height * height);
  }
  // IMPERIAL BMI = 703 X MASS (LBS) / HEIGHT (IN) SQUARE
  else {
    bmi = 703 * (weight / (height * height));
  }
  // ROUND OFF
  bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places

  results.style.display = "block";

  // (B3) SHOW RESULTS
  if (bmi < 18.5) {
    results.innerHTML = "Your BMI is: " + bmi + " - Underweight";
  } else if (bmi < 25) {
    results.innerHTML = "Your BMI is: " + bmi + " - Normal weight";
  } else if (bmi < 30) {
    results.innerHTML = "Your BMI is: " + bmi + " - Pre-obesity";
  } else if (bmi < 35) {
    results.innerHTML = "Your BMI is: " + bmi + " - Obesity class I";
  } else if (bmi < 40) {
    results.innerHTML = "Your BMI is: " + bmi + " - Obesity class II";
  } else {
    results.innerHTML = "Your BMI is: " + bmi + " - Obesity class III";
  }
  return false;
}

//bmi logic --------------------------------------

//food logic -------------------------------------
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
//food logic ------------------------------------
