var mongoose = require('mongoose');

var testSchema = mongoose.Schema({
    name:String,
    age:Number,
    job:String
})

module.exports = mongoose.model("test",testSchema);