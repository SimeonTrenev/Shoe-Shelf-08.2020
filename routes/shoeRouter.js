const { shoeController } = require('../controllers');

module.exports = (router) => {
    router.get('/all', shoeController.get.all);
    router.get('/create', shoeController.get.create);
    router.get('/edit', shoeController.get.edit);
    router.get('/details/:shoeId', shoeController.get.details)

    router.post('/create', shoeController.post.create)

    return router
}