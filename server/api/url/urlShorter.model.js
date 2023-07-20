const mongoose = require('mongoose');
const shortId = require('shortid');

const Schema = mongoose.Schema;

const urlShorterSchema = new Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        require: true,
        default: 0
    }
})

module.exports = mongoose.model('UrlShorter', urlShorterSchema);