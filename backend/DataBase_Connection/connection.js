import mongoose  from "mongoose"
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost/CVBuilderDb").then( () =>{
console.log("connection stabilished successfuly")
}).catch((err) =>{
    console.log("Somethingo went wrong, try again" + erro)
} )

