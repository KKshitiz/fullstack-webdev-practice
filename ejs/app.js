const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

var tasks = [];
var work_tasks = [];
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.post("/", function (req, res) {
  console.log(req.body);

  if (req.body.button === "Work") {
    work_tasks.push(req.body.task);
    res.redirect("/work");
  } else {
    tasks.push(req.body.task);
    res.redirect("/");
  }
});
app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { kindOfDay: day, tasks: tasks });
});
app.get("/work", function (req, res) {
  res.render("list", { kindOfDay: "Work", tasks: work_tasks });
});

app.get("/about", function (req, res) {
  res.render("about");
});
app.listen(3000, function () {
  console.log("server started on port 3000");
});
