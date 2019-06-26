var mongoose = require('mongoose');

var citysSchema = mongoose.Schema({
    citys:Array
})
module.exports = mongoose.model("citysSchema",citysSchema);