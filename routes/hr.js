const express = require('express')
var path = require('path')
const Hr = require('../models/Hr')

const router = express.Router()

const JobPost = require('../models/JobAnnouncement')

// api --->  /hr
router.get('/login',(req,res) => {
    res.sendFile(path.resolve(__dirname,"../view/Hr/Hr_login.html"))
})

router.get('/hr-home',(req,res) => {
    res.sendFile(path.resolve(__dirname,"../view/Hr/Hr_home.html"))
})

router.get("/compose",(req,res) => {
    res.sendFile(path.resolve(__dirname,"../view/Hr/Job-Compose.html"))
})

router.get("/registration",(req,res) => {
    res.sendFile(path.resolve(__dirname,"../view/Hr/hr_regeistration.html"))
})

router.post("/hr-reg",async (req,res) => {
    const {name,email,password,company} = req.body

    try{
        let hr = new Hr({
            name,
            email,
            company,
            password
        })
        await hr.save()
        console.log("hr reg  saved");
    }catch{
        console.error(err.message)
        res.status(500).message('Server error!')
    }
})

router.post("/job-announcement",async (req,res) => {
    // console.log(req.body.title);
    const {title,skills_required,description,salary} = req.body

    try{
        let post = new JobPost({
            title,
            skills_required,
            description,
            salary
        })
        await post.save()
        console.log("post saved in db");
}
catch(err){
    console.error(err.message)
    res.status(500).message('Server error!')
}
})

router.post('/hrlogin',async (req,res) => {
    const {email,password} = req.body
    
    try{
        let hr = await Hr.findOne({email})
        console.log("Loggedd");
        if(!hr){
            return res.status(400).json({errors : errors.array()})
        }
        if(password == hr.password){
            res.sendFile(path.resolve(__dirname,"../view/Hr/Hr_home.html"))
        }
    }
    catch(err){
        console.error(err.message)
        res.status(500).message('Server error!')
    }
})

module.exports = router;