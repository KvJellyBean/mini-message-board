const express = require("express");
const path = require("path");
const home = require("./routes/index");
const newMessage = require("./routes/new");

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", home);
app.use("/new", newMessage);

// 404 Error
app.use((req, res, next) => {
  res.status(404).render("404");
});

// 500 Error
app.use((err, req, res, next) => {
  res.status(500).render("500");
});

app.listen(port, () => {
  console.log(`Application running at http://localhost:${port}`);
});
