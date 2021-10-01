import React,{useEffect,useState}from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
const Movies_create = () => {
    const history = useHistory()
    const [movie_name, setmovie_name] = useState('')
    const [rating, setrating] = useState('')
    const [trailer_link, settrailer_link] = useState(null)


    const [selectedFile, setselectedFile] = useState(null)

    const onFileChange = event => {    
        setselectedFile(event.target.files[0])
      };

    const submit_creat=()=>{
        let form_data = new FormData();
        form_data.append("movie_name",movie_name);
        form_data.append("rating",rating);
        form_data.append("trailer_link",trailer_link);
        form_data.append("image",selectedFile);

        axios.post('api/movie/store',form_data)
        .then(res=>{
            console.log(res);
            history.push('/admin/movies/')
        })
    }
    const file_details = () => {
    
        if (selectedFile) {
           
          return (
            <div>
              <h2>File Details:</h2>
               
                <p>File Name: {selectedFile.name}</p>
                
                            
                <p>File Type: {selectedFile.type}</p>
                
                            
                    <p>
                                Last Modified:{" "}
                                {selectedFile.lastModifiedDate.toDateString()}
                                </p>
                    
                            </div>
                            );
                        } else {
                            return (
                            <div>
                                <br />
                                <h4>Choose before Pressing the Upload button</h4>
                            </div>
                            );
                        }
        };

    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Add New Movie</h5>
                    <span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                </div>
                <div className="card-block">
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Movie Name</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e)=>{setmovie_name(e.target.value)}} className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Rating</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e)=>{setrating(e.target.value)}} className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Trailer Link</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e)=>{settrailer_link(e.target.value)}} className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Poster Image</label>
                            <div className="col-sm-10">
                                <input type="file" onChange={onFileChange} className="form-control"/>
                            </div>
                            
                        </div>

                        {file_details()}
                        
                        <a onClick={submit_creat} className="btn btn-primary waves-effect waves-light text-white">Submit</a>
                    </form>                   
                    
                    
                </div>
            </div>
        </div>
      
    );
};

export default Movies_create;