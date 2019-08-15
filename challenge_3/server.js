const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const path = require('path');
const Sequelize = require('sequelize');
const db = require('./database/index.js');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//initializes the table 
db.Shopper.sync({force: true});

app.post('/checkout', (req, res) => {
  db.Shopper.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
    console.log("Jane's auto-generated ID");
  }).catch(error => {
    console.log(error);
  });
});


app.listen(port, () => console.log(`App listening on port ${port}!`));

