const express = require("express");
const app = express();
//it is midlleware ,we can create a lot
app.use((req, res, next) => {
  console.log("welcome to new world of coding");
  next();
});
app.get("/", (req, res) => {
  res.end("shreekanth");
});
//here we are making a error
app.get("/profile", (req, res, next) => {
  next(new Error("something went wrong"));
});

//it is error hanlder
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(3000);
