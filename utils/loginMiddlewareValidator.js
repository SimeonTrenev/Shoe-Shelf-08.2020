const { body } = require('express-validator')

module.exports = [
    body('email', 'The provided email is not valid!').isEmail(),
    body('password', 'Your password should be at least 5 characters').isLength({ min: 5 }),
];

