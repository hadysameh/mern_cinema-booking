const Hall = require('../models/Hall')
class HallsController{

    static async index(req,res){
        let halls = await Hall.find({}).exec()
        res.json(halls)
    }
    static async show(req,res){
        // console.log({_id:req.query.id})
        let hall = await Hall.find({_id:req.query.id}).exec()
        // console.log({_id:req.query.id,durations})

        res.json(hall)
    }

    static async search(req,res){
        let halls =await Hall.find({hall_name:req.query.hall_name}).exec()
        res.json(halls)
    }

    static async store(req,res){
        let hall = new Hall({
            hall_name:req.body.hall_name
        })
        let saved_hall =await hall.save()
        res.json(saved_hall)
    }
    static async delete(req,res){
        let deleted_hall = await Hall.deleteOne({_id:req.body.id}).exec()
        res.json(deleted_hall)
    }
    static async edit(req,res){
        let hall = await Hall.updateOne({_id:req.body.id},{hall_name:req.body.hall_name}).exec()
        res.json(hall)
    }
    
}
module.exports=HallsController