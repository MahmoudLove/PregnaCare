const puppeteer = require("puppeteer");
import { Browser } from "puppeteer";
// async function milkScrapper(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   const [el] = await page.$$("item-columns");
//   console.log(await el.jsonValue());
//   browser.close();
// }

// milkScrapper("https://www.infantrisk.com/");
const url = "https://books.toscrape.com/";
const main = async function () {
  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  const bookData = await page.evaluate((url) => {
    const bookPads = Array.from(document.querySelectorAll(".product__pod"));
    const data = bookPads.map((book) => ({
      title: book.querySelector("h3 a").getAttribute("title"),
      price: book.querySelector(".price_color").innerText,
      imageSrc: url + book.querySelector("img").getAttribute("src"),
      rating: book.querySelector(".start-rating").classList[1],
    }));
    return data;
  }, url);
  console.log(bookData);
  await browser.close();
};

main();
