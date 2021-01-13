require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const ConnectDB = require("./config/DatabaseConfig");
const cors = require("cors");
const TodoRoutes = require("./routes/TodoRoutes");

const PORT = 3100 || process.env.PORT;

const app = express();

// Creating application/json Parser 
app.use(bodyParser.json());

// Creating application/x-www-form-urlencoded Parser
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
ConnectDB();

// 3rd Party Dependency
app.use(cors());
app.use('/api/', TodoRoutes);

app.get('/', (req, res) => {
    res.json({
        msg: "API Working SuccessFully"
    });
})

app.listen( PORT, () => {
    console.log(`Server is Running at ${ PORT }`);
} );