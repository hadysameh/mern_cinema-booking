const fs = require('fs');
const multer  = require('multer')
// const upload = multer()
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      let folderPath ='./uploads/'+new Date().toISOString().replace(/T.*/, '')
       let isFolderExist = fs.existsSync(folderPath);
       if(isFolderExist){
          cb(null, folderPath );   
       }
       else{
        fs.mkdirSync(folderPath, { recursive: true })
       }
      cb(null, folderPath );
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
const upload = multer({ storage: storage })

module.exports=upload