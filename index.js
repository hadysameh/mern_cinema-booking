require('dotenv').config()
const http = require('http');
const express = require('express')
const cors = require('cors') 
const app = express()
const mongoose = require('mongoose')
const {initializeRoutes} = require('./routes/routesInitializer')

const server = http.createServer(app);
const { Server } = require("socket.io");
const io_helper=require('./socket_io_helper')
const io = new Server(server,{
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
     
    }
  });
const start_jobs= require('./jobs/jobs_handler')
//   console.log(io_helper)
  io_helper.io_instance = io
//   console.log(io_helper)

const bodyParser = require('body-parser')
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());


    
console.log(new Date().toISOString())

app.use('/uploads',express.static('./uploads'));

initializeRoutes(app)

if(process.env.NOD_ENV=='PRODUCTION'){

  app.use(express.static(__dirname+'/client/build/'))
  app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/client/build/index.html')

  })
}else{
  app.get('/*',(req,res)=>{
    res.send('hi you')
  })
  

}
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.mongodbConnectionStr,
{ useNewUrlParser: true ,useUnifiedTopology: true}
)
.then(()=>{
    console.log("MongoDB successfully connected") 
    start_jobs()

})

// io.on('connection', (socket) => {
//     console.log('a user connected');
//   });
// app.listen(process.env.port,()=>console.log('app running on port '+process.env.port))
let port = process.env.PORT ||5000
server.listen(port,()=>{
  console.log('app running on port '+process.env.port)

})

  
