const express = require('express');

const router = express.Router();
const AuthRoutes = require('./authRoutes');


router.use('/v1/api', AuthRoutes)


module.exports = router;