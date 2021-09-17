import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Duration_row from './components/duration_row'
const Durations_main = () => {
    const [durations, setdurations] = useState([])
    const [search_keyword, setsearch_keyword] = useState('')
    const [search_results, setsearch_results] = useState([])

    useEffect(() => {
        axios.get('/api/duration/')
        .then(res=>{
            // console.log(res.data)
            // console.log(search_results)

            setdurations(res.data)
            setsearch_keyword(res.data[0].duration_time)
            // if(search_results){console.log([search_results,true])}
            // else{console.log(false)}
        })

        return () => {
            
        }
    }, [])
    const search=()=>{
        axios.get('/api/duration/search/',{
            params: {
                duration_time: search_keyword
              }
        })
        .then(res=>{
            // console.log(res.data)
            setsearch_results(res.data)
            // console.log(search_results)
        })
    }
    const clear =()=>{
        setsearch_results([])
    }
    const remove_record_from_array=(id)=>{
        let after_delete_durations_arr = durations.filter(duration => duration._id !== id)
        setdurations(after_delete_durations_arr)
        let after_delete_search_results_arr = search_results.filter(duration => duration._id !== id)
        setsearch_results(after_delete_search_results_arr)
    }
    return (
        
        <div  className="col-md-12">
            <div  className="card table-card">
                <div  className="card-header">
                    <h5>Duarations</h5>
                    <Link className="btn btn-primary waves-effect waves-light text-white ml-3" to='/admin/durations/creat'>Add new Duaration</Link>
                    <div  className="card-header-right">
                        <ul  className="list-unstyled card-option">
                            <li  className="first-opt"><i  className="feather icon-chevron-left open-card-option"></i></li>
                            <li><i  className="feather icon-maximize full-card"></i></li>
                            <li><i  className="feather icon-minus minimize-card"></i></li>
                            <li><i  className="feather icon-refresh-cw reload-card"></i></li>
                            <li><i  className="feather icon-chevron-left open-card-option"></i></li>
                        </ul>
                    </div>
                </div>
                <div  className="card-block p-b-0">
                    <div  className="table-responsive">
                        <table  className="table table-hover m-b-0">
                            <thead>
                                <tr>
                                    <th>Duration Name</th>
                                    
                                    <th>Controls</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>
                                        <select name="select" defaultValue={'Search By Duration Name'} onChange={(e)=>{setsearch_keyword(e.target.value)}} className="form-control form-control-default">
                                            <option value="Search By Duration Name"  disabled={"disabled"}>Search By Duration Name</option>
                                            {durations.map(duration=>(<option value={duration.duration_time} key={duration._id} >{duration.duration_time}</option>))}
                                             
                                        </select>
                                    </td>
                                    
                                    <td>
                                        <a href="#" onClick={(e)=>{e.preventDefault();search()}} className="btn btn-out waves-effect waves-light btn-primary btn-square">Search</a>
                                        <a href="#" onClick={(e)=>{e.preventDefault();clear()}} className="btn btn-out waves-effect waves-light btn-secondary btn-square">clear</a>

                                    </td>
                                </tr>
                            </tbody>
                                {(search_results.length>0) ?search_results.map((duration)=>(
                                        <Duration_row duration={duration}key={duration._id} remove_record_from_array={remove_record_from_array}/>
    
                                    )):
                                    durations.map((duration)=>(
                                        <Duration_row duration={duration}key={duration._id} remove_record_from_array={remove_record_from_array}/>
    
                                        ))}
                                
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Durations_main;