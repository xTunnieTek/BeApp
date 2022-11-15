const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/create',postController.createPost);
router.get('/',postController.getAll);

module.exports = router