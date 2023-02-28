const userModel = require('../models/users.model');
const { createToken } = require('../auth/jwtFunctions');

const login = async (email, password) => {
  const user = await userModel.findByEmail(email);

  if (!user.length) return { type: 'NOT FOUND', message: 'Not found' };
  const { password: _password, ...userWithoutPassword } = user;
  const token = createToken(userWithoutPassword);

  return { token };
};

module.exports = {
  login,
};