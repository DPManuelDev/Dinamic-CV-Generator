import mongoose from "mongoose";
const  mongoose = require("mongoose");

const schema = new mongoose.Schema

const CVVersion = new schema({
    cvId :{
        type: schema.Types.ObjectId,
        ref: "CV",
        required: true
    }
})