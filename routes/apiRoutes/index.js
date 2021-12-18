const router = require('express').Router()
const path = require("path")
const fs = require('fs');

router.get("/notes", (req, res)=>(
    res.sendFile(path.join(__dirname, "../../db/db.json"))
))

router.post("/notes", (req, res)=>(


    fs.readFile(path.join(__dirname, "../../db/db.json"), 'utf-8', (err, data)=>{
        const parsedNotes = JSON.parse(data)
        console.log("Data from db.json", parsedNotes)
    })
))

module.exports = router;