const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'host',
    password: ''
})

db.connect(err=>{
    if(err){
        throw err;
    }
    console.log('mysql connected');
})

const app = express();

app.get('/createdb', (req, res)=>{
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, err =>{
        if(err){
            throw err;
        }
        res.send('Database Created');
    })
})
//create table
app.get('/createemployee', (req, res)=>{
    let sql = 'CREATE TABLE employee(id int AUTO_INCREAMENT, name VARCHAR(255), PRIMARY KEY(id)'
    db.query(sql, err=>{
    if(err){
        throw err;
    }
    res.send('Employee table created');
    })
}
)
//insert employee 

app.get('/employee1', (req, res)=>{
    let psot = {name: 'khushi singh', designation: 'sde2'}
    let sql = 'INSERT INTO employee SET 2';
    let query = db.query(sql, post, err =>{
        if(err){
            throw err;
        }
        res.send('Employee created');
    })
})

//insert employee 
app.get('/employee', (req, res)=>{
let sql = 'INSERT * FROM employee';
let query = db.query(sql, (err, results)=>{
    if(err){
        throw err;
    }
    console.log(results);
    res.send(' employee details fetched')
})
})

//update employee
app.get('/updateemployee/:id', (req, res)=>{
    let newName = 'Updated name';
    let sql =`UPDATE employee SET name =${newName} where id = ${req.params.id}`;
    let query = db.query(sql, err=>{
        if(err){
            throw err;
        }
        res.send('employee updated')
    })
})

//delete employee
app.get('/deleteemployee/:id', (req, res)=>{
    let sql =  `DELETE FROM employee WHERE id =${req.params.id}`
    let query = db.query(sql, err=>{
        if(err){
            throw err;
        }
        res.send('employee updated')
    })
})
app.listen('3000', ()=>{
    console.log('Server started on port 3000');
})