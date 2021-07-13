const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        require: [true, "setup is required"],
        minlength: [10, "setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        require: [true, "punchline is required"],
        minlength: [3, "punchline must be at least 3 characters long"]
    },
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;