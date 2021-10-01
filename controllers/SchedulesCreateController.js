const Schedule = require('../models/Schedule')
const Duration = require('../models/Duration')

const Hall = require('../models/Hall')

class SchedulesCreateController{

    
    static async duration_for_changed_halls(req,res){
        let date=req.query.date;
        let hall_name=req.query.hall_name;
        let movie_name=req.query.movie_name;
        let search_params={
            "movie.movie_name":movie_name,
            hall_name:hall_name,
            'date':date
        }
        // console.log(search_params)
        let all_durations = await Duration.find().exec()
        let schedules_in_hall_and_date=await Schedule.find(search_params).exec()
        // console.log(schedules_in_hall_and_date)
        // console.log('///////////////////')

        let durations_in_schedules=schedules_in_hall_and_date.map(schedule=>schedule.duration)
        // console.log(durations_in_schedules)
        
        // console.log('///////////////////')

        let available_durations=all_durations.filter(duration=>!durations_in_schedules.includes(duration.duration_time))
        // console.log(available_durations)
        res.json(available_durations)
    }
    
}
module.exports=SchedulesCreateController