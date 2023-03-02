const connection = require('./connection');

const findByEmail = async (email) => {
  const [user] = await connection.execute(
    'SELECT * FROM db.users WHERE email = ?', [email],
  );
  console.log(user);
  return user;
};

const createUser = async (email, password) => {
  const [newUser] = await connection.execute(
    'INSERT INTO db.users (email, senha) VALUES (?, ?)', [email, password],
    )
    return newUser;
}
module.exports = {
  findByEmail,
  createUser,
};