const router = require('express').Router()
const DurationsController=require('./../controllers/DurationsController')
const isAuth=require('./../middelware/isAuth')
const isAdmin=require('./../middelware/isAdmin')


//changed to query
router.get('/duration/',DurationsController.index)

router.get('/duration/show',[isAuth,isAdmin],DurationsController.show)

router.get('/duration/search',DurationsController.search)

router.post('/duration/store/',[isAuth,isAdmin],DurationsController.store)

router.delete('/duration/delete/',[isAuth,isAdmin],DurationsController.delete)

router.patch('/duration/edit/',[isAuth,isAdmin],DurationsController.edit)


module.exports=router
