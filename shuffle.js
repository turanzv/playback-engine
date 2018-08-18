
/*
 * SIMPLE ALGORITHM:
 * 1. randomly select a set
 * 2. if it hasn't been played before, play it and update the total number of set you've played so far
 *    if not, try again
 * 3. once your counter reaches the total number of songs you have, all available sets have been
 *    played once! reset all indicators and continue
*/ 

let Afplay = require('afplay');
 
// Instantiate a new player
const player = new Afplay;
const fs = require('fs');
const path = require('path');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let size_of_library = 5; // TODO get this from JSON
let num_played = 0;

var library = JSON.parse("{\n" +
    "  \"stuff\": [\n" +
    "    {\n" +
    "      \"id\": \"1\",\n" +
    "      \"filepath\": \"music/720.mp3\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": \"2\",\n" +
    "      \"filepath\": \"Aux Cord Jams_1532372400.mp3\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": \"3\",\n" +
    "      \"filepath\": \"in.mp3\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": \"4\",\n" +
    "      \"filepath\": \"Live_Intern Hour_1532635200.mp3\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": \"5\",\n" +
    "      \"filepath\": \"Live_it's eclectic_1532102400.mp3\"\n" +
    "    }\n" +
    "  ]\n" +
    "}");
var queue = [];
/*
fs.readFile("data/library.json", function (err, data) {
    if (err) throw err;
    library = JSON.parse(data);
    // console.log(library);
});
fs.readFile("data/queue.json", function (err, data) {
    if (err) throw err;
    queue = JSON.parse(data);
    // console.log(queue);
});
*/

console.log(library);
console.log(queue);

// console.log(library.stuff);

/**
 * recursive function that tries to play a given set according to the algorithm above
 * rotation = one iteration of all sets in the library
 * @param {JSONObject} library 
 * @param {JSONObject} rotation_history 
 */

function shuffle(library) {
    // TODO = stagger the playtimes so there's a buffer zone between songs to allow for potentially long file I/O work
    // generate random set choice
    let choice = getRandomInt(size_of_library-1);

    // verify validity of choice by looking it up in the rotation history
    let filepath_ = library.stuff[num_played].filepath;
    // if necessary, reset rotation history by changing up the JSON attributes


    player.play(filepath_, {time: 5})
        .then(() => {
            // mark song as played
            num_played++;
            shuffle(library);
            // increment total play count

            // recursive call
        })
        .catch(error => {
            // TODO refactor to change behavior after certain number of retries?
            console.log('Playback error. Re-trying ... ');
            // recursive call

        });
}

shuffle(library);



