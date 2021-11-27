const mongoose = require('mongoose')



const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    skills_required:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('post',postSchema)//directly exporting the model