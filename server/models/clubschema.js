const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    clubName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    leader: {
        type: String,
        required: true
    },
    coLeader: {
        type: [String], // Array of strings
        required: true
    },
    members: {
        type: [String], // Array of strings
        required: true
    }
});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;
