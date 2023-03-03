const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");

const app = express();
const mainRouter = express.Router();

app.use(express.json());

const port = 5000;
app.listen(port, () => console.log(`server started at port ${port}`));

const mainPage = JSON.stringify(fs.readFileSync("./index.html", "utf-8"));
const mainPageFn = async function (req, res) {
  console.log(`${__dirname}/..`, `index.html`);
  res.sendFile(`${__dirname}/..`, `index.html`);
};
app.use("/", mainRouter);
mainRouter.route("/").get(mainPageFn);
