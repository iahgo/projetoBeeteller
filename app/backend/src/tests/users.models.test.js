const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');

chai.use(chaiHttp);
chai.use(sinonChai);

const connection = require('../models/connection');
const usersModel = require('../models/users.model');

const mock = require('./mocks/users.mocks');

describe('Testes de unidade do Model ', function () {
  afterEach(sinon.restore);
// mockar a consulta no BD 
  it('Recuperando uma pessoa pelo email', async function () {
    sinon.stub(connection, 'execute').resolves([mock.users]);
    const [result] = await usersModel.findByEmail(mock.users[0].email);
    expect(result).to.be.deep.equal(mock.users[0]);
  });
});
