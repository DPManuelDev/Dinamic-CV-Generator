import mongoose  from "mongoose"
const mongoose = require("mongoose")
const schema = mongoose.Schema()

const Experience= new schema({
role:{
    type:String,
    required: true
},
company:{
    type: String,
    required: true
},
period:{
    type: Date
},
description:{
    type: Text
},
CV:{
    type: schema.Types.ObjectId,
    ref: "CV"
}

})