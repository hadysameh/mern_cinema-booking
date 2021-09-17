import React,{useEffect,useState}from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios'
const Durations_create = () => {
    const history = useHistory()

    const [duration_time, setduration_time] = useState('')

    const submit_creat=()=>{
        axios.post('api/duration/store',{duration_time:duration_time})
        .then(res=>{
            console.log(res);
            history.push('/admin/durations/')
        })
    }
    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Add New Duration</h5>
                    <span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                </div>
                <div className="card-block">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Duration Name</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e)=>{setduration_time(e.target.value)}} className="form-control"/>
                            </div>
                        </div>
                        
                        <a onClick={submit_creat} className="btn btn-primary waves-effect waves-light text-white">Submit</a>
                    </form>
                    
                    
                </div>
            </div>
        </div>
      
    );
};

export default Durations_create;