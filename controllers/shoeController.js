    const { Shoe } = require('../models')
 

module.exports = {
    get: {
        all(req, res, next) {
            res.render('./shoes/shoes.hbs')
        },
        create(req, res, next) {
            res.render('./shoes/create.hbs')
        },
        edit(req, res, next) {
            res.render('./shoes/edit.hbs')
        },
        details(req, res, next) {
            res.render('./shoes/details.hbs')
        }
    },
    post: {
        create(req, res, next) {
            Shoe
            .create({ ...req.body, sallesman: req.user._id })
            .then(createdShoeOffer => {
                console.log(createdShoeOffer)
                res.redirect('/shoes/all')
            })
            .catch(err => console.log(err))
        }
    }
}