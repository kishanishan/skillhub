const mongoose = require("mongoose");

const Alluser = new mongoose.Schema({
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
    password: {
        type: String,
        required : true,
    },
    primarymail : {
        type: String,
        required : true,
    },
    type: {
        type : String,
        required: true,
    }

})

const userData = mongoose.model("userData", Alluser);

module.exports = userData;