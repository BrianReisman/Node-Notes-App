//require seems to always be passed a string
//require seems to be the import of node. import is to JS as require is to node.
// const fs = require("fs"); //*core Node modules we type out the name
// const validator = require("validator"); //*for NPM modules we use the package name.
const log = console.log;

//?core mods first
const fs = require("fs");
//?npm packages second
const notes = require("../notes-app/notes"); //*our local files we pass the relative path //? can be one function or an object of functions
const yargs = require("yargs");
//?our own files
const chalk = require("chalk");

// customize yarge version
yargs.version("1.1.0");

//Creat add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, //*false by default. Makes Required
      type: "string", //*specify required type
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
    // log("Title: " + argv.title); //*.title matches with title above within this command config objefct
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove note",
  builder: {
    //*'builder' is a keyword
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List out notes",
  handler() {
    notes.listNotes()
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    }
  },
  handler(argv){
    notes.readNote(argv.title);
  },
});

yargs.parse();
// log(yargs.argv); //*this does something allowing other calls to work if you don't have yargs.parse() called.

// <<!write, test, and maintain!>>
