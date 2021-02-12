const jwt = require('./jwt')
const auth = require('./auth')
const registerMiddleware = require('./registerMiddleware');
const formValidator = require('./formValidator')

module.exports = {
    jwt,
    auth,
    registerMiddleware,
    formValidator,
    
}