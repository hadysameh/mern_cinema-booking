const router = require('express').Router()
const SchedulesController=require('./../controllers/SchedulesController')
const isAuth=require('./../middelware/isAuth')

//changed to query
router.get('/schedule/',[isAuth],SchedulesController.index)

router.post('/schedule/store/',[isAuth],SchedulesController.store)

router.delete('/schedule/delete/',[isAuth],SchedulesController.delete)

router.patch('/schedule/edit/',[isAuth],SchedulesController.delete)


module.exports=router
