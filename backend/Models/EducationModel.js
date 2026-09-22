
import mongoose  from "mongoose"
const mongoose = require("mongoose")
const schema = mongoose.schema

const Education = new schema({

    course:{
        type:String,
        required: true
    },
    institution:{
        type: String
    },
    start_date:{
        type: Date
    },
    end_date:{
        type: Date
    },

})