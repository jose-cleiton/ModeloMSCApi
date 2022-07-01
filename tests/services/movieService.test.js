const { expect } = require('chai');
const sinon = require('sinon');
const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

/*
  Precisamos validar se estamos recebendo todos os campos
  necessários para a operação. Como trata-se de uma regra
  de negócio, validaremos na camada de serviços.
*/
describe('Insere um novo filme no BD', () => {
  const payloadMovie = {};
  describe('quando o payload informado não é válido', () => {

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);
      console.log('Tipo:',typeof response);
      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);
      console.log('Valor:', response);
      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    /** CRIANDO DUBLE */
    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });// RETORNO ESPERADO PARA O SUCESSO (objeto com id)
    });

    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesModel.create.restore();
    });

       it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);
        
      console.log('Tipo:',typeof response);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);
      console.log('Valor:', response);
      expect(response).to.have.a.property('id');
    });

  });
});