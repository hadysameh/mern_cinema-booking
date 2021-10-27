const PutObjectCommand =require('@aws-sdk/client-s3').PutObjectCommand
const s3Client = require('./aws_s3_helper_new')
const upload = async (file_path,file_content)=>{
    let  params = {
        Bucket: process.env.aws_s3_bucket_name,
        Key: file_path,
        Body: file_content,
        // ContentType: file.mimetype,
        ACL: "public-read"
      };

    try{
        const results = await s3Client.send(new PutObjectCommand(params));
        console.log(
            "Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key
        );
        console.log(results)
        // return results; // For unit tests.
        return new Promise((resolve,reject)=>{
            resolve(results)
        })
    }
    catch(err){
        console.log(err)
        return new Promise((resolve,reject)=>{
            reject(err)
        })
    }
}
console.log(upload)
module.exports= upload
