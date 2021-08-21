const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  email: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Auth", authSchema);
