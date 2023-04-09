// dependencies
const express = require("express");

// sets the port
const PORT = process.env.PORT || 3001;

// sets express app
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
app.use("/html", require("./routes/html"));
app.use("/api", require("./public/assets/js/index.js"));

// listener
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
