const express = require("express");
const path = require("path");
const home = require("./routes/index");
const newMessage = require("./routes/new");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", home);
app.use("/new", newMessage);

app.listen(port, () => {
  console.log(`Application running at http://localhost:${port}`);
});
