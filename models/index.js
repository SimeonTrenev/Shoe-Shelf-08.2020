const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const getUserModel = require('./User')
const getShoesModel = require('./Shoe')

module.exports = {
    User: getUserModel(mongoose, bcrypt),
    Shoe: getShoesModel(mongoose)
};