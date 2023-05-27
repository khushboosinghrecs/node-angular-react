const User = require('../models/User')
const jwt = require('jsonwebtoken');

const auth = async(req, res, next )=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new 
    }
}