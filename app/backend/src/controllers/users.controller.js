const userService = require('../services/users.service');

const findAllUsers = async (_req, res) => {
  const { users } = await userService.findAllUser();
  return res.status(200).json(users);
};

module.exports = {
  findAllUsers,
};