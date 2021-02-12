const jwt = require('./jwt')
const authMiddleware = require('./authMiddleware')
const registerMiddleware = require('./registerMiddleware');
const formValidator = require('./formValidator')
const loginMiddlewareValidator = require('./loginMiddlewareValidator')
const isAuthNeededMiddleware = require('./isAuthNeededMiddleware')

module.exports = {
    jwt,
    authMiddleware,
    registerMiddleware,
    formValidator,
    loginMiddlewareValidator,
    isAuthNeededMiddleware,

}