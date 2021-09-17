const router = require('express').Router()
const UsersController=require('./../controllers/UsersController')
const mongoose = require('mongoose')
// const isAuthMiddelware = require('./../middelware/isAuth')
const isAuthMiddelware = require('./../middelware/isAuth')
const isAdminMiddelware = require('./../middelware/isAdmin')



router.post('/user/login',UsersController.login)
router.post('/user/register',UsersController.register)
router.post('/user/logout',UsersController.logout)
router.post('/user/isauth',isAuthMiddelware,UsersController.isAuth)
router.post('/user/isadmin',[isAuthMiddelware,isAdminMiddelware],UsersController.isAdmin)



module.exports=router
