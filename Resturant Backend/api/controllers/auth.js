const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");
const saltRounds = 10;

module.exports.signup = (req, res, next) => {
  console.log(req.body);
  const { password, email } = req.body;
  var hashp;
  Auth.findOne({ email: email })
    .exec()
    .then(async (authObj) => {
      if (authObj) {
        res.status(403).json({
          message: "Email already registered",
        });
      } else {
        await bcrypt.hash(password, saltRounds, function (err, hash) {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            hashp = hash;
            const auth = new Auth({
              password: hash,
              email: email,
            });

            auth
              .save()
              .then(async (result) => {
                const token = jwt.sign(
                  {
                    _id: result._id,
                    email,
                  },
                  "secret",
                  { expiresIn: "5d" }
                );
                res.status(201).json({
                  message: "sign up successful",
                  token: token,
                });
              })
              .catch((err) => {
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
};

module.exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  Auth.findOne({ email: email })
    .exec()
    .then(async (auth) => {
      if (auth) {
        await bcrypt.compare(
          password,
          auth.password,
          async function (err, newResult) {
            if (err) {
              return res.status(501).json({
                error: err,
              });
            } else {
              if (newResult) {
                const { _id, email } = auth;

                const token = jwt.sign(
                  {
                    _id,
                    email,
                  },
                  "secret",
                  { expiresIn: "5d" }
                );
                return res.status(200).json({
                  token: token,
                  user: auth,
                });
              } else {
                return res.status(401).json({
                  message: "invalid password",
                });
              }
            }
          }
        );
      } else {
        res.status(404).json({
          message: "email invalid",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
