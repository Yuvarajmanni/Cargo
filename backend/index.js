const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const Cargo=require('./router/cargo')
const app = express();
app.use(express.json());
app.use(cors())
const url="mongodb://localhost:27017/Cargo-Containers"
mongoose.connect(url)
.then((_)=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log(err.message);
})
app.use(Cargo);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
