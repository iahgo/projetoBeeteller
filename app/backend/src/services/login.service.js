const userModel = require('../models/users.model');
const { createToken } = require('../auth/jwtFunctions');

const login = async (email, password) => {
  const user = await userModel.findByEmail(email);
  console.log(user);
  if (!user.length) return { type: 'NOT FOUND', message: 'Not found' };
  const { senha, ...userWithoutPassword } = user[0];
  console.log(userWithoutPassword);
  const token = createToken(userWithoutPassword);

  return { token };
};

module.exports = {
  login,
};