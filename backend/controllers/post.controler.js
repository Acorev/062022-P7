// Imports
const Post = require('../models/posts.model');

// Récuperer touts les posts de la base MongoDB
const getAllPosts = async (req, res) => {
  await Post.find().sort([['updatedAt', 'descending']])
    .then(post => res.status(200).json(post))
    .catch(error => res.status(400).json({ error }))
};

// Récupere une seule post
const getOnePost = async (req, res) => {
  const idPost = req.params.id
  await Post.findById(idPost)
    .then(post => res.status(200).json(post))
    .catch(error => res.status(400).json({ error }))
};

// Nouveau post
const createPost = async (req, res) => {
  await Post.create(req.body)
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }))
};


// Mofifie post
const modifyPost = async (req, res) => {

  const postObject = { ...req.body };

  await Post.findById(req.params.id)
    .then(post => {
      if (post.userId !== req.auth.userId && req.auth.role !== 8471) {
        return req.status(401).json({ message: 'Requête non autorisée !' })
      }

      Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));

    })
    .catch(error => res.status(404).json({ error }));


};

// Effacer post
const deletePost = async (req, res) => {

  await Post.findById(req.params.id)
    .then(post => {
      if (post.userId !== req.auth.userId && req.auth.role !== 8471) {
        return req.status(401).json({ message: 'Requête non autorisée !' })
      }

      Post.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));

    })
    .catch(error => res.status(404).json({ error }));
};

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  modifyPost,
  deletePost
};