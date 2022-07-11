// Imports
const router = require('express').Router()

const postCtrl = require('../controllers/post.controler')
const multer = require('../middlewares/multer.config')
const auth = require('../middlewares/auth')

// Routes
router.get('/', auth, postCtrl.getAllPosts)
router.get('/:id', auth, postCtrl.getOnePost)
router.post('/', postCtrl.createPost)
router.put('/:id', auth, postCtrl.modifyPost)
router.delete('/:id', auth, postCtrl.deletePost)
router.post('/:id/like', auth, postCtrl.createLikePost)

// Exports
module.exports = router