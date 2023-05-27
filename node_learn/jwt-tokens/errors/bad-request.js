const CustomApiError = require('./curstom-error')
const {StatusCodes} = require('http-status-codes');

class BadRequest extends CustomApiError{
    constructor(message){
        super(message)
        this.StatusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest