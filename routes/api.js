// dependencies
const note = require("express").Router();
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

// get route for db.json
note.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// post route for db.json
note.post("/api/notes", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid.v4(),
    };
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(parsedNotes), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Note saved!");
            res.json(parsedNotes);
          }
        });
      }
    });
  } else {
    res.error("Error in saving note");
  }
});

// delete route for db.json
note.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const parsedNotes = JSON.parse(data);
      const newNotes = parsedNotes.filter((note) => note.id !== id);
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(newNotes), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Note deleted!");
          res.json(newNotes);
        }
      });
    }
  });
});
