let app = require('../server').app;
var User = require('../server').User;
var port = 3000; 
const Sequelize = require('sequelize');
const sequelize = new Sequelize('users', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


const Shopper = sequelize.define('user', {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  }, {
    // options
  });





module.exports = {
    Shopper: Shopper
};