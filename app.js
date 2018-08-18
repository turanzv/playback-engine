// DEPENDENCIES
const fs = require("fs"); // for JSON parsing
const express = require("express"); // for endpoint management

let set_data = fs.readFileSync("data/set.json");
let author_data = fs.readFileSync("data/author.json");
let set_json = JSON.parse(set_data);
let author_json = JSON.parse(author_data);

// establish routing points
const app = express();
const port = 8000;
app.listen(port, () => {
    console.log("Server is LIVE on port 8000 ... ")

    // establish connection

    // shuffle and output a song recommendation

    // play song (via afplay)

});



