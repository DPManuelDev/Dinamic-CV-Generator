

const mongoose = require("mongoose")
const schema = mongoose.Schema

const CV = new Schema({

    title:{
        type: String,
        required: true
    },
    template:{
        type: String,
        required: true
    },
    summary:{
        type: Text,

    },
    img_path:{
        type: Text
    },
    isPublic:{
        type: Boolean
    },

    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type: Date,
        default:Date.now()
    },

    template :{
        type: Schema.Types.ObjectId,
        ref:"template",
        required:true
    },

    user: {
        type: Schema.Types.ObjectId,
        Ref: "user",
        required:true
    }

})