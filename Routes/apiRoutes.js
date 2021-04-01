const router = require("express").Router();
const fs = require("fs");

router.get("/notes", function (req, res) {
    // console.log(savedNotes());
    return res.json(savedNotes());
});

router.post("/notes", function (req, res) {
    let newNote = req.body;
    updatedNotes(newNote);
    return res.json(newNote);
});


router.delete("/notes/:id", function (req, res) {
    let id = parseInt(req.params.id);
    // console.log(req);
    const db = fs.readFileSync(path.join(__dirname, 'db/db.json'), 'utf8')
    console.log(db);

    let newArray = JSON.parse(db).filter(note => note.id !== id );
    console.log(newArray);

    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(newArray)) 

    res.sendFile(path.join(__dirname, './db/db.json'), 'utf8');

});

// save and update note functions
function savedNotes() {

    const savedNotes = JSON.parse(fs.readFileSync(path.join(__dirname, './db/db.json'), 
    'utf8'));

    return savedNotes;
}

const updatedNotes = newNote => {
    const notes = savedNotes();
    console.log(notes, newNote);

    
    notes.push({
        ...newNote,
        id: notes.length+1
    });
    if (notes) {
        // console.log(notes);
    }
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(notes))
};

module.exports = router;