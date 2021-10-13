const mongoose = require('mongoose')
const schema = mongoose.Schema;

let schedule_schema = new schema({
    user:{
        type: schema.Types.ObjectId,
        ref: 'User'
    },
    seat_number:{
        type:String,
        required:true
    },
    /*
    {
        movie_id:{
        type:schema.Types.ObjectId,
        required:true
        },
        hall_name:{
            type:String,
            required:true
        },
        duration:{
            type:String,
            required:true
        },
        date:{ 
            type : Date,
        }
    }
    */
    schedule:{
        type:schema.Types.Mixed,
        required:true
    }
},
{
    timestamps:true
})

schedule_schema.index({ movie_name: 1 }); 

module.exports = Purchase = mongoose.model('Purchase',schedule_schema)

