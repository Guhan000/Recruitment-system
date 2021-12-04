const express = require('express')
var path = require('path')
const Candidate = require('../models/Candidate')

const router = express.Router()

router.get('/candlogin',(req,res) => {
    res.sendFile(path.resolve(__dirname,'../view/Candidate/cand_login.html'))
})

router.get('/candreg',(req,res) => {
    res.sendFile(path.resolve(__dirname,'../view/Candidate/cand_reg.html'))
})

router.get('/jobApplied',(req,res) => {
    res.sendFile(path.resolve(__dirname,'../view/Candidate/job_applied.html'))
})

router.post('/candreg',async (req,res) => {
    const {name,email,age,password} = req.body

    try{
        console.log("before");
        let cand = new Candidate({
            name,
            age,
            email,
            password,
            job_applied:null
        })
        await cand.save()
        console.log("after");
    }
    catch(err){
        console.error(err.message)
        res.status(500).json('Server error!')
    }
})

router.post('/candlogin',async (req,res) => {
    const {email,password} = req.body

    try {
        let cand = await Candidate.findOne({email})
        if(!email){
            return res.status(400).json({errors : errors.array()})
        }
        if(password == cand.password){
            res.sendFile(path.resolve(__dirname,"../view/Candidate/cand_home.html"))
        }
        else{
            res.sendFile(path.resolve(__dirname,"../view/Error.html"))
        }
    } catch (error) {
        
    }
})

module.exports=router;