// const fs = require('fs');
const multer  = require('multer')
// const upload = multer()
// const multerS3 = require('multer-s3')

// const s3=require('../aws_s3_helper')
// // console.log(s3)
// let folder_name=new Date().toISOString().replace(/T.*/, '')

// let upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.aws_s3_bucket_name,
//     acl: 'public-read',
//     key: function (req, file, cb) {
//       cb(null, folder_name+'/'+Date.now().toString()+'-'+file.originalname)
//     }
//   })
// })

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });



// const upload = multer({ storage: storage })

module.exports=upload