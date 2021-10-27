const mongoose = require('mongoose')
const schema = mongoose.Schema;

let movie_schema = new schema({
    movie_name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    image_path:{
        type:String,
        required:true
    },
    trailer_link:{
        type:String,
        default:null,
    },

},
{
    timestamps:true
})

movie_schema.index({ movie_name: 1 }); 

module.exports = Movie = mongoose.model('Movie',movie_schema)

