const { userController } = require(".");
const { User } = require("../models"); // === index.js

module.exports = {
  get: {
    login(req, res, next) {
      res.render("./user/login.hbs");
    },
    register(req, res, next) {
      res.render("./user/register.hbs");
    },
    profile(req, res, next) {
      res.render("./user/profile.hbs");
    },
  },
  post: {
    login(req, res, next) {
      console.log(req.body);
    },
    register(req, res, next) {
      userController.User.create({ ...req.body })
        .then((createdUser) => {
          console.log(createdUser);
        })
        .catch((err) => console.log(err));
    },
  },
};
