var mongoose = require('mongoose');

var positionDetailSchema = mongoose.Schema({
    pathname:String,
    search:String,
    test:String,
    positionInformation:Object,
    tranPeople:Object,
    positionDescription:Object,
    collectionIntroduction:Object,
    companyInformation:Object,
    workPlace:Object,
    companyIntroduction:Object,
    similarPosition:Array,
    recomCompany:Array,
    footerFont:String
})

module.exports = mongoose.model('positionDetailSchema',positionDetailSchema);

