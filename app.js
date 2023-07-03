const express = require("express");
const path = require("path");
const app = express();

// important to static both views and public folder
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { title: "My TODO App" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
