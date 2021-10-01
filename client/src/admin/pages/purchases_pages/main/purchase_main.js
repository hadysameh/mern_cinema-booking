// import React,{useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios'
// import Record_row from './components/record_row'

// const purchase_main = () => {
//     const [purchases, setpurchases] = useState([])
//     useEffect(() => {
//         axios.get('/api/hall/',{
//             params: {
//                 page_number: 1
//               }
//         })
//         .then(res=>{
//             setpurchases(res.data)
//         });
//         return () => {
//         }
//     }, [])
//     return (
        
//         <div  className="col-md-12">
//             <div  className="card table-card">
//                 <div  className="card-header">
//                     <h5>Purchases</h5>
//                     {/* <Link className="btn btn-primary waves-effect waves-light text-white ml-3" to='/admin/movies/creat'>Add new Movie</Link> */}
//                     <div  className="card-header-right">
//                         <ul  className="list-unstyled card-option">
//                             <li  className="first-opt"><i  className="feather icon-chevron-left open-card-option"></i></li>
//                             <li><i  className="feather icon-maximize full-card"></i></li>
//                             <li><i  className="feather icon-minus minimize-card"></i></li>
//                             <li><i  className="feather icon-refresh-cw reload-card"></i></li>
//                             <li><i  className="feather icon-chevron-left open-card-option"></i></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div  className="card-block p-b-0">
//                     <div  className="table-responsive">
//                         <table  className="table table-hover m-b-0">
//                             <thead>
//                                 <tr>
//                                     <th>User Email</th>
//                                     <th>Seat Number</th>
//                                     <th>Movie Name</th>
//                                     <th>hall</th>
                                    
//                                     <th>duration</th>
//                                     <th>date</th>

                                    
//                                 </tr>
//                             </thead>
                            
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                         <select name="select" defaultValue={'Search By Movie Name'} onChange={(e)=>{}} className="form-control form-control-default">
//                                             <option value="Search By Movie Name"  disabled={"disabled"}>Search By Movie Name</option>
//                                             {movies.map(movie=>(<option value={movie.movie_name} key={movie._id} >{movie.movie_name}</option>))}
                                             
//                                         </select>
//                                     </td>
                                    
//                                     <td>
//                                         <a href="#" onClick={(e)=>{e.preventDefault();search()}} className="btn btn-out waves-effect waves-light btn-primary btn-square">Search</a>
//                                         <a href="#" onClick={(e)=>{e.preventDefault();clear()}} className="btn btn-out waves-effect waves-light btn-secondary btn-square">clear</a>

//                                     </td>
//                                 </tr>
//                             </tbody>
//                                 {(search_results.length>0) ?search_results.map((movie)=>(
//                                         <Record_row movie={movie}key={movie._id} remove_record_from_array={remove_record_from_array}/>
    
//                                     )):
//                                     movies.map((movie)=>(
//                                         <Record_row movie={movie}key={movie._id} remove_record_from_array={remove_record_from_array}/>
    
//                                         ))}
                                
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default purchase_main;