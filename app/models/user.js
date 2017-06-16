// app/models/user.js
// INITILIAZE your model here

var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);