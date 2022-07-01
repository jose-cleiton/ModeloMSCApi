const {expect}= require('chai');
const sinon = require('sinon');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');


describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }
  before( () => {
    const execute = [{insertId:1}];
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after( () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
     console.log('CHAMEI O CREAT, ELE FAZ O CONNECTION EXECUTE E RETORNA O VALOR INSERIDO = 1 */');
      const response = await MoviesModel.create(payloadMovie);
      console.log('Tipo:',typeof response);
      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
})