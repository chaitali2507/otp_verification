var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: false
    },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    otp: { type: String, required: false },
   
});
module.exports = mongoose.model("otp", userSchema);