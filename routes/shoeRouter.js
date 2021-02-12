const { shoeController } = require('../controllers');

module.exports = (router) => {
    router.get('/all', shoeController.get.all);
    router.get('/create', shoeController.get.create);
    router.get('/edit/:shoeId', shoeController.get.edit);
    router.get('/details/:shoeId', shoeController.get.details)
    router.get('/delete/:shoeId', shoeController.get.delete)

    router.post('/create', shoeController.post.create)
    router.post('/edit/:shoeId', shoeController.post.edit)

    return router
}