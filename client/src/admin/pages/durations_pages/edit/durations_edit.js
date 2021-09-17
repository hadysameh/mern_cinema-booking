import React,{useEffect,useState}from 'react';
import axios from 'axios'
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

const Durations_edit = () => {
    const history = useHistory()
    
    let { id } = useParams();
    const [duration_time, setduration_time] = useState('')
    useEffect(()=>{
        
        axios.get('api/duration/show',{
            params: {
                id: id
              }
        })
        .then(res=>{
            console.log(res.data)
            console.log(res.data[0].duration_time)
            setduration_time(res.data[0].duration_time)
        })
    },[id])

    const submit_edit=()=>{
        axios.patch('api/duration/edit',{id:id,duration_time:duration_time})
        .then(res=>{
            console.log(res);
            history.push('/admin/durations/')
        })
    }
    
    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Edit Duration</h5>
                    <span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                </div>
                <div className="card-block">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Duration Name</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e)=>{setduration_time(e.target.value)}} value={duration_time} className="form-control"/>
                            </div>
                        </div>
                        
                        <a onClick={submit_edit} className="btn btn-primary waves-effect waves-light text-white">Submit</a>
                    </form>
                </div>
            </div>
        </div> );
};

export default Durations_edit;