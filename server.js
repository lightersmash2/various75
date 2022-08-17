const express = require("express");
var http = require('http');

const app = express();

app.get("*", (request, response) => {
  //The url we want is: 'www.random.com/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'www.roblox.com',
  path: '/'
};
var str = '';
callback = function(response) {

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
response.send(str)
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
