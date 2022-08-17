const express = require("express");

const app = express();

app.get("*", (request, response) => {
  response.send(request.originalUrl);
});
app.post("*", (request, response) => {
  response.send(request.originalUrl);
});
app.patch("*", (request, response) => {
  response.send(request.originalUrl);
}); 
app.delete("*", (request, response) => {
  response.send(request.originalUrl);
});
const listener = app.listen(process.env.PORT, function() {}); // keeping there for stability
