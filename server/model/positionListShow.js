var mongoose = require('mongoose');

var positionListShowSchema = mongoose.Schema({
    companyLogo:String,
    position:String,
    company:String,
    place:String,
    date:String,
    education:String,
    money:String,
    url:String
}) 
module.exports = mongoose.model("positionListShowSchema",positionListShowSchema);