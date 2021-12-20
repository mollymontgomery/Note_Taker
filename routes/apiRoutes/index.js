// https://expressjs.com/en/guide/routing.html I used this site to learn more on routing
const router = require('express').Router()
const path = require("path")
const fs = require('fs');
// https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"))
})

router.post("/notes", (req, res) => {
    const { title, text } = req.body;

    const newNote = {
        title: req.body.title,
        test: req.body.text,
        // id will generate random id calls from line 5
        id: uuidv4()
    };

    console.log("newNote", newNote)

    fs.readFile(path.join(__dirname, "../../db/db.json"), 'utf-8', (err, data) => {
        const parsedNotes = JSON.parse(data)
        parsedNotes.push(newNote)
        console.log("data from db.json", parsedNotes)

    fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(parsedNotes), (err) => {
        if (err) throw err;
        console.log("Saved!")
        })
    })

    res.sendFile(path.join(__dirname, "../../db/db/json"))
})



module.exports = router;