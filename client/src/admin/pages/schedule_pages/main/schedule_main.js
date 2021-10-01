import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Record_row from './components/record_row'
const Schedule_main = () => {
    const [movie_name, setmovie_name] = useState('')
    const [hall_name, sethall_name] = useState('')
    const [duration, setduration] = useState('')

    const [date, setdate] = useState('')

    const [schedules, setschedules] = useState([])
    const [movies, setmovies] = useState([])
    const [halls, sethalls] = useState([])
    const [durations, setdurations] = useState([])
    const [search_results, setsearch_results] = useState([])
    

    // const [date, setdate] = useState([])

    useEffect(()=>{
        axios.get('/api/schedule/',
            {
                params: {
                    page_number: 1
                  }
            }
        ).then(res=>{
            setschedules(res.data)
        })
    },[])
//for search
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
            
        });

        axios.get('/api/movie/')
        .then(res=>{
            // console.log(res.data)
            // console.log(search_results)

            setmovies(res.data)
            
        })

        axios.get('/api/duration/')
        .then(res=>{
            console.log(res.data)
            // console.log(search_results)

            setdurations(res.data)
            
        })

    }, [])
    const remove_record_from_array=(id)=>{
        let after_delete_halls_arr = schedules.filter(schedule => schedule._id !== id)
        setschedules(after_delete_halls_arr)
        let after_delete_search_results_arr = search_results.filter(schedule => schedule._id !== id)
        setsearch_results(after_delete_search_results_arr)
    }
    const search=()=>{
        console.log([hall_name,movie_name,duration,date])
        axios.get('/api/schedule/search',{
            params: {
                page_number: 1,
                movie_name,
                hall_name,
                date,
                duration_name:duration
              }
        })
        .then(res=>{
            console.log(res);
            setsearch_results(res.data)
        })
        console.log([hall_name,movie_name,duration,date])

    }
    return (
        <div  className="col-md-12">
         <div className="card table-card">
             <div className="card-header">
                 <h5>Schedules</h5>
                 <Link className="btn btn-primary waves-effect waves-light text-white ml-3" to='/admin/schedules/creat'>Add new Schedule</Link>

                 <div className="card-header-right">
                     <ul className="list-unstyled card-option">
                         <li className="first-opt"><i className="feather icon-chevron-left open-card-option"></i></li>
                         <li><i className="feather icon-maximize full-card"></i></li>
                         <li><i className="feather icon-minus minimize-card"></i></li>
                         <li><i className="feather icon-refresh-cw reload-card"></i></li>
                         <li><i className="feather icon-chevron-left open-card-option"></i></li>
                     </ul>
                 </div>
             </div>
             <div className="card-block p-b-0">
                 <div className="table-responsive">
                     <table className="table table-hover m-b-0">
                         <thead>
                             <tr>
                                 <th>Movie Name</th>
                                 <th>Hall Name</th>
                                 <th>Duration</th>
                                 <th>date</th>
                                 <th>Statistics</th>
                                 <th>Controls</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td>
                                     <select name="select" onChange={(e)=>{setmovie_name(e.target.value)}} className="form-control form-control-default">
                                        <option value="opt1" disabled selected>Search By Movie Name</option>
                                        {movies.map(movie=><option value={movie.movie_name}>{movie.movie_name}</option>)}
                                         
                                     </select>
                                 </td>
                                 <td>
                                     <select name="select" onChange={(e)=>{sethall_name(e.target.value)}}className="form-control form-control-default">
                                        <option value="opt1">Search By Hall Name</option>
                                        {halls.map(hall=><option value={hall.hall_name}>{hall.hall_name}</option>)}
                                        
                                     </select>
                                      
                                 </td>
                                 <td>
                                     
                                     <select name="select" onChange={(e)=>{setduration(e.target.value)}}className="form-control form-control-default">
                                        <option value="opt1">Search By Duration</option>
                                        {durations.map(duration=><option value={duration.duration_name}>{duration.duration_time}</option>)}

                                     </select> 
                                 </td>
                                 <td>
                                      <input type="date" onChange={(e)=>{setdate(e.target.value)}} className="form-control form-control-default"/>
                                     
                                 </td>
                                 <td>
                                      
                                 </td>
                                 <td>
                                     <a href=""onClick={(e)=>{e.preventDefault();search()}} className="btn btn-out waves-effect waves-light btn-primary btn-square">Search</a>
                                     <a href=""onClick={(e)=>{e.preventDefault();setsearch_results([])}} className="btn btn-out waves-effect waves-light btn-secondary btn-square">Clear</a>


                                 </td>
                             </tr>
                             
                             </tbody>
                             {(search_results.length>0) ?search_results.map((schedule)=>(
                                        <Record_row schedule_id={schedule._id} movie={schedule.movie} hall_name={schedule.hall_name} duration={schedule.duration} date={schedule.date}key={schedule._id} remove_record_from_array={remove_record_from_array}/>
                                    )):schedules.map((schedule)=>(
                                        <Record_row schedule_id={schedule._id} movie={schedule.movie} hall_name={schedule.hall_name} duration={schedule.duration} date={schedule.date}key={schedule._id} remove_record_from_array={remove_record_from_array}/>
    
                             ))}
                     </table>
                 </div>
             </div>
         </div>
        </div>

    );
};

export default Schedule_main;