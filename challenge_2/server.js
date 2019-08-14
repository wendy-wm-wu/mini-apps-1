
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const port = 3000; 
const morgan = require('morgan');
const bodyParser = require('body-parser')
const App = require('./client/app.js')

app.use(morgan('combined'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/upload_json', (req,res) => {
    let parsedReqBody = JSON.parse(req.body['input-box']); 
    let employeeData = App.recurse(parsedReqBody); 
    console.log(employeeData)
    res.set('Content-Type', 'text/plain'); 
    res.send(employeeData); 
});

app.get('/upload_json', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'));
    // res.render('index', {title: 'Hey', message: 'Hello there!'})
});



app.listen(port, () => console.log(`Example app listening on port ${port}!'`)); 









