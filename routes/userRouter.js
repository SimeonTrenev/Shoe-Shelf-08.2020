const { userController } = require('../controllers');
const { registerMiddleware } = require('../utils')

module.exports = (router) => {
    router.get('/login', userController.get.login);
    router.get('/register', userController.get.register);
    router.get('/profile', userController.get.profile)
    router.get('/logout', userController.get.logout);

    router.post('/login', userController.post.login);
    router.post('/register', registerMiddleware, userController.post.register)

    return router;
};