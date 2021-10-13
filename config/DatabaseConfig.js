const mongoose = require("mongoose");

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log(`DataBase Connected : ${conn.connection.host}`);
    }
    catch(error) {
        console.log(`DataBase Failed To Connect : ${error}`);
        process.exit(1);
    }
};

 module.exports = ConnectDB;