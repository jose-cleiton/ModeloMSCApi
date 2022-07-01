const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('quando o payload informado nao é válido', async () => {
  const response = {};
  const request  = {};

before(() => {
  request.body = {};
  
  response.status = sinon.stub().returns(response);
  response.send =sinon.stub().returns('Dados inválidos');

  sinon.stub(MoviesService, 'create').resolves(false);

});

  after(() => {
    MoviesService.create.restore();
  });

  it('é chamado o status com código 400', async () => {
    await MoviesController.create(request, response);

    expect(response.status.calledWith(400)).to.be.equal(true);
  });

  it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
    await MoviesController.create(request, response);

    expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
  });
});