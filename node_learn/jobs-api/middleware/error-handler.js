const { StatusCode } = require ('http-status-codes')
const { CustomerAPIError } = require('../errors')
const errorHandlerMiddleware = (err, req, res, next) =>{
    let cunstomError = {
        StatusCode : err.StatusCode || StatusCode.TNTERNAL_SERVER_ERROR,
        msg: err.message | 'Something went wrong try again later',
    }

    if(err.name === 'VAlidationError'){
        CustomerAPIError.msg = Object.values(err.errors).map((item)=>item.message)
    .join(',')
    CustomerAPIError.statusCode = 400
  }
  if(err.code && err.code ===11000){
    cunstomError.msg = `Duplicate value entered for ${Object.keys(
        err.keyValue
      )} field , please choose another value`
      cunstomError.statusCode = 400
  }
  if(err.name === 'CastError'){
    cunstomError.msg = `No item found with id : ${err.value}`
    cunstomError.statusCode = 404
  }
  return res.status(cunstomError.statusCode).json({msg: customError.msg })
}

module.exports = errorHandlerMiddleware