const express = require("express")
const router = express.Router();
const product = require('../models/productmodels')
const {getproducts,getproduct,createproduct, updateproduct,deleteproduct} = require('../controllers/product.controller')

 

router.get('/',getproducts)
router.get('/:id',getproduct)
router.post('/',createproduct)



//update a product
router.put("/:id",updateproduct)


//delete a product
router.delete(':id',deleteproduct)

module.exports=router