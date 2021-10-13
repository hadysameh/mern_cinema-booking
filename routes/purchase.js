const router = require('express').Router()
const PurchasesController=require('./../controllers/PurchasesController')
const isAuth=require('./../middelware/isAuth')

//changed to query
router.get('/purchase/',[isAuth],PurchasesController.index)

router.post('/purchase/store/',[isAuth],PurchasesController.store)

router.get('/purchase/get_purchased_seats/',[isAuth],PurchasesController.get_purchased_seats)


// router.delete('/purchase/delete/',[isAuth],PurchasesController.delete)

// router.patch('/purchase/edit/',[isAuth],PurchasesController.delete)


module.exports=router
