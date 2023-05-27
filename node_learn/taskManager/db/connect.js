const mongoose = require('mongoose');
const url = `mongodb://localhost:27017/taskManager`;
const connectDB = (url)=>{
    return mongoose.connect('mongodb://localhost:27017/taskManager', {
        useNewUrlParser : true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
    })
}
// const url = `mongodb://localhost:27017/taskManager`;
// const connectDB = (url)=>{
//     return mongoose.connect(url,
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// )};

module.exports = connectDB;