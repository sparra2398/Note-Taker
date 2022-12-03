const express = require('express'); 
const path = require('path');
const PORT = process.env.PORT || 3001;
const notes = require('./routes/notes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

app.use('/api', notes)

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'/public/index.html'));
})

app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.listen(PORT, function() {
    console.log('Server listening' + PORT)
});