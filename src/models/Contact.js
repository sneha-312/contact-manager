
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},
name:String,
email:String,
phone:String,
notes:String,
tags:[String]
},{timestamps:true});

module.exports = mongoose.model("Contact",contactSchema);
