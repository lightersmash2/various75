const express = require("express");
const app = express()
app.get("/", (request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("nerd test");
  response.end();
}
