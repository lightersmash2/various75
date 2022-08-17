const express = require("express");

const app = express();

app.get("/:page", (request, response) => {
  var id = request.params.page;
  // do something with id
    // send a response to user based on id
    var obj = { id : id, Content : "content " +id };

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(obj));
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
