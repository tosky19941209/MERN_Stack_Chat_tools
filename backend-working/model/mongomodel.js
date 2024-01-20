const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    password : {
        type : String, 
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phonenumber : {
        type : Number,
    }

})

const userInfo = mongoose.model("userInfo", userSchema)

module.exports = userInfo