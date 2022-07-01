/** Pegar a conexao */
const {Module} = require('module');
const connection = require('./connection');

const create = async ({title, directedBy, releaseYear}) => {
  const [result] = await connection
  .execute(
    'INSERT INTO model_example.movies (title, direct_by, release_year) VALUES (?, ?, ?)',
    [title, directedBy, releaseYear]
  );
  return {
    //QUAL O RETORNO ESPERADO PARA O SUCESSO (objeto com id)
    //QUA O RETORNO ESPERADO PARA O ERRO 
    id: result.insertId,
  };
};
const getAll = async () => {
  
  return connection
  .execute(
    'SELECT * FROM `movies-api`.movies'
    );
};

module.exports = {
  create,
  getAll,

}