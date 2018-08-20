
/*
 * SIMPLE ALGORITHM:
 * 1. randomly select a set
 * 2. if it hasn't been played before, play it and update the total number of set you've played so far
 *    if not, try again
 * 3. once your counter reaches the total number of songs you have, all available sets have been
 *    played once! reset all indicators and continue
*/ 

const Afplay = require('afplay');
const fs = require('fs');
const path = require('path');
const mm = require('music-metadata');


// Instantiate a new player
const player = new Afplay;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let size_of_library = 5; // TODO get this from JSON
let num_played = 0;

// console.log(library.stuff);

/**
 * recursive function that tries to play a given set according to the algorithm above
 * rotation = one iteration of all sets in the library
 * @param {JSONObject} library 
 * @param {JSONObject} rotation_history 
 */

function shuffle() {
    // TODO = stagger the playtime so there's a buffer zone between songs to allow for potentially long file I/O work

    //read directory
    fs.readdir('music', (err, stats) => {
        //while there are still songs to play
        while (stats.indexOf('.DS_Store') != -1){
            stats.splice(stats.indexOf('.DS_Store'), 1);
        }
        console.log('These are the stats: ', stats)
        while (stats.length > 0) {
            // get random song choice
            let index = getRandomInt(size_of_library - 1);
            filepath_ = 'music/' + stats[index];
            fs.exists(filepath_, (exists) => {
                console.log('checking is The file exists: ', exists);
            });

            console.log('this is what is playing: ', filepath_);

            // read id3 metadata
            mm.parseFile(filepath_, {native: true})
                .then()
                .catch();

            // play random song
            let busy = true
            player.play(filepath_, {/*volume: 50,*/ time: 5})
                .then(() => {
                    busy = false;
                    console.log('busy has been set to false'); // this isn't working
                })
                .catch(error => {
                    // TODO refactor to change behavior after certain number of retries?
                    console.log(error)
                    console.log('Playback error: ', stats[index]);
                    busy = false;
                });
            // remove song from queue
            if(busy) {
                console.log('busy is true');
            } else {
                console.log('busy is false');
            }
            stats.splice(index, 1);
        }
        // TODO play after stats is drained
    });
}

shuffle();
