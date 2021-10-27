
const Movie = require('../models/Movie')
const Schedule = require('../models/Schedule')
const s3=require('../aws_s3_helper')
// var aws = require("aws-sdk");
const upload = require('../aws_s3_upload_handler')
// console.log(['upload is',upload])
class MoviesController{

    static async index(req,res){
        let page_number= req.query.page_nummber
        let page_limit=20
        let skipping_number=(page_number-1)*20
        let movies = await Movie.find({}).skip(skipping_number).limit(page_limit).exec()
        // console.log(movies)
        res.json(movies)
    }
    static async show(req,res){
        let movie = await Movie.find({_id:req.query.id}).exec()

        res.json(movie)
    }

    static async search(req,res){
        let movies =await Movie.find({movie_name:req.query.movie_name}).exec()
        res.json(movies)
    }

    static async dates_for_schedule(req,res){
        //when using distinct the id field is not fetched
        let dates_and_durations =await Schedule.find({'movie._id':req.query.movie_id,'date': { $gte: new Date().toISOString().replace(/T.*/, '')}}).select(['date']).distinct('date').exec()
        // console.log(dates_and_durations)
        res.json(dates_and_durations)
    }

    static async durations_for_schedule(req,res){
        let dates_and_durations =await Schedule.find({'movie._id':req.query.movie_id,'date': req.query.date}).select(['duration','_id']).distinct('duration').exec()
        // console.log(dates_and_durations)
        res.json(dates_and_durations)
    }

    static async store(req,res){
        try{
            console.log(req.body)
            let movie = new Movie({
                movie_name:req.body.movie_name,
                rating:req.body.rating,
                image_path:req.file.location,
                trailer_link:req.body.trailer_link,
            })
            let saved_Movie=await movie.save()
            res.json(saved_Movie)
        }
        catch(err){
            console.log(['error is',err])
        }
    }

    static async delete(req,res){
        let deleted_movie = await Movie.deleteOne({_id:req.body.id}).exec()
        res.json(deleted_movie)
    }

    static async edit(req,res){
        let edited_movie
        if(req.file){
            let image=req.file.location
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
        console.log(req.body )
        res.json(movie)
    }
    
}
module.exports=MoviesController