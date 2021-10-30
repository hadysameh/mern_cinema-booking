import React,{useEffect,useState}from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';

import axios from 'axios'
const Movies_create = () => {
    const history = useHistory()

    let { id } = useParams();

    const [movie_name, setmovie_name] = useState('')
    const [rating, setrating] = useState('')
    const [trailer_link, settrailer_link] = useState(null)
    const [image, setimage] = useState('')


    const [selectedFile, setselectedFile] = useState(null)

    const onFileChange = event => {    
        setselectedFile(event.target.files[0])
      };

    const submit_edit=()=>{
        let form_data= new FormData();
        form_data.append("movie_name",movie_name);
        form_data.append("rating",rating);
        form_data.append("trailer_link",trailer_link);
        form_data.append("image",selectedFile);
        form_data.append("id",id);
        axios.patch('api/movie/edit',form_data)
        .then(res=>{
            console.log(res);
            // history.push('/admin/movies/')
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
        useEffect(()=>{
        
            axios.get('api/movie/show',{
                params: {
                    id: id
                  }
            })
            .then(res=>{
                 
                setmovie_name(res.data[0].movie_name)
                setrating(res.data[0].rating)
                settrailer_link(res.data[0].trailer_link)
                setimage(res.data[0].image_path)
            })
        },[id])
    

    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h5>Edit Movie</h5>
                    <span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                </div>
                <div className="card-block">
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Movie Name</label>
                            <div className="col-sm-10">
                                <input type="text" value={movie_name} onChange={(e)=>{setmovie_name(e.target.value)}} className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Rating</label>
                            <div className="col-sm-10">
                                <input type="text" value={rating} onChange={(e)=>{setrating(e.target.value)}} className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Trailer Link</label>
                            <div className="col-sm-10">
                                <input type="text" value={trailer_link} onChange={(e)=>{settrailer_link(e.target.value)}} className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">current Poster Image</label>
                            <div className="col-sm-10">
                                <img style={{'width':'100px'}} src={image}/>
                            </div>
                            
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">new Poster Image</label>
                            <div className="col-sm-10">
                                <input type="file" onChange={onFileChange} className="form-control"/>
                            </div>
                            
                        </div>
                        {file_details()}
                        
                        <a onClick={submit_edit} className="btn btn-primary waves-effect waves-light text-white">Submit</a>
                    </form>                
                    
                    
                </div>
            </div>
        </div>
      
    );
};

export default Movies_create;