import React,{useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Duration_row = (props) => {
    const history = useHistory()
    
    const [is_delete, setis_delete] = useState(false)

    const delete_duration=(id)=>{
        // console.log(id)
        axios.delete('api/duration/delete/',{data:{id}})
        .then(res=>{
            // console.log(res);
            props.remove_record_from_array(id)
            history.push('/admin/durations/')
            }
        )
    }
    return (
        <tbody>
            <tr>
                 <td>{props.duration.duration_time}</td>     
                 <td>
                    <Link to={'/admin/durations/edit/'+props.duration._id}  className="btn btn-out waves-effect waves-light btn-success btn-square">edit</Link>
                    <a href="#" onClick={(e)=>{e.preventDefault();setis_delete(!is_delete)}}  className="btn btn-out waves-effect waves-light btn-danger btn-square">delete</a>
                 </td>
             </tr>
             {is_delete?(
             <tr>
                 <td>Are You Sure You Want To Delete THis Record</td>     
                 <td>
                    <a href="#" onClick={(e)=>{e.preventDefault();delete_duration(props.duration._id)}} className="btn btn-out waves-effect waves-light btn-danger  btn-square">Yes</a>
                    <a href="#" onClick={(e)=>{e.preventDefault();setis_delete(false)}} className="btn btn-out waves-effect waves-light btn-primary btn-square">No</a>
                 </td>
             </tr>):null}
             
        </tbody>
    );
};

export default Duration_row;