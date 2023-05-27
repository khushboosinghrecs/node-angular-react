const mongoose = require('mongoose');
const url = `mongodb://localhost:27017/StudentDb`;

mongoose.connect(url, {
    useNewUrlParser : true
} );

err =>{
    if(!err){
        console.log('Connection happened successfully')
    } else{
        console.log('error in connection', err);
    }
}

require('./student.model');