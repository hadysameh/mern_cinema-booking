import React,{useEffect,useState}from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios'
const Durations_create = () => {
    const history = useHistory()

    const [hall_name, sethall_name] = useState('')

    const submit_creat=()=>{
        axios.post('api/hall/store',{hall_name:hall_name})
        .then(res=>{
            console.log(res);
            history.push('/admin/halls/')
        })
    }
    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Add New Hall</h5>
                    <span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                </div>
                <div className="card-block">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Hall Name</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e)=>{sethall_name(e.target.value)}} className="form-control"/>
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