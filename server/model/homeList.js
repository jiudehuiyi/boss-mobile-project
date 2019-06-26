var mongoose = require('mongoose');

var homeListSchema = mongoose.Schema({
    url:String,
    title:String,
    tags:Array
})

module.exports = mongoose.model("homeListSchema",homeListSchema);