const express=require('express');
const sucursalesController = require('../controllers/sucursalesController');
const router=express.Router();

router.get('/',sucursalesController.index);
router.get('/:sucursal',sucursalesController.sucursal)




module.exports=router;