require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const dbConfig = require('./config/DatabaseConfig');

const PORT = 3100 || process.env.PORT;

const app = express();

// Creating application/json Parser 
app.use(bodyParser.json());

// Creating application/x-www-form-urlencoded Parser
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
dbConfig
.then( () => {
    console.log("DataBase Connected Successfully");
} )
.catch( (error) => {
    console.log("DB Failed To Connect " + error);
} )

app.listen( PORT, () => {
    console.log(`Server is Running at ${ PORT }`);
} );