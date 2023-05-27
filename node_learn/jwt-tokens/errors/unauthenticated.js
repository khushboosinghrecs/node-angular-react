const CustomApiError = require('./curstom-error')
const {StatusCodes }= require('http-status-codes');
class UnauthenticatedError extends CustomApiError{
    constructor(message){
        super(message)
        this.StatusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError