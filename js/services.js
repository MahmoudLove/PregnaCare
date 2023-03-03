const inputArea = document.querySelector(".secmap__form-select");
const mapEl = document.querySelector(".map");
let curentMarekers = [];
let map;
const areas = {
  glem: {
    start: [31.244561826464093, 29.966211710264083],
    startDes: "مكتب صحة - سان ستيفانو \ntel: 03 5846292",
    places: [
      [31.233611592809766, 29.97217099231851],
      [31.23121241406471, 29.972433165068264],
      [31.239370901268913, 29.96455013823804],
      [31.218545664974304, 29.985758412313768],
      [31.268986504535484, 30.026728336359618],
    ],
    description: [
      "مركز صحة الأسرة باكوس المحروسة قسم ثان رمل 035012054",
      "مكتب صحة السيوف ٢٦ المنشار قسم تاني رمل 035014381",
      "مركز  الأمل لصحة الأسرة عبد الحي العاقصة وباكوس قسم ثان الرمل الإسكندرية 03 3922635",
      " مركز صحة الأسرة بحجر النواتية حجر النواتية Qesm AR Ramel",
      " 03 5525001 العمراوي قسم ثان المنتزة الإسكندرية الإسكندرية مركز صحة أسرة العمراوي",
    ],
  },
  montazah: {
    start: [31.23121241406471, 29.972433165068264],
    startDes: "مكتب صحة - سان ستيفانو \ntel: 03 5846292",
    places: [
      [31.233611592809766, 29.97217099231851],
      [31.239370901268913, 29.96455013823804],
      [31.218545664974304, 29.985758412313768],
      [31.268986504535484, 30.026728336359618],
    ],
    description: [
      "مركز صحة الأسرة باكوس المحروسة قسم ثان رمل 035012054",
      "مكتب صحة السيوف ٢٦ المنشار قسم تاني رمل 035014381",
      "مركز  الأمل لصحة الأسرة عبد الحي العاقصة وباكوس قسم ثان الرمل الإسكندرية 03 3922635",
      " مركز صحة الأسرة بحجر النواتية حجر النواتية Qesm AR Ramel",
      " 03 5525001 العمراوي قسم ثان المنتزة الإسكندرية الإسكندرية مركز صحة أسرة العمراوي",
    ],
  },
  moharem: {
    start: [31.1946224, 29.9207885],
    startDes: "العنوان: 8 الوزير، أمبروز ومحرم بك، محرم بك، الإسكندرية 5413455",

    places: [31.1946224, 29.9207885],
    description: [
      "العنوان: 8 الوزير، أمبروز ومحرم بك، محرم بك، الإسكندرية 5413455",
    ],
  },
  dekhela: {
    start: [31.1359361, 29.8178008],
    startDes: "العنوان : الدخيله كورنيش بجوار مدرسه بلال بن رباح ",
    places: [
      [31.1359361, 29.8178008],
      [31.121043739082975, 29.791395650869628],
    ],
    description: [
      ["العنوان: البيطاش الشارع الجديد شارع الشيخ احمد ياسين"],
      "العنوان : الدخيله كورنيش بجوار مدرسه بلال بن رباح ",
    ],
  },
  mandara: {
    start: [],
    startDes: [],
    places: [],
    description: [],
  },
  seyof: {
    start: [],
    startDes: [],
    places: [],
    description: [],
  },
  karmoz: {
    start: [],
    startDes: [],
    places: [],
    description: [],
  },
};

inputArea.addEventListener("change", function () {
  const selectedArea = inputArea.value.toLowerCase();
  if (!selectedArea) return;
  map.setView(areas[selectedArea].start, 15, {
    animate: true,
    pan: {
      duration: 1,
    },
  });
  if (curentMarekers.length > 0) removeMarkers();
  for (let i = 0; i < areas[selectedArea].places.length; i++) {
    renderMarker(
      areas[selectedArea].places[i],
      areas[selectedArea].description[i]
    );
  }
  renderMarker(areas.glem.start, areas.glem.description[0]);
});

function loadMap(coords) {
  map = L.map(mapEl).setView(coords, 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}
function removeMarkers() {
  curentMarekers.forEach((marker) => map.removeLayer(marker));
}
function renderMarker(location, description) {
  let marker = L.marker(location)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 200,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `description`,
      })
    )
    .setPopupContent(`${description}`)
    .openPopup();
  curentMarekers.push(marker);
}

loadMap(areas.glem.start);

//form logic
const Hname = document.querySelector(".name");
const month = document.querySelector(".month");
const question = document.querySelector(".question");
const number = document.querySelector(".number");
const adress = document.querySelector(".adress");
const submitBtn = document.querySelector(".secinfo__form-btn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const objToSend = {};
  objToSend.name = Hname.value;
  objToSend.month = month.value;
  objToSend.question = question.value;
  objToSend.number = number.value;
  objToSend.adress = adress.value;
  if (Hname.value.length < 10 || !Hname.value) return;
  if (!month.value || month.value * 1 > 9 || month.value * 1 < 1) return;
  if (question.value.length < 30 || !question.value) return;
  if (adress.value.length < 10 || !adress.value) return;
  if (number.value.length < 11 || !number.value || number.value.length > 13)
    // return;
    submitBtn.textContent = "Submitting";
  setTimeout(() => {
    submitBtn.textContent = "✓ Submitted";
    Hname.value =
      month.value =
      question.value =
      number.value =
      adress.value =
        "";
  }, 2000);
  setTimeout(() => (submitBtn.textContent = "Submit agian"), 6000);
});
const headerIcon = document.querySelector(".header__icon");
headerIcon.addEventListener("click", function (e) {
  headerIcon.closest("header").classList.add("open");
});

const headerIconClose = document.querySelector(".nav__close-icon");

headerIconClose.addEventListener("click", function (e) {
  headerIconClose.closest("header").classList.remove("open");
});
