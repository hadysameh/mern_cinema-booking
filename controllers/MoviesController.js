
const Movie = require('../models/Movie')

class MoviesController{

    static async index(req,res){
        let page_number= req.query.page_nummber
        let page_limit=20
        let skipping_number=(page_number-1)*20
        let movies = Movie.find({}).skip(skipping_number).limit(page_limit).exec()
        res.json(movies)
    }

    static async store(req,res){
        let movie = new Movie({
            movie_name:req.body.movie_name,
            rating:req.body.rating,
            image:req.file.path,
            trailer_link:req.body.rating,
        })
        let saved_Movie=await movie.save()
        res.json(saved_Movie)
    }

    static async delete(req,res){
        let deleted_movie = await Movie.deleteOne({_id:req.body.id}).exec()
        res.json(deleted_movie)
    }

    static async edit(req,res){
        let edited_movie
        if(req.file){
            let image=req.file.path
            edited_movie={
                ...req.body,
                image
            }
        }
        else{
            edited_movie={
                ...req.body
            }
        }
        let movie = await Movie.updateOne({_id:req.body.id},edited_movie)
        res.json(movie)
    }
    
}
module.exports=MoviesController