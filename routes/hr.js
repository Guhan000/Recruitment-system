const express = require('express')
var path = require('path')

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

module.exports = router;