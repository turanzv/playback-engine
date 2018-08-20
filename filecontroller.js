/*
 * Listens for changes to the file system and updates JSON accordingly
 */

const fs = require("fs");
const music_metadata = require("music-metadata");
const util = require("util");
const path = require('path');

let library = {
    contents: []
};

let set = {
    id: "",
    filepath: ""
};

// TODO add listener to update this when new files are added
fs.watch('music/', (eventType, filename) => {
    console.log(eventType, filename)
    if (eventType ==  'rename' && path.extname(filename) == '.mp3') {
        console.log('mp3 found')
        //TODO check if the MP3 exists in JSON

        //TODO update JSON, size of the library
    }
});

function updateSets() {
    // read music directory
    let filesystem = 0;
    fs.readdir('music', (err, stats) => {
        for (let i = 0; i < stats.length; i ++) {
            let file = stats[i];
            // skip hidden files
            if (file.charAt(0) != '.') {
                // find .mp3's
                if(path.extname(file) == '.mp3') {
                    console.log(file)
                    //TODO add/check set in sets.json
                }
            } else {
                continue;
            }
        }
        // filesystem = stats
    });
}

updateSets()

music_metadata.parseFile("music/live_intern_hour_1532635200.mp3", {native: true})
    .then(function (metadata) {
        console.log(util.inspect(metadata, { showHidden: false, depth: null }));
    })
    .catch(function (err) {
        console.error(err.message);
    });


