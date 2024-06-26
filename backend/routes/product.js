const express=require('express');
const { getproducts, getsingleproducts } = require('../controller/productcontroller');
const router=express.Router();


router.route('/product').get(getproducts);
router.route('/product/:id').get(getsingleproducts);

module.exports=router;