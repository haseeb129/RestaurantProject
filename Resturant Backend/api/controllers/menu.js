const Menu = require("../models/menu");
const staticData = require("../data");
module.exports.getAllMenu = (req, res) => {
  console.log("getAllCustomers", req.body);
  Menu.find()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};

module.exports.menuSave = (req, res) => {
  const data = staticData.staticData;
  Menu.insertMany(data)
    .then(function () {
      return res.status(200).json("Data inserted");
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};
