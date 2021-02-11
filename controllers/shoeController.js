    const { Shoe } = require('../models')
 

module.exports = {
    get: {
        all(req, res, next) {

            Shoe
            .find({})
            .lean()
            .then(shoes => {
                console.log(shoes)
                res.render('./shoes/shoes.hbs', {
                    shoes
                });
            })
            .catch(err => console.log(err))
            
        },
        create(req, res, next) {
            res.render('./shoes/create.hbs')
        },
        edit(req, res, next) {
            res.render('./shoes/edit.hbs')
        },
        details(req, res, next) {
            console.log(req.params.shoeId)
            Shoe
            .findOne({ _id: req.params.shoeId})
            .lean()
            .then(shoe => {
                res.render('./shoes/details.hbs', {...shoe});
            })
            .catch(err => console.log(err))
        }
    },
    post: {
        create(req, res, next) {
            Shoe
            .create({ ...req.body, salesman: req.user._id })
            .then(createdShoeOffer => {
                console.log(createdShoeOffer)
                res.redirect('/shoes/all')
            })
            .catch(err => console.log(err))
        }
    }
}