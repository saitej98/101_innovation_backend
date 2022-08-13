const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://saiteja:saiteja123@cluster0.7cshu.mongodb.net/food"
  );
};
