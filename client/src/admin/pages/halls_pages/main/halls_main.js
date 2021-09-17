import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Record_row from './components/record_row'
const Halls_main = () => {
    const [halls, sethalls] = useState([])
    const [search_keyword, setsearch_keyword] = useState('')
    const [search_results, setsearch_results] = useState([])

    useEffect(() => {
        axios.get('/api/hall/')
        .then(res=>{
            // console.log(res.data)
            // console.log(search_results)

            sethalls(res.data)
            setsearch_keyword(res.data[0]?res.data[0].hall_name:null)
            // if(search_results){console.log([search_results,true])}
            // else{console.log(false)}
        })

        return () => {
            
        }
    }, [])
    const search=()=>{
        axios.get('/api/hall/search/',{
            params: {
                hall_name: search_keyword
              }
        })
        .then(res=>{
            console.log(res.data)
            setsearch_results(res.data)
            // console.log(search_results)
        })
    }
    const clear =()=>{
        setsearch_results([])
        
    }
    const remove_record_from_array=(id)=>{
        let after_delete_halls_arr = halls.filter(hall => hall._id !== id)
        sethalls(after_delete_halls_arr)
        let after_delete_search_results_arr = search_results.filter(hall => hall._id !== id)
        setsearch_results(after_delete_search_results_arr)
    }
    return (
        
        <div  className="col-md-12">
            <div  className="card table-card">
                <div  className="card-header">
                    <h5>Halls</h5>
                    <Link className="btn btn-primary waves-effect waves-light text-white ml-3" to='/admin/halls/creat'>Add new Hall</Link>
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
                                    <th>Hall Name</th>
                                    
                                    <th>Controls</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>
                                        <select name="select" defaultValue={'Search By Duration Name'} onChange={(e)=>{setsearch_keyword(e.target.value)}} className="form-control form-control-default">
                                            <option value="Search By Duration Name"  disabled={"disabled"}>Search By Hall Name</option>
                                            {halls.map(hall=>(<option value={hall.hall_name} key={hall._id} >{hall.hall_name}</option>))}
                                             
                                        </select>
                                    </td>
                                    
                                    <td>
                                        <a href="#" onClick={(e)=>{e.preventDefault();search()}} className="btn btn-out waves-effect waves-light btn-primary btn-square">Search</a>
                                        <a href="#" onClick={(e)=>{e.preventDefault();clear()}} className="btn btn-out waves-effect waves-light btn-secondary btn-square">clear</a>

                                    </td>
                                </tr>
                            </tbody>
                                {(search_results.length>0) ?search_results.map((hall)=>(
                                        <Record_row hall={hall}key={hall._id} remove_record_from_array={remove_record_from_array}/>
    
                                    )):
                                    halls.map((hall)=>(
                                        <Record_row hall={hall}key={hall._id} remove_record_from_array={remove_record_from_array}/>
    
                                        ))}
                                
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Halls_main;