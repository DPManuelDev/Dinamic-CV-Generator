import mongoose  from "mongoose"
const mongoose = require("mongoose")
const ObjectId = Schema.ObejectId
const schema = mongoose.Schema


const Skill = new schema({

    skillname:{
        type: String,
        require: true
    },

    CV:{
        type: Schema.Types.ObejectId,
        ref: CV      
    },

})