const fs = require("fs");

const chalk = require('chalk');

const log = console.log;

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes(); //we loadNotes from multiple place so making this a discrete function allows us to reuse without rewriting

  const duplicateNotes = notes.filter((note) => {
    //returns a subset. if we return true, we keep it, if we return false we trash it
    return note.title === title; //will evalutate to true or false.
  });

  //*defensive coding - handling potentional errors/duplicates
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    log(chalk.green.inverse("new note added!"));
  } else {
    log(chalk.red.inverse("note title TAKEN!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  
  const remainingNotes = notes.filter(note => {
    return note.title !== title
  })

  if(notes.length > remainingNotes.length){
    console.log(chalk.green.underline(title) + ' ' + chalk.green.inverse(`has successfully been removed.`))
    saveNotes(remainingNotes)
  } else {
    console.log(chalk.red('No note by that name found.'))
  }

};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    //"if we get any errors in try, stop and execute catch logic"
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    //e = error
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();

  log(chalk.inverse("Your notes: "))

  notes.forEach(note => {
    log(note.title)
  })
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote, listNotes
  // removeNote: removeNote,
};
