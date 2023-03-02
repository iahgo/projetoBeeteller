const connection = require('./connection');

const findByEmail = async (email) => {
  const [user] = await connection.execute(
    'SELECT * FROM db.users WHERE email = ?', [email],
  );
  console.log(user);
  return user;
};

module.exports = {
  findByEmail,
};