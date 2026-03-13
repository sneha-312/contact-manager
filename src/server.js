
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Database Connected"))
.catch(()=> console.log("DB Connection Error"));

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);

app.get("/",(req,res)=>{
res.send("ConnectHub API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log("Server running on PORT",PORT);
});
