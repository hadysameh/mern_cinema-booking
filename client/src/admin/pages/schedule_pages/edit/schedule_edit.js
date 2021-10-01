import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { useParams } from 'react-router';


const Schedule_creat = () => {
    const history = useHistory()
    
    let { id } = useParams();
    const [schedule, setschedule] = useState([])

    const [movies, setmovies] = useState([])
    const [movie, setmovie] = useState('')

    const [halls, sethalls] = useState([])
    const [hall, sethall] = useState('')

    const [durations, setdurations] = useState([])
    const [duration, setduration] = useState('')

    const [date, setdate] = useState(new Date().toISOString().replace(/T.*/, ''))
    // for getting the schedule
    useEffect(()=>{
        
        axios.get('api/schedule/show',{
            params: {
                id: id
              }
        })
        .then(res=>{
            // console.log(res.data[0])
            // console.log(res.data[0].duration_time)
            // console.log(res.data[0])
            // console.log(schedule)
            setschedule(res.data[0])
            setmovie(res.data[0].movie)
            sethall(res.data[0].hall_name)
            // console.log(movie)
            setdate(res.data[0].date)
            setduration(res.data[0].duration)
        })
    },[id])
    //for movies   
    useEffect(() => {
        axios.get('/api/movie/',{
            params: {
                page_number: 1
              }
        })
        .then(res=>{
            setmovies(res.data)
        })
    }, [])

    //for hall change
    useEffect(() => {
        on_hall_with_date_change()
    }, [hall,movie])

    //for hall change
    useEffect(() => {
        axios.get('/api/hall/',{
            params: {
                page_number: 1
              }
        })
        .then(res=>{
            sethalls(res.data)
        })
    }, [])
//for durations
    useEffect(() => {
        axios.get('/api/duration_for_changed_halls',{
            params: {
                hall_name: hall,
                date:date,
                movie_name:movie.movie_name
            }
        }).then(res=>{
            if(movie!=''&&hall!=''){
                // console.log(res.data)
                setdurations(res.data)

            }
        })
    }, [hall,movie,date])

    const on_hall_with_date_change=()=>{
    //    console.log({
    //     hall_name: hall,
    //     date:date,
    //     movie_name:movie.movie_name
    //   })
        axios.get('/api/duration_for_changed_halls',{
            params: {
                hall_name: hall,
                date:date,
                movie_name:movie.movie_name
              }
        }).then(res=>{
            if(movie!=''&&hall!=''){
                setdurations(res.data)

            }
        })
    }

    const submit_edit=()=>{
        console.log({
            movie,
            hall_name:hall,
            date,
            duration
        });


        axios.patch('api/schedule/edit',{
            id,
            movie,
            hall_name:hall,
            date,
            duration})
        .then(res=>{
            console.log(res);
            history.push('/admin/schedules/')
        })
    }
    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Add New Schedule</h5>
                    <span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                </div>
                <div className="card-block">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Movie Name</label>
                            <div className="col-sm-10">
                                <select name="select" onChange={(e)=>{ setmovie(movies[e.target.value]);}}className="form-control form-control-default">
                                    {/*value={movies.findIndex(movie => movie.movie_name ==schedule.movie.movie_name)}*/} 
                                    {/* <option  selected> {schedule.movie.movie_name} </option>  */}
                                    <option value={movies.findIndex(list_movie => list_movie ==movie)} selected>{movie.movie_name}</option>
                                    
                                    {movies.map((movie,index)=>(<option value={index}>{movie.movie_name}</option>))}                                
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-10">
                                <input type="date" value={date} onChange={(e)=>{setdate(e.target.value)}}className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Hall Name</label>
                            <div className="col-sm-10">
                                <select name="select" onChange={(e)=>{sethall(e.target.value);}} className="form-control form-control-default">
                                    {/* <option value="opt1" disabled selected>Select One Value Only</option> */}
                                    <option value={hall} selected>{hall}</option>
                                    {halls.map((hall,index)=>(<option value={hall.hall_name}>{hall.hall_name}</option>))}                                

                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Duration</label>
                            <div className="col-sm-10">
                                <select name="select" onChange={(e)=>{setduration(e.target.value)}} className="form-control form-control-default">
                                    
                                    {/* <option value="opt1">Select One Value Only</option> */}
                                    <option value={schedule.duration} selected>{schedule.duration}</option>
                                    {durations.map((duration,index)=>(<option value={duration.duration_time}>{duration.duration_time}</option>))}                                
                                    
                                </select>
                            </div>
                        </div>
                        
                        <a className="btn btn-primary waves-effect waves-light text-white" onClick={submit_edit}>Submit</a>
                    </form>
                                 
                                 
                </div>
            </div>
        </div>
    );
};

export default Schedule_creat;