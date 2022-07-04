const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/main.html");
});
    
const listener = app.listen(process.env.PORT, function() {}); // keeping there for stability
