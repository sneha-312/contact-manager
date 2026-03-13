
const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");

const {
createContact,
getContacts,
updateContact,
deleteContact
} = require("../controllers/contact.controller");

router.post("/",auth,createContact);
router.get("/",auth,getContacts);
router.put("/:id",auth,updateContact);
router.delete("/:id",auth,deleteContact);

module.exports = router;
