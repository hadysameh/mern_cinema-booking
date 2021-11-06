const nodeCron = require('node-cron')
const options= require('./../jobs_options')
const Movie = require('./../../models/Movie')
const Schedule = require('./../../models/Schedule')

let job_func = async()=>{
    let movies = await Movie.find({}).limit(20).exec().catch(err=>console.log(err))
    movies.forEach(movie => {
        let movie_schedules=[]

        for (let index = 0; index < 7; index++) {
            console.log('inside loop')
            let date = new Date();
            date.setDate(date.getDate()+index);
            date = date.toISOString().replace(/T.*/,'')
            movie_schedules.push({
                movie:movie,
                hall_name:'hall 1',
                duration:"from 10 am to 1 pm",
                date:date
            })
        }
        Schedule.insertMany(movie_schedules).then(res=>console.log(res))
    })
    
}

const job = nodeCron.schedule('40 0 * * Saturday' , job_func , options)

module.exports=job
