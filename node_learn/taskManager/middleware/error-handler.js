const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: 'Something went wrong pls tye again'});
    }

    return res.status(500).json({msg: 'Something wend wrong, please try again'})
}

module.exports = errorHandlerMiddleware;