import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'

const Schedule_creat = () => {
    const history = useHistory()

    const [movies, setmovies] = useState([])
    const [movie, setmovie] = useState('')

    const [halls, sethalls] = useState([])
    const [hall, sethall] = useState('')

    const [durations, setdurations] = useState([])
    const [duration, setduration] = useState('')

    const [date, setdate] = useState(new Date().toISOString().replace(/T.*/, ''))
 
    useEffect(() => {
        axios.get('/api/movie/',{
            params: {
                page_number: 1
              }
        })
        .then(res=>{
            // console.log(res.data)
            // console.log(search_results)

            setmovies(res.data)
            
        })

        return () => {
            
        }
    }, [])

    //for hall change
    useEffect(() => {
        on_hall_with_date_change()
    }, [hall,movie])

    useEffect(() => {
        axios.get('/api/hall/',{
            params: {
                page_number: 1
              }
        })
        .then(res=>{
            // console.log(res.data)
            // console.log(search_results)

            sethalls(res.data)
            
        })

        return () => {
            
        }
    }, [])
    const on_hall_with_date_change=()=>{
       
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

    const submit_creat=()=>{
        console.log({
            movie,
            hall_name:hall,
            date,
            duration
        });

        axios.post('api/schedule/store',{
            movie,
            hall_name:hall,
            date,
            duration
        })
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
                                    <option value="opt1" disabled selected>Select One Value Only</option>
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
                                    <option value="opt1" disabled selected>Select One Value Only</option>
                                    {halls.map((hall,index)=>(<option value={hall.hall_name}>{hall.hall_name}</option>))}                                

                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Duration</label>
                            <div className="col-sm-10">
                                <select name="select" onChange={(e)=>{setduration(e.target.value)}} className="form-control form-control-default">
                                    
                                    <option value="opt1">Select One Value Only</option>
                                    {durations.map((duration,index)=>(<option value={duration.duration_time}>{duration.duration_time}</option>))}                                
                                    
                                </select>
                            </div>
                        </div>
                        
                        <a className="btn btn-primary waves-effect waves-light text-white" onClick={submit_creat}>Submit</a>
                    </form>
                                 
                                 
                </div>
            </div>
        </div>
    );
};

export default Schedule_creat;