
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{

const {name,email,password} = req.body;

const hash = await bcrypt.hash(password,10);

const user = new User({
name,
email,
password:hash
});

await user.save();

res.json({message:"User Registered"});
};

exports.login = async(req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.json({message:"User not found"});
}

const match = await bcrypt.compare(password,user.password);

if(!match){
return res.json({message:"Invalid password"});
}

const token = jwt.sign(
{id:user._id},
process.env.JWT_SECRET
);

res.json({token});
};
