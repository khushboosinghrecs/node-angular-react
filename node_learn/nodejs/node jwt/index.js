
const express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const jsonwebtoken = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res)=>{
    res.json({
        message: 'my app is ready',
    })
})

app.post('/api/posts', verifyToken, (req, res)=>{
    jsonwebtoken.verify(req.token, 'secretkey', (err, authData)=>{
        if(err){
            res.sendStatus(403)
        }else{

        }
    })
})

app.post('/api/login', (req, res)=>{
    const user ={
        id: 1,
        username: 'john',
        email: 'john@gmail.com'
    };

    jsonwebtoken.sign({user: user}, 'secretkey', (err, token)=>{
        res.json({
            token,
        });
    });
})

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}


app.listen(3000, (req, res)=>{
    console.log('app is listening on 3000 port');
})