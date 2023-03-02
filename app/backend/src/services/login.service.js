const userModel = require('../models/users.model');
const { createToken } = require('../auth/jwtFunctions');

const login = async (email, password) => {
  const user = await userModel.findByEmail(email);
  if (!user.length) return { type: 'NOT FOUND', message: 'Not found' };
  const { senha, ...userWithoutPassword } = user[0];
  if (senha === password) {
    const token = createToken(userWithoutPassword);
    return { token };
  }
  return { type: 'Password Wrong ', message: 'Email and password does not macth' };
};

module.exports = {
  login,
};