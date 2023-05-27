const { StatusCodes } = require('http-status-codes');
const CustomerAPIError = require('./custom-api');

class BadRequestError extends CustomerAPIError{
    constructor(message){
        super(message);
        this.StatusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequestError;