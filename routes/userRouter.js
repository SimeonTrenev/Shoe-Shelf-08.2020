const { userController } = require('../controllers');
const { registerMiddleware, loginMiddlewareValidator, isAuthNeededMiddleware } = require('../utils')


module.exports = (router) => {
    router.get('/login', isAuthNeededMiddleware(false), userController.get.login);
    router.get('/register', isAuthNeededMiddleware(false), userController.get.register);
    router.get('/profile', isAuthNeededMiddleware(false), userController.get.profile)
    router.get('/logout', isAuthNeededMiddleware(true), userController.get.logout);

    router.post('/login', isAuthNeededMiddleware(false), loginMiddlewareValidator,  userController.post.login);
    router.post('/register', isAuthNeededMiddleware(false), registerMiddleware, userController.post.register)

    return router;
};