"use strict";

//import log from "./config/log.config.js";
import express from "express";
import routes from "./routes";
import bodyParser from "body-parser"

///import d3 from "d3";
//import c3 from "c3";

const PORT = 5000;
const HOST = "0.0.0.0";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(express.static(__dirname + "/c3d3"));

app.get("/", (req, res) => {
  res.send("Ave Mundus!!\n");
});

app.use("/c3", routes.router);

const options = {
  inflate: true,
  limit: 1000,
  defaultCharset: "utf-8"
};

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json("error");
});


app.listen(PORT, HOST);