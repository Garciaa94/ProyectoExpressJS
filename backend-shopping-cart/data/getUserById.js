const User = require('../models/User');

module.exports = async function getUserById(id) {
  const userFromDB = await User.findById(id);
  return userFromDB;
};

module.exports = async function delUserById(id) {
  const userFromDB = await User.findByIdAndDelete(id);
  return userFromDB;
};