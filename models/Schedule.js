const mongoose = require('mongoose')
const schema = mongoose.Schema;

let schedule_schema = new schema({
    /*
        {
            movie_name:movie_name,
            id:id
        }
    */ 
    movie:{
        type:schema.Types.Mixed,
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
        default: new Date().toISOString().replace(/T.*/, '')
    },

},
{
    timestamps:true
})

schedule_schema.index({ movie_name: 1 }); 

module.exports = Schedule = mongoose.model('Schedule',schedule_schema)

