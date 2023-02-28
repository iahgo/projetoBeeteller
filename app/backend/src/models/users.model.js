const connection = require('./connection');

const findAllUser = async () => {
  const [people] = await connection.execute(
    'SELECT * FROM db.users',
  );
  return people;
};

module.exports = {
  findAllUser,
};