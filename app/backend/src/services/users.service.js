const userModel = require('../models/users.model');

const findAllUser = async () => {
  const users = await userModel.findAllUser();
  return { type: null, message: users };
};

module.exports = {
  findAllUser,
};