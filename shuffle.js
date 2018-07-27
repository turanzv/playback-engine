
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var size_of_library = 3; // TODO get this from the JSON

/**
 * recursive function that tries to play a given set according to the algorithm above
 * rotation = one iteration of all sets in the library
 * @param {JSONObject} library 
 * @param {JSONObject} rotation_history 
 */
function shuffle(library, rotation_history) {
    // TODO = stagger the playtimes so there's a buffer zone between songs to allow for potentially long file I/O work
    // generate random set choice
    let choice = getRandomInt(size_of_library-1);

    // verify validity of choice by looking it up in the rotation history

    // if necessary, reset rotation history by changing up the JSON attributes


    player.play('filepath')
        .then(() => {
            // mark song as played

            // increment total play count

            // recursive call
            
        })
        .catch(error => {
            // TODO refactor to change behavior after certain number of retries?
            console.log('Playback error. Re-trying ... ');
            // recursive call

        });
}



