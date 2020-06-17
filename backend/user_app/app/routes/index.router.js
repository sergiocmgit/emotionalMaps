var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index.controller')

/* GET home page. */
router.get('/getAllEmotions', indexController.getAllEmotions);
router.get('/getSegmentByWay/:way', indexController.getSegmentByWay);
router.get('/getEmotionsFiltered/:filter', indexController.getEmotionsFiltered);

module.exports = router;
