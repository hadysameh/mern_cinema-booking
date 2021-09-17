const Schedule = require('../models/Schedule')

class SchedulesController{

    static async index(req,res){
        let page_number= req.query.page_nummber
        let page_limit=20
        let skipping_number=(page_number-1)*20
        let schedules = Schedule.find({}).skip(skipping_number).limit(page_limit).exec()
        res.json(schedules)
    }
    static async store(req,res){
        let schedule = new Schedule({
            movie:req.body.movie,
            hall_name:req.body.hall_name,
            duration:req.body.duration,
            date:req.body.date
        })
        let saved_schedule=await schedule.save()
        res.json(saved_schedule)
    }
    static async delete(req,res){
        let deleted_schedule = await Schedule.deleteOne({_id:req.body.id}).exec()
        res.json(deleted_schedule)
    }
    static async edit(req,res){
        let edited_schedule = Schedule.updateOne({_id:req.body.id},{
            ...req.body
        }).exec()
        res.json(edited_schedule)
    }
    
}
module.exports=SchedulesController