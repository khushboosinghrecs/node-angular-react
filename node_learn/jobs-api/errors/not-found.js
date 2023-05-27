const {StatusCodes} = require('http-status-codes');
const CustomerAPIError = require('./custom-api');

class NotFoundError extends CustomerAPIError{
    constructor(message){
        super(message)
        this.StatusCode = StatusCodes.NOT_FOUND;
    }
}

module.exportsn = NotFoundError;