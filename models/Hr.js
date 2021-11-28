const mongoose = require('mongoose')



const hrSchema = mongoose.Schema({
    name:{
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
    company:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('hr',hrSchema)//directly exporting the model