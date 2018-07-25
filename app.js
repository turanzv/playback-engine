// DEPENDENCIES
const fs = require("fs"); // for JSON parsing
const express = require("express"); // for endpoint management



var set_data = fs.readFileSync("data/set.json");
var author_data = fs.readFileSync("data/author.json");
var set_json = JSON.parse(set_data);
var author_json = JSON.parse(author_data);

// debug
console.log();
console.log("*START*");
console.log("---");
console.log("set: " + JSON.stringify(set_json, null, "\t"));
console.log();
console.log("author: " + JSON.stringify(author_json, null, "\t"));
console.log("---");
console.log("*END*");
console.log();

// establish routing points
const app = express();
const port = 8000;
app.listen(port, () => {
    console.log("Server is LIVE on port 8000 ... ")

    // establish connection

    // shuffle and output a song recommendation

    // play song (via afplay)

});



