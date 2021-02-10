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
    }
}