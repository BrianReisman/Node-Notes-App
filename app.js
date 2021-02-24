//require seems to always be passed a string
//require seems to be the import of node. import is to JS as require is to node.
// const fs = require("fs"); //*core Node modules we type out the name
const getNotes = require("../notes-app/notes"); //*our local files we pass the relative path
const validator = require("validator"); //*for NPM modules we use the package name.

const message = getNotes();
console.log(message);


// console.log(validator.isEmail('brian@aol.com')); //=> true
// console.log(validator.isEmail('aol.com')); //=> false
console.log(validator.isURL('www.iwantedBrian.com')) //true //! note isURL is case sensitive
console.log(validator.isURL('iwantedBrian.com')) // true
console.log(validator.isURL('iwantedBrian')) // false
console.log(validator.isURL('www.iwantedBrian')) // true //! what??