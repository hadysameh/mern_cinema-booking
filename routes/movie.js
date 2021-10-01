const router = require('express').Router()
const MoviesController=require('./../controllers/MoviesController')
const isAuth=require('./../middelware/isAuth')
const isAdmin=require('./../middelware/isAdmin')

const upload = require('./../middelware/upload')

//changed to query
router.get('/movie/',MoviesController.index)

router.get('/movie/show',[isAuth,isAdmin],MoviesController.show)

router.get('/movie/search',MoviesController.search)

router.post('/movie/store/',[isAuth],upload.single('image'),MoviesController.store)

router.delete('/movie/delete/',[isAuth,isAdmin],MoviesController.delete)

router.patch('/movie/edit/',[isAuth,isAdmin],upload.single('image'),MoviesController.edit)


module.exports=router
