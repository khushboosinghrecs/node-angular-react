const express = require('express');
const app = express();

// app.get('/', (req, res)=>{
//     res.send('hello world');
// })

app.use(express.json());
app.use(express.urlencoded({'extented': false}));
app.use('/api/users', require('./routes/api/user'))


app.listen('3000',()=>{
    console.log('server started on 3000');
})