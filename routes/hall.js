const router = require('express').Router()
const HallsController=require('./../controllers/HallsController')
const isAuth=require('./../middelware/isAuth')
const isAdmin=require('./../middelware/isAdmin')
const upload = require('./../middelware/upload')

//changed to query
router.get('/hall/',HallsController.index)

router.get('/hall/show',[isAuth,isAdmin],HallsController.show)

router.get('/hall/search',HallsController.search)

router.post('/hall/store/',[isAuth,isAdmin],upload.single('img'),HallsController.store)

router.patch('/hall/edit/',[isAuth,isAdmin],upload.single('img'),HallsController.edit)

router.delete('/hall/delete/',[isAuth,isAdmin],HallsController.delete)



module.exports=router
