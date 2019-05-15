const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    composer: {
        type: String,
        required: true
    },
    refrain: {
        type: String,
        required: true
    },
    verses: {
        type: String
    },
    copyright: String,
    render: Boolean
},
{ collection: 'library'});

module.exports = mongoose.model('Library', LibrarySchema);