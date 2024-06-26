// logic for create order

const orderModel = require("../models/orderModel");

// const orderModel=require('../models/orderModel');


//create order -api/v1/order
exports.createorder=async(req,res,next)=>{
  const cartItems =req.body;
  const amount=Number(cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(2);
// console.log(amount,'AMOUNT')
const status ='pending';

 const order= await orderModel.create({cartItems,amount,status})
    res.json(
        {
            success:true, 
            order
        }
    )
}


