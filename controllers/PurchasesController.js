const Purchase = require('../models/Purchase')

class PurchasesController{

    static async index(req,res){
        let page_number= req.query.page_nummber
        let page_limit=20
        let skipping_number=(page_number-1)*20
        let purchases = await Purchase.find({}).skip(skipping_number).limit(page_limit).exec()
        res.json(purchases)
    }
    static async store(req,res){
        let purchase = new Purchase({
            user:req.user._id,
            seat_number:req.body.seat_number,
            schedule:req.body.schedule,
        })
        let saved_purchase=await purchase.save()
        res.json(saved_purchase)
    }
    // static async delete(req,res){

    // }
    // static async edit(req,res){

    // }
    
}
module.exports=PurchasesController