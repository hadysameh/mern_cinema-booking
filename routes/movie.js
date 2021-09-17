const router = require('express').Router()
const MoviesController=require('./../controllers/MoviesController')
const isAuth=require('./../middelware/isAuth')
const upload = require('./../middelware/upload')

//changed to query
router.get('/movie/',MoviesController.index)

router.post('/movie/store/',[isAuth],upload.single('image'),MoviesController.store)

router.delete('/movie/delete/',[isAuth],MoviesController.delete)

router.patch('/movie/edit/',[isAuth],upload.single('image'),MoviesController.delete)


module.exports=router
