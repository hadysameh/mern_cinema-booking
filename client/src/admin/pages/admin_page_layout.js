import React, { useEffect } from 'react';
import Nav_bar from '../components/nav_bar/nav_bar';
import Navigation_side_bar from '../components/navigation_side_bar/navigation_side_bar';
import { useDispatch } from 'react-redux'
import { setUser, setToken } from '../../store/slices/user'
import {logout} from '../../store/slices/user'


import axios from 'axios'

import '../../files/bower_components/bootstrap/css/bootstrap.min.css'
import '../../files/assets/pages/waves/css/waves.min.css'
import '../../files/assets/icon/feather/css/feather.css'
import '../../files/assets/icon/themify-icons/themify-icons.css'
import '../../files/assets/icon/icofont/css/icofont.css'
import '../../files/bower_components/chartist/css/chartist.css'
import '../../files/assets/icon/font-awesome/css/font-awesome.min.css'
import '../../files/assets/css/widget.css'
import '../../files/assets/css/style.css'
import '../../files/assets/css/pages.css'

import { Link, useHistory } from "react-router-dom";
const Admin_page_layout = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const dispatch_logout = ()=>{
        dispatch(logout()).then(()=>{
            history.push('/')

        })
        .catch((error)=> {
            if (error.response) { 
              console.log(error.response.data.msg)
              // this.setState({error:error.response.data.msg}) 
            }
          })
        
    }
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "../../files/assets/js/pcoded.min.js";
        script.async = true;
        //console.log(script)
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "../../files/assets/js/vertical/vertical-layout.min.js";
        script.async = true;
        //console.log(script)
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "../../files/assets/pages/dashboard/custom-dashboard.min.js";
        script.async = true;
        //console.log(script)
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "../../files/assets/js/script.min.js";
        script.async = true;
        //console.log(script)
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    
    return (
        <div>
            {/* [ Pre-loader ] start   */}
            <div className="loader-bg">
                <div className="loader-bar"></div>
            </div>
            {/* [ Pre-loader ] end   */}
            <div id="pcoded" className="pcoded">
                <div className="pcoded-overlay-box"></div>
                <div className="pcoded-container navbar-wrapper">
                    
                    <Nav_bar></Nav_bar>
                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            <Navigation_side_bar></Navigation_side_bar>
                            <div className="pcoded-content">
                                
                                <div className="pcoded-inner-content">
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            <div className="page-body">
                                                {/* <!-- [ page content ] start --> */}
                                                <div className="row">
        
                                                    {props.Content}
                                                    <button onClick={dispatch_logout}>logout</button>
                                                    <Link to='/admin/durations/creat'>link to admin</Link>
                                                    <br/>
                                                    <Link to='/'>link to home</Link>

                                                </div>
                                                {/* <!-- [ page content ] end --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- [ style Customizer ] start --> */}
                            {/* <div id="styleSelector">
                            </div> */}
                            {/* <!-- [ style Customizer ] end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin_page_layout;