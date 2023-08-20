const express = require("express");
const port = 3000;
const app = express();
const dotenv = require("dotenv");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

dotenv.config();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/main");

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.render("home");
  // if (req.user) {
  //   res.redirect("/posts/timeline/all");
  // } else {
  //   res.render("home");
  // }
});

app.listen(process.env.PORT || port, () => {
  console.log("Server is running on port 3000.");
});
