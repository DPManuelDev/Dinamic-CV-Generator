const mingoose = require("mongoose")
const schema = mongoose.Schema

const Certificate = new schema({
certName:{
    type: String,
    required: true
},
institution:{
    type: String
},

cvId:{
    type: schema.Types.ObjectId
}
})