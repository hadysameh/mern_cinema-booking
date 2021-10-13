const Purchase = require('../models/Purchase')
// const Schedule = require('../models/Schedule')
const io_helper=require('./../socket_io_helper')

class PurchasesController{

    static async index(req,res){
        let page_number= req.query.page_nummber
        let page_limit=20
        let skipping_number=(page_number-1)*20
        let purchases = await Purchase.find({}).skip(skipping_number).limit(page_limit).exec()
        res.json(purchases)
    }


    static async store(req,res){
        let selected_seats=req.body.selected_seats
        
        let data_to_store=selected_seats.map(seat=>{return{
            user:req.user,
            seat_number:seat,
            schedule:{
                movie_id:req.body.movie_id,
                duration:req.body.duration,
                date:req.body.date,
                hall:req.body.hall
            }
            
        }})

        // console.log(data_to_store)

        let saved_purchase=await Purchase.insertMany(data_to_store)
        let req_data={
            movie_id:req.body.movie_id,
            duration:req.body.duration,
            date:req.body.date,
            hall:req.body.hall
        }
        
        let event_name=req_data.movie_id+'_'+req_data.duration+'_'+req_data.date+'_'+req_data.hall
        // console.log(event_name)
        io_helper.io_instance.emit(event_name,{taken_seats:selected_seats})



        // console.log(saved_purchase)
        // let purchase = new Purchase({
        //     user:req.user._id,
        //     seat_number:req.body.seat_number,
        //     schedule:req.body.schedule,
        // })
        // let saved_purchase=await purchase.save()
        res.json(saved_purchase)
    }
    static async get_purchased_seats(req,res){
        // console.log(io_helper.io_instance)
        let search_params={
            'schedule.movie_id':req.query.movie_id,
            'schedule.hall':req.query.hall,
            'schedule.duration':req.query.duration,
            'schedule.date':req.query.date
        }
       let purchased_seats = await Purchase.find(search_params).select(['seat_number']).exec()
       res.json(purchased_seats)
    }

    // static async delete(req,res){

    // }
    // static async edit(req,res){

    // }
    
}
module.exports=PurchasesController