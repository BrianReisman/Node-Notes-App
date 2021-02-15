  //the core of the module system is the require() function
  //call the require() function and provide it with a string.
  //the require() function returns all of the stuff from that module which we need to store in a variable.
  //the fs variable is a banana but the string 'fs' is *not*.
const fs = require('fs');

  //fs.writeFile - is async
  //fs.writeFileSync - is a sync function that takes two arguments. 1. file name 2. the data/content
  //if the file doesn't exist, it will be created. If the file does exist it will be updated/overwritten.
// fs.writeFileSync('notes.txt', 'Now I saw.... what?');

fs.appendFileSync('notes.txt', ' have I been appended not upended??')