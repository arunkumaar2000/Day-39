const fs = require("fs"); 
const { join } = require("path");


fs.readdir(".", (err, files) => {
  if (err) {
    console.log("Error in Dir File");
  } else {
    console.log(files);
  }
});



