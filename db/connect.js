const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

uri = process.env.MONGODB_URL

const connectDB = () =>{
    return mongoose.connect(uri,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then()
        .catch(err => console.log(err));
}

module.exports = connectDB;