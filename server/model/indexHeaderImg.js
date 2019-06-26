var mongoose = require("mongoose");

var headerImgSchema = mongoose.Schema({
    url:String,
    description:String
});
module.exports = mongoose.model("indexHeaderImg",headerImgSchema);
