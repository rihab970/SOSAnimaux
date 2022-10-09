const express = require('express');
const addPublication = require('../controllers/pubControllers');
const getPub = require('../controllers/viewControllers');
const router = express.Router();

router.post("/",addPublication);
router.get("/show",getPub);

module.exports = router;