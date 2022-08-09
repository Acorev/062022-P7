// Imports
const fs = require('fs')
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
  const post = JSON.parse(req.body.post)
  const postImg = req.file

  if (postImg) {
    post.imageUrl =
      `${req.protocol}://${req.get('host')}/${postImg.path}`
  }

  await Post.create(post)
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }))
};


// Mofifie post
const modifyPost = async (req, res) => {

  // Modification object selon si il y a une image ou pas
  const postObject = req.file ? {
    ...req.post,
    imageUrl: `${req.protocol}://${req.get('host')}/${req.file.path}`,
    message: JSON.parse(req.body.post).message
  } : { ...req.body }

  await Post.findById(req.params.id)
    .then(post => {

      // Vérifie si cest le bon utilisateur
      if (post.userId !== req.auth.userId && req.auth.role !== 8471) {
        return req.status(401).json({ message: 'Requête non autorisée !' })
      }

      // Supprime l'image si il en a une nouvelle
      if (req.file) {
        try {
          const pathImg = decodeURIComponent(new URL(post.imageUrl).pathname.slice(1))
          fs.unlinkSync(pathImg)
        } catch (error) {
          console.log(error);
        }
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

      // Vérifie si cest le bon utilisateur
      if (post.userId !== req.auth.userId && req.auth.role !== 8471) {
        return req.status(401).json({ message: 'Requête non autorisée !' })
      }

      if (post.imageUrl) {
        // Efface l'image et le message selectionnée
        const pathImg = decodeURIComponent(new URL(post.imageUrl).pathname.slice(1))

        fs.unlink(pathImg, () => {
          Post.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
            .catch(error => res.status(400).json({ error }))
        })

      } else {
        // Efface le message selectionnée
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
          .catch(error => res.status(400).json({ error }))
      }




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