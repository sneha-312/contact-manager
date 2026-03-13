
const Contact = require("../models/Contact");

exports.createContact = async(req,res)=>{

const contact = new Contact({
...req.body,
userId:req.userId
});

await contact.save();

res.json(contact);
};

exports.getContacts = async(req,res)=>{

const contacts = await Contact.find({userId:req.userId});

res.json(contacts);
};

exports.updateContact = async(req,res)=>{

await Contact.findByIdAndUpdate(req.params.id,req.body);

res.json({message:"Contact Updated"});
};

exports.deleteContact = async(req,res)=>{

await Contact.findByIdAndDelete(req.params.id);

res.json({message:"Contact Deleted"});
};
