const express = require("express");
const Jimp = require("jimp");
const imgcheck = require("is-an-image-url");
const urlvalid = require("url-valid");
const fs = require("fs");

const app = express();


app.get("/get-info-from-img", (request, response) => {
  
  try{
    imgcheck(request.query.url, function(isimggg){
      var isimg = true; // issues are appearing...
      if(isimg){
        Jimp.read(request.query.url).then(image => {
          image.resize(parseInt(request.query.neww), parseInt(request.query.newh));

          var GetStuff = {
            "imgsize": {
              "width": image.bitmap.width, 
              "height": image.bitmap.height
            },
            "pixels": {

            }
          }

          for(var h = 0; h <= image.bitmap.height; h++){
            for(var w = 0; w <= image.bitmap.width; w++){
              GetStuff.pixels[w + ":" + h] = Jimp.intToRGBA(image.getPixelColor(w, h));
            }
          }

          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(JSON.stringify(GetStuff));
          response.end();
        }).catch(err => {
          response.writeHead(500, {"Content-Type": "text/html"});
          response.write("An error occured: Could not retrieve img from URL"+String(err));
          response.end();
        });
      }
      else {
        response.writeHead(500, {"Content-Type": "text/html"});
        response.write("An error occured: Invalid URL");
        response.end();
      }
    });
  }catch(err){
    response.writeHead(500, {"Content-Type": "text/html"});
    response.write(err.message);
    response.end();
  }
  
});

app.get("/valid-url-check", (request, response) => {
  urlvalid(request.query.url, function (err, valid) {
    if(valid && !err){
      response.writeHead(500, {"Content-Type": "text/html"});
      response.write(request.query.url + " - Valid URL");
      response.end();
    }else if(!valid && !err){
      response.writeHead(500, {"Content-Type": "text/html"});
      response.write(request.query.url + " - Invalid URL");
      response.end();
    }else if(err){
      response.writeHead(500, {"Content-Type": "text/html"});
      response.write("Error: " + err.message);
      response.end();
    }
  });
  
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/main.html");
});
    
const listener = app.listen(process.env.PORT, function() {}); // keeping there for stability
