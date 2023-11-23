const mongoose = require("mongoose");

const Alluser = new mongoose.Schema({
    institutionType : {
        type: String,
        required : true,
    },
    institutionName : {
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
    firstname: {
        type: String,
        required : true,
    },
    lastname: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
    },
    registerID: {
        type: String,
        required : true,
    },
    mobilenumber: {
        type: String,
        required : true,
    },
    password: {
        type: String,
        required : true,
    },
    accessperiod: {
        type: String,
        required : true,
    },
    expireddate: {
        type: String,
        required : true,
    },
    status: {
        type: String,
        required : true,
    },
    type : {
        type :  String,
        required : true
    }

})

const userdetails = mongoose.model("user", Alluser);

module.exports = userdetails;