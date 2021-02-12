const { shoeController } = require('../controllers');
const { isAuthNeededMiddleware } = require('../utils')


module.exports = (router) => {
    router.get('/all', isAuthNeededMiddleware(), shoeController.get.all);
    router.get('/create', isAuthNeededMiddleware(), shoeController.get.create);
    router.get('/edit/:shoeId', isAuthNeededMiddleware(), shoeController.get.edit);
    router.get('/details/:shoeId', isAuthNeededMiddleware(), shoeController.get.details)
    router.get('/delete/:shoeId', isAuthNeededMiddleware(), shoeController.get.delete)

    router.post('/create', isAuthNeededMiddleware(), shoeController.post.create)
    router.post('/edit/:shoeId', isAuthNeededMiddleware(), shoeController.post.edit)

    return router
}