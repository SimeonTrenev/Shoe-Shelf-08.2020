const mongoose = require('mongoose')
const getUserModel = require('./User')

module.exports = {
    User: getUserModel(mongoose)
}