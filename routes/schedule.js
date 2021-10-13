const router = require('express').Router()
const SchedulesController=require('./../controllers/SchedulesController')
const isAuth=require('./../middelware/isAuth')
const isAdmin=require('./../middelware/isAdmin')

//changed to query
router.get('/schedule/',[isAuth],SchedulesController.index)

router.get('/schedule/show',[isAuth,isAdmin],SchedulesController.show)

router.get('/schedule/get_halls',[isAuth,],SchedulesController.get_halls)

router.post('/schedule/store/',[isAuth],SchedulesController.store)

router.get('/schedule/search',SchedulesController.search)

router.delete('/schedule/delete/',[isAuth],SchedulesController.delete)

router.patch('/schedule/edit/',[isAuth],SchedulesController.edit)


module.exports=router
