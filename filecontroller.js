/*
 * Listens for changes to the file system and updates JSON accordingly
 */

const music_metadata = require("music-metadata");
const util = require("util");



music_metadata.parseFile("music/live_intern_hour_1532635200.mp3", {native: true})
    .then(function (metadata) {
        console.log(util.inspect(metadata, { showHidden: false, depth: null }));
    })
    .catch(function (err) {
        console.error(err.message);
    });
