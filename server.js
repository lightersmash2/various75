const express = require("express");
const Jimp = require("jimp");
const imgcheck = require("is-an-image-url");
const urlvalid = require("url-valid");
const fs = require("fs");

const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/main.html");
});
    
const listener = app.listen(process.env.PORT, function() {}); // keeping there for stability
