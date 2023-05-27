require("./model/db")

const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');
const studentController = require('./controller/studentController');

var app = express();
var util= require('util');
var encoder = new util.TextEncoder('utf-8');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.get('/', (req, res)=>{
    res.send(
       ` <h2>welcome to Student Database</h2>
        <h3>Click here to get access to the <b><a href="/student/list" >Database</a></b></h3>`
    )
})

app.set('views', path.join(__dirname, '/views'));
app.engine('hbs',exphbs.engine({
        handlebars: allowInsecurePrototypeAccess(handlebars),
        extname: 'hbs',
        defaultLayout: 'mainLayouts',
        layoutsDir: __dirname+'/views/layouts/'
    })
);

app.set('view engine', 'hbs');


app.listen(3000, ()=>{
    console.log('server started on 3000 port');
})

app.use("/student", studentController);