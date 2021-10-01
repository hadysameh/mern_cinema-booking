const router = require('express').Router()
const SchedulesCreateController=require('../controllers/SchedulesCreateController')
const isAuth=require('../middelware/isAuth')
const isAdmin=require('../middelware/isAdmin')
const upload = require('../middelware/upload')

//changed to query
router.get('/duration_for_changed_halls/',[isAuth,isAdmin],SchedulesCreateController.duration_for_changed_halls)


module.exports=router
