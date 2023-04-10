// dependencies
const html = require("express").Router();
const path = require("path");

// get route for notes.html
html.get("/notes", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// get route for index.html
html.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// if no route found, default to index.html
html.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// export
module.exports = html;
