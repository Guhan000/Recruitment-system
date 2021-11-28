const express = require('express')
const app = express()

// app.use(express.static("public"));

// app.use(express.json())
// app.use(express.urlencoded());

app.use(express.urlencoded({ extended: true }))

const db = require('./config/db')
db();

app.get("/",(req,res) => {
    res.sendFile('./view/Landing_page.html',{root: __dirname })
})

const hr = require('./routes/hr')
app.use('/hr',hr)

const candidate = require('./routes/candidate')
app.use('/cand',candidate)

app.post('/hrlogin',(req,res) => {
    res.send("Heyy")
})

// app.get("/hr/login",(req,res) => {
//     res.sendFile('./view/Hr/Hr_login.html',{root: __dirname })
// })

// app.get("/hr/compose",(req,res) => {
//     res.sendFile('./view/Hr/Job-Compose.html',{root: __dirname })
// })

app.listen(3000);


// home pg post for cand and hr
// cand profile jobs applied 