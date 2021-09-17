const router = require('express').Router()
const HallsController=require('./../controllers/HallsController')
const isAuth=require('./../middelware/isAuth')
const isAdmin=require('./../middelware/isAdmin')

//changed to query
router.get('/hall/',HallsController.index)

router.get('/hall/show',[isAuth,isAdmin],HallsController.show)

router.get('/hall/search',HallsController.search)

router.post('/hall/store/',[isAuth,isAdmin],HallsController.store)

router.delete('/hall/delete/',[isAuth,isAdmin],HallsController.delete)

router.patch('/hall/edit/',[isAuth,isAdmin],HallsController.edit)


module.exports=router
