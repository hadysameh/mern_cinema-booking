const Schedule = require('../models/Schedule')

class SchedulesController{

    static async index(req,res){
        let page_number= req.query.page_nummber
        let page_limit=20
        let skipping_number=(page_number-1)*20
        let movies = await Schedule.find({'date': { $gte: new Date().toISOString().replace(/T.*/, '')}}).skip(skipping_number).select('movie').limit(page_limit).distinct('movie').exec()
        let pages_count = await Schedule.find({}).select('movie._id').distinct('movie').exec( )
        
        // console.log(pages_count.length  )
        res.json(movies)
    }
    
    
}
module.exports=SchedulesController