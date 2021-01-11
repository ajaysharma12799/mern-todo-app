const mongoose = require("mongoose");

const DBConfig = mongoose.connect(process.env.DBURL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})

module.exports = DBConfig;