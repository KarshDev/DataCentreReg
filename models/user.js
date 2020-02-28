const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User =new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    }

});

module.exports = mongoose.model('users', User);
