// const settings = {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     "x-app-id": "109fa9ce",
//     "x-app-key": "1d0d73da7afe4c6af36129cd0e3367d2",
//     "x-remote-user-id": "0",
//     "cache-control": "no-cache",
//   },
//   body: {
//     query: "french toast",
//     timezone: "US/Eastern",
//   },
// };
// const fetchFood = async () => {
//   try {
//     const data = await fetch(
//       "https://trackapi.nutritionix.com/v2/natural/nutrients",
//       settings
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchFood();
// // data: "{\n ”query“: ”1 cup spinach“,\n ”num_servings“: 1,\n ”aggregate“: ”string“,\n ”line_delimited“: false,\n ”use_raw_foods“: false,\n ”include_subrecipe“: false,\n ”timezone“: ”US/Eastern“,\n ”consumed_at“: null,\n ”lat“: null,\n ”lng“: null,\n ”meal_type“: 0,\n ”use_branded_foods“: false,\n ”locale“: ”en_US“\n }",
// http://api.serpstack.com/search
//     ? access_key = YOUR_ACCESS_KEY
//     & query = mcdonalds

// document.querySelector("#form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const query = document.querySelector("#search").value;
//   console.log(query);
//   const api_key = "c9129569d05c9662ba06bb1dcf734d1d";
//   const url = `http://api.serpstack.com/search?access_key=${api_key}&type=web&query=${query}`;
//   console.log(url);
//   fetch(url).then(async (data) => console.log(await data.json()));
// });

// document.querySelector("#form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const query = document.querySelector("#search").value;

//   window.open(`https://www.drugs.com/pregnancy/${query}.html`);
// });
const api_key = "AIzaSyBiF2Mx9v0hlg-a1GZvvJ8hnQjV9fO_Eo0";
const cx = "f35f5d588e34645ed";
const url = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${cx}:omuauf_lfve&q=aspirin`;
fetch(url)
  .then((res) => res.json())
  .then((res) => console.log(res));
