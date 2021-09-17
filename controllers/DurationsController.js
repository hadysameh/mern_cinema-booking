const Duration = require('../models/Duration')
class DurationsController{

    static async index(req,res){
        let durations = await Duration.find({}).exec()
        res.json(durations)
    }
    static async show(req,res){
        // console.log({_id:req.query.id})
        let durations = await Duration.find({_id:req.query.id}).exec()
        // console.log({_id:req.query.id,durations})

        res.json(durations)
    }
    static async search(req,res){
        let durations =await Duration.find({duration_time:req.query.duration_time}).exec()
        res.json(durations)
    }
    
    static async store(req,res){
        let duration = new Duration({
            duration_time:req.body.duration_time
        })
        let saved_duration = await duration.save()
        res.json(saved_duration)
    }

    static async delete(req,res){

        // console.log(req.body.id)
        const removedDuration= await Duration.deleteOne({_id:req.body.id}).exec();
        // console.log(removedDuration)
        res.json(removedDuration);
    }
    
    static async edit(req,res){
        let duration = await Duration.updateOne({_id:req.body.id},{duration_time:req.body.duration_time}).exec()
        res.json(duration)
    }

    
}
module.exports=DurationsController