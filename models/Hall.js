const mongoose = require('mongoose')
const schema = mongoose.Schema;

let hall_schema = new schema({
    hall_name:{
        type:String,
        required:true
    },
},
{
    timestamps:true
})

hall_schema.index({ hall_name: 1 }); 

module.exports = Hall = mongoose.model('Hall',hall_schema)

