const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

});

// Create a model using the schema
module.exports = mongoose.model('user', UserSchema);
