const mongoose = require('mongoose')



const candidateSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    job_applied:{
        type:String
    }
})

module.exports = mongoose.model('candidate',candidateSchema)//directly exporting the model