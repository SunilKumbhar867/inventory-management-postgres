const express = require('express');

const router = express.Router();
const AuthSchema = require('../controllers/auth/AuthSchema.js')
// const AuthController = new AuthControllers();
const authMiddleware = require('../middleware/AuthMiddleware.js');
router.post("/auth/register", AuthSchema.postRegistration);
router.post("/auth/login", AuthSchema.postLogin);

module.exports = router;