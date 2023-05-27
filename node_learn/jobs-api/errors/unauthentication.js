const {StatusCode} = require('http-status-codes');
const CustomerAPIError = require('./custom-api');

class UnauthenticatedError extends CustomerAPIError {
    constructor(message){
        super(message);
        this.StatusCode = StatusCodes.UNAUTHORISED;
    }
}

module.exports = UnauthenticatedError;