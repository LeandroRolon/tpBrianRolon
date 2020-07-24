const express=require('express');
const autosController = require('../controllers/autosController');
const router=express.Router();

router.get('/',autosController.index);
router.get('/:marca',autosController.marcaAuto);
router.get('/:marca/:dato?',autosController.datoAuto);




module.exports=router;