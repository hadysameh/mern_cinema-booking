const isAdmin= (req,res,next)=>{
    // console.log(req.user)
    if(req.user.isAdmin){
         next()
    }
    else{
        res.status(400).json({
            // isUser:isEmailExist
            status:'unauthorized'
        })
    }
}
module.exports = isAdmin