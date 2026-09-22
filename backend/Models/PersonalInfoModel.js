//DEFINIÇÃO DO MONGOOSE
import mongoose  from "mongoose"
const mongoose = require("mongoose")
const schema = mongoose.Schema

//COLLETION CREATION//
const PersonalINfo= new Schema({

name:{
    type: String,
    required: true
},
email:{
    type: String,
},
phone:{
    type: String,
    required: true
},
link:{
    type: String
},
location:{ 
    type:String,
    required:true
}

}
)