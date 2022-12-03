const notes = require('express').Router()

const {readFile, readAndAppend}= require('../helpers/fsUtils')

notes.get('/notes', function(req, res){
  readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

//POST route for new notes 
notes.post('/notes', function(req, res){
    readAndAppend(req.body, './db/db.json');
    res.json('Note saved!');
   
});

module.exports =  notes;