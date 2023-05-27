const mongoose = require('mongoose');
const url = `mongodb://localhost:27017/StoreaApi`;
const connectDB = ()=>{
    return mongoose.connect(url , {
        useNewUrlParser : true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;