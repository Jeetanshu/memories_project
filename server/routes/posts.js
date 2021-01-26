const express = require('express');
const postOptions = require('../controllers/posts.js');

const router = express.Router();

router.get('/',postOptions.getPosts);
router.post('/',postOptions.createPost);
router.patch('/:id',postOptions.updatePost);
router.delete('/:id',postOptions.deletePost);
router.patch('/:id/likePost',postOptions.likePost);

module.exports = router;