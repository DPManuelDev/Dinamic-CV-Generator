import mongoose from "mongoose"
//const mongoose = require("mongoose")
const schema = mongoose.Schema

const Language = new schema({
    name:{
        type: String
    },
    CV:{
        type: schema.Types.ObjectId,
        ref: CV
    }
})