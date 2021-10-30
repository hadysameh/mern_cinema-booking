const Schedule = require('../models/Schedule')
let ObjectId = require('mongodb').ObjectId; 

class SchedulesController{

    static async index(req,res){
        let page_number= req.query.page_nummber
        let page_limit=20
        let skipping_number=(page_number-1)*20
        let schedules = await Schedule.find({}).skip(skipping_number).sort({'_id':-1}).limit(page_limit).exec()
        // console.log(schedules)
        res.json(schedules)
    }
    static async search(req,res){
        let page_number= req.query.page_nummber
        let page_limit=20
        let skipping_number=(page_number-1)*20
        let schedules = await Schedule.find({
            'movie.movie_name':req.query.movie_name,
            hall_name:req.query.hall_name,
            date:req.query.date,
            duration:req.query.duration_name
        }).skip(skipping_number).limit(page_limit).exec()
        // console.log({
        //     'movie.movie_name':req.query.movie_name,
        //     hall_name:req.query.hall_name,
        //     date:req.query.date,
        //     duration:req.query.duration_name
        // })
        res.json(schedules)
    }

    static async show(req,res){
        // console.log({_id:req.query.id})
        let schedule = await Schedule.find({_id:req.query.id}).exec()
        // console.log({_id:req.query.id,durations})

        res.json(schedule)
    }

    static async get_halls(req,res){
        // console.log({_id:req.query.id})
        let search_params={
            'movie._id':new ObjectId(req.query.movie_id),
            duration:req.query.duration,
            date:req.query.date,
        }
        // console.log(search_params)
        let schedule = await Schedule.find(search_params).select(['hall_name']).exec()
        // console.log({_id:req.query.id,durations})

        res.json(schedule)
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
        console.log({_id:req.body.id})

        let deleted_schedule = await Schedule.deleteOne({_id:req.body.id}).exec();

        console.log(deleted_schedule)

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