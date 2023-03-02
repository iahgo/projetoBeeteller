const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../api/app');
const loginService = require('../services/login.service');
const usersModel = require('../models/users.model');
const { createToken } = require('../auth/jwtFunctions');

chai.use(chaiHttp);

describe('Testa o Controller', function () {
  afterEach(sinon.restore);

  describe('Testa o login', function () {
    it('Realiza login com sucesso', async function () {
      sinon.stub(usersModel, 'findByEmail').resolves([{
        id: 1, 
        email: 'iahgo@icloud.com', 
        senha: 'abc123',
      }]);
      const token = createToken({ id: 1, email: 'iahgo@icloud.com' });
      sinon.stub(loginService, 'login').resolves(token);
      const res = await chai.request(app)
        .post('/login')
        .send({ email: 'iahgo@icloud.com', password: 'abc123' });
      expect(res).to.have.status(200);
      // expect(res.body).to.have.property('token');
      // expect(res.body.token).to.equal(token);
    });

    it('Retorna erro 404 se email não é encontrado', async function () {
      sinon.stub(usersModel, 'findByEmail').resolves([]);
      const res = await chai.request(app)
        .post('/login')
        .send({ email: 'email.nao.existente@teste.com', password: 'abc123' });
      expect(res).to.have.status(404);
      expect(res.body).to.have.property('message');
      expect(res.body.message).to.equal('Not found');
    });

    it('Retorna erro 404 se a senha está incorreta', async function () {
      sinon.stub(usersModel, 'findByEmail').resolves([{
        id: 1, 
        email: 'iahgo@icloud.com', 
        senha: 'abc1b23',
      }]);
      const res = await chai.request(app)
        .post('/login')
        .send({ email: 'iahgo@icloud.com', password: 'abc123' });
      expect(res).to.have.status(404);
      expect(res.body).to.have.property('message');
      expect(res.body.message).to.equal('Email and password does not macth');
    });
  });
});
