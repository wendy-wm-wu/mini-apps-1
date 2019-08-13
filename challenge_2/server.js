
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const port = 3000; 
const morgan = require('morgan');

app.use(morgan('combined'))
app.use(express.static('client'));


app.post('/upload_json', (req,res) => {
    res.send('POST request recieved'); 
    //respond with another page that contains the form and CSV report 
    //insert the result of the data processing step into the HTML of the response 
});

app.get('/upload_json', (req, res) => {
    // res.sendFile(path.join(__dirname, '/client/index.html'));
    // res.render('index', {title: 'Hey', message: 'Hello there!'})
});



app.listen(port, () => console.log(`Example app listening on port ${port}!'`)); 

