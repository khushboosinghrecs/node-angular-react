const CustomerAPIError = require('./custom-api');
const UnauthenticatedError = require('./unauthentication');
const NotFoundError = require('./not-found');
const BadRequestError =require('./bad-request');

module.exports ={
    CustomerAPIError,
    UnauthenticatedError,
    NotFoundError,
    BadRequestError

}