//!Module
//*When requiring a local file, use relative path as a string
//* with just require('./utils'); naked in the file, when app.js is run, so too is utils.js
//* the name you use locally as a return from require are bananas.
//!guided
// const addFunc = require("./utils");
// console.log(addFunc);
// const sum = addFunc(4, -2)
// console.log(sum);
//!solo
//* Note: Module(singular).exports(plural). "This module(singular), all exports(plural)"
// const getNotes = require('../notes-app/notes');
// const message = getNotes()
// console.log(message)
// console.log(getNotes)

//!File System + Require
//*the core of the module system is the require() function
//*call the require() function and provide it with a string.
//*the require() function returns all of the stuff from that module which we need to store in a variable.
//*the fs variable is a banana but the string 'fs' is *not*.
//const fs = require('fs');

//*fs.writeFile - is async
//*fs.writeFileSync - is a sync function that takes two arguments. 1. file name 2. the data/content
//*if the file doesn't exist, it will be created. If the file does exist it will be updated/overwritten.
//fs.writeFileSync('notes.txt', 'now wssssssssssssssshat?');
//fs.appendFileSync('notes.txt', ' have I been appended not upended??')


//!
// *this is where we define all of the things THIS FILE should share with other files.
// * what is supplied to module.exports is availible as the 'return value' for when you require the file.
// module.exports = add;
