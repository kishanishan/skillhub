const mongoose = require("mongoose");

const Allemp = new mongoose.Schema({
    
    institutionName : {
        type: String,
        required : true,
    },
    headofInstitution : {
        type: String,
        required : true,
    },
    primarymail : {
        type: String,
        required : true,
    },
    secondarymail : {
        type: String,
        required : true,
    },
    primarycontact: {
        type: String,
        required : true,
    },
    secondarycontact: {
        type: String,
        required : true,
    },
    Adress: {
        type: String,
        required : true,
    },
    city: {
        type: String,
        required : true,
    },
    state: {
        type: String,
        required : true,
    },
    institutioncode: {
        type: String,
        required : true,
    },
    institutiontype: {
        type: String,
        required : true,
    },
    accessplan: {
        type: String,
        required : true,
    },
    password: {
        type: String,
        required : true,
    },
    batchYear: {
        type: String,
        required : true,
    },
    batch: {
        type: String,
        required : true,
    },
    type : {
        type :  String,
        required : true
    }

})

const institutionDetails = mongoose.model("governament", Allemp);

module.exports = institutionDetails;