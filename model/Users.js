const mongoose = require("mongoose");
const {v4: uuid} = require("uuid")

const userSchema = new mongoose.Schema({
  _id: { type:String, default: () => uuid() },
  name: {type :String , required: true},
  email: {
    type: String,
    require: true,
    maxLength: 320,
    trim: true,
    lowerCase: true,
    unique: true,
  },
  password: { type: String, require: true, maxLength: 30 },
  phone: { type: Number, min: 1000000000, max: 9999999999 },
  createAt: { type: Date, default: Date.now },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
