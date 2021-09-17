import React,{useEffect,useState}from 'react';
import axios from 'axios'
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

const Durations_edit = () => {
    const history = useHistory()
    
    let { id } = useParams();
    const [hall_name, sethall_name] = useState('')
    useEffect(()=>{
        
        axios.get('api/hall/show',{
            params: {
                id: id
              }
        })
        .then(res=>{
            // console.log(res.data)
            // console.log(res.data[0].duration_time)
            sethall_name(res.data[0].hall_name)
        })
    },[id])

    const submit_edit=()=>{
        axios.patch('api/hall/edit',{id:id,hall_name:hall_name})
        .then(res=>{
            console.log(res);
            history.push('/admin/halls/')
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
                                <input type="text" onChange={(e)=>{sethall_name(e.target.value)}} value={hall_name} className="form-control"/>
                            </div>
                        </div>
                        
                        <a onClick={submit_edit} className="btn btn-primary waves-effect waves-light text-white">Submit</a>
                    </form>
                </div>
            </div>
        </div> );
};

export default Durations_edit;