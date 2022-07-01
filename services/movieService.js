const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);
 // RETORNA FALSE SE O PAYLOAD NÃO FOR VALIDO
  console.log('CAMADA SERVICE isMovieValid:', isMovieValid);
  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });
  console.log('RETORNA O ID DO FILME INSERIDO');
  console.log('CAMADA SERVICE id:', id);
  return {
    id,
  };
};

module.exports = {
  create,
};