const connection = require('./connection');

const findAllUser = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM db.users',
  );
  return users;
};

const findByEmail = async (email) => {
  const [user] = await connection.execute(
    'SELECT * FROM db.users WHERE email = ?', [email],
  );
  console.log(user);
  return user;
};

module.exports = {
  findAllUser,
  findByEmail,
};