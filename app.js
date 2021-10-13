const express = require("express");
const ConnectDB = require("./config/DatabaseConfig");
const cors = require("cors");

const PORT = 5000 || process.env.PORT;

const app = express();

// Creating application/json Parser 
app.use(express.json());
// Creating application/x-www-form-urlencoded Parser
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV === 'development') {
    require("dotenv").config();
}

// Database Connection
ConnectDB();

// 3rd Party Dependency
app.use(cors());
app.use('/api/auth', require("./routes/Auth.route"));
app.use('/api/user', require("./routes/User.route"));
app.use('/api/todo', require("./routes/Todo.route"));

app.listen( PORT, () => {
    console.log(`Server is Running at ${ PORT }`);
});