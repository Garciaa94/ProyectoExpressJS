const Item = require('../models/Item');

module.exports = async function getItemById(id) {
  const itemFromDB = await Item.findById(id);
  return itemFromDB;
};

module.exports = async function delItemById(id) {
  const itemFromDB = await Item.findByIdAndDelete(id);
  return itemFromDB;
};