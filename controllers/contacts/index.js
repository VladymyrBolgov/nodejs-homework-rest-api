const getAll = require('./getAll');
const getById = require('./getById');
const add = require('./add');
const updateContact = require('./put');
const deleteContact = require('./delete');
const patchFavorite = require('./patchFavorite');

module.exports = {
  getAll,
  getById,
  add,
  deleteContact,
  updateContact,
  patchFavorite
};