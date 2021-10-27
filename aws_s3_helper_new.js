

const S3Client= require('@aws-sdk/client-s3').S3Client
const s3= new S3Client({
    credentials:{
        accessKeyId:process.env.aws_s3_accessKeyId,
        secretAccessKey:process.env.aws_s3_secretAccessKey,
    },
    region:process.env.aws_s3_region
}); 

module.exports=s3