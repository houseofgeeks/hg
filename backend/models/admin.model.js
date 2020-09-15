const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  hash: {
    required: true,
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/, "invalid email"],
  },
  accessToken: {
    type: String,
    trim: true
  },
  username: {
    required: true,
    type: String,
    trim: true
  }
});

const checkPassword = async function (pass) {
  return new Promise((resolve, reject) => {
    if(pass !== this.hash){
      reject(err);
    }
    resolve(true);
  
  });
};

adminSchema.methods.checkPassword = checkPassword;
module.exports = mongoose.model('Admin', adminSchema);