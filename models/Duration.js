const mongoose = require('mongoose')
const schema = mongoose.Schema;

let duration_schema = new schema({
    duration_time:{
        type:String,
        required:true
    },
},
{
    timestamps:true
})

duration_schema.index({ duration_time: 1 }); 

module.exports = Duration = mongoose.model('Duration',duration_schema)

