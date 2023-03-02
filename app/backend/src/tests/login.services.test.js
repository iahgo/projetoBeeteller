const { expect } = require('chai');
const sinon = require('sinon');
const loginService = require('../services/login.service');
const usersModel = require('../models/users.model');

describe('Testa o Service', function () {
  afterEach(sinon.restore);

  describe('Testa o login', function () {
    it('Não realiza login com senha errada', async function () {
      sinon.stub(usersModel, 'findByEmail').resolves([{
        id: 1, 
        email: 'iahgo@icloud.com', 
        senha: 'abc1b23',
      }]);
      const result = await loginService.login('iahgo@icloud.com', 'abc123');
      expect(result.type).to.be.equal('Password Wrong');
    });
  });

    it('Realiza login com senha certa', async function () {
      sinon.stub(usersModel, 'findByEmail').resolves([{
        id: 1, 
        email: 'iahgo@icloud.com', 
        senha: 'abc123',
      }]);
      const result = await loginService.login('iahgo@icloud.com', 'abc123');
      expect(typeof result).to.be.equal('object');
    });

    it('Não realiza login com email não encontrado', async function () {
      sinon.stub(usersModel, 'findByEmail').resolves([]);
      const result = await loginService.login('email.nao.existente@teste.com', 'abc123');
      expect(result.type).to.be.equal('NOT FOUND');
    });
  });
