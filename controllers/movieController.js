const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if(!movie) {
    //RETORNA ESTATUS E MENSAGEM (SEND)
    res.status(400).send('Dados inválidos');
  }

    //RETORNA ESTATUS E MENSAGEM (SEND)
  res.status(201).send('Filme criado com sucesso!');
};

const getAll = async (_req, res) => {
  const movies = await MoviesService.getAll();

  return res.status(200).json(movies);
};

module.exports = {
  create,
  getAll,
}