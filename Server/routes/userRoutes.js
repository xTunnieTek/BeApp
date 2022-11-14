const { Router } = require('express');
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.patch('/update',userController.updateMe);
router.post('/login',userController.login);
router.get('/user',userController.getUser);

module.exports = router;