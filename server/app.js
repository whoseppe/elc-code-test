const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Fuse = require("fuse.js");
const jsonData = require("./data");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configures Fuse.js options for fuzzy searching
const fuseOptions = {
  includeScore: true,
  isCaseSensitive: false,
  shouldSort: true,
  keys: ["name", "tags"], // Specifies the property/properties to search
};

// API endpoint for searching
app.post("/api/search", (req, res) => {
  const searchTerm = req.body.searchTerm;

  // Create a new Fuse instance with the JSON data and options
  const fuse = new Fuse(jsonData, fuseOptions);

  // Perform the fuzzy search
  const searchResults = fuse.search(searchTerm).map((result) => result.item);

  res.json(searchResults);
});

const port = 3035;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
