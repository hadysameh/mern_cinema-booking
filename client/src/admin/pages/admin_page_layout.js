import React, { useEffect } from 'react';
import Nav_bar from '../components/nav_bar/nav_bar';
import Navigation_side_bar from '../components/navigation_side_bar/navigation_side_bar';
import { useDispatch } from 'react-redux'
import { setUser, setToken } from '../../store/slices/user'
import {logout} from '../../store/slices/user'
import {Helmet} from "react-helmet";

import { Link, useHistory } from "react-router-dom";

import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import '../../files/bower_components/bootstrap/css/bootstrap.min.css'
// import '../../files/assets/pages/waves/css/waves.min.css'
// import '../../files/assets/icon/feather/css/feather.css'
// import '../../files/assets/icon/themify-icons/themify-icons.css'
// import '../../files/assets/icon/icofont/css/icofont.css'
// import '../../files/bower_components/chartist/css/chartist.css'
// import '../../files/assets/icon/font-awesome/css/font-awesome.min.css'
// import '../../files/assets/css/widget.css'
// import '../../files/assets/css/style.css'
// import '../../files/assets/css/pages.css'


const Admin_page_layout = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
      
      // require( '../../files/bower_components/bootstrap/css/bootstrap.min.css')
      // require( '../../files/assets/pages/waves/css/waves.min.css')
      // require( '../../files/assets/icon/feather/css/feather.css')
      // require( '../../files/assets/icon/themify-icons/themify-icons.css')
      // require( '../../files/assets/icon/icofont/css/icofont.css')
      // require( '../../files/bower_components/chartist/css/chartist.css')
      // require( '../../files/assets/icon/font-awesome/css/font-awesome.min.css')
      // require( '../../files/assets/css/widget.css')
      // require( '../../files/assets/css/style.css')
      // require( '../../files/assets/css/pages.css')

    },)
    
    useEffect(() => {
      console.log('component loaded once')
        setTimeout(()=>{
            window.dispatchEvent(new Event('load'));
          },750)
    })

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
      let script_pats=[
        // '/admin_files/bower_components/jquery/js/jquery.min.js',
        '/admin_files/bower_components/jquery-ui/js/jquery-ui.min.js',
        '/admin_files/bower_components/popper.js/js/popper.min.js',
        '/admin_files/bower_components/bootstrap/js/bootstrap.min.js',
        '/admin_files/assets/pages/waves/js/waves.min.js',
        '/admin_files/bower_components/jquery-slimscroll/js/jquery.slimscroll.js',
        '/admin_files/bower_components/modernizr/js/modernizr.js',
        '/admin_files/bower_components/modernizr/js/css-scrollbars.js',
        '/admin_files/assets/js/pcoded.min.js',
        '/admin_files/assets/js/vertical/vertical-layout.min.js',
        '/admin_files/assets/pages/dashboard/custom-dashboard.min.js',
        '/admin_files/assets/js/script.min.js',
        // '/admin_files/assets/pages/chart/float/jquery.flot.js',
        // '/admin_files/assets/pages/chart/float/jquery.flot.categories.js',
        // '/admin_files/assets/pages/chart/float/curvedLines.js',
        // '/admin_files/assets/pages/chart/float/jquery.flot.tooltip.min.js',
        // '/admin_files/bower_components/chartist/js/chartist.js',
        // '/admin_files/assets/pages/widget/amchart/amcharts.js',
        // '/admin_files/assets/pages/widget/amchart/serial.js',
        // '/admin_files/assets/pages/widget/amchart/light.js'
      ]
      let scripts=[]
      setTimeout(()=>{
        script_pats.forEach(script_path=>{
          let script= document.createElement('script');
          script.src = script_path;
  
          script.async = true;
  
          setTimeout(()=>{
            document.body.appendChild(script);
            scripts.push(script)
          },100)
          
        })
      },750)
      

      return () => {
        scripts.forEach(script=>{
          document.body.removeChild(script);
        })
      }
    }, [])
    
    return (
        <div>
          <Helmet>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/bower_components/bootstrap/css/bootstrap.min.css'/>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/assets/pages/waves/css/waves.min.css'/>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/assets/icon/feather/css/feather.css'/>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/assets/icon/themify-icons/themify-icons.css'/>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/assets/icon/icofont/css/icofont.css'/>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/bower_components/chartist/css/chartist.css'/>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/assets/icon/font-awesome/css/font-awesome.min.css'/>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/assets/css/widget.css'/>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/assets/css/style.css'/>
          <link  rel="stylesheet" type="text/css" media="all" href='/admin_files/assets/css/pages.css'/>

          </Helmet>
          
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
           
            <Helmet>
             
                <script type="text/javascript" src="/admin_files/bower_components/jquery/js/jquery.min.js"></script>
                {/* <script type="text/javascript" src="/admin_files/bower_components/jquery-ui/js/jquery-ui.min.js" ></script>
                <script type="text/javascript" src="/admin_files/bower_components/popper.js/js/popper.min.js" ></script>
                <script type="text/javascript" src="/admin_files/bower_components/bootstrap/js/bootstrap.min.js" ></script>

                <script src="/admin_files/assets/pages/waves/js/waves.min.js" ></script>

                <script type="text/javascript" src="/admin_files/bower_components/jquery-slimscroll/js/jquery.slimscroll.js" ></script>

                <script type="text/javascript" src="/admin_files/bower_components/modernizr/js/modernizr.js"></script>
                <script type="text/javascript" src="/admin_files/bower_components/modernizr/js/css-scrollbars.js"></script>

                <script src="/admin_files/assets/js/pcoded.min.js" ></script>

                <script src="/admin_files/assets/js/vertical/vertical-layout.min.js" ></script>

                <script type="text/javascript" src="/admin_files/assets/pages/dashboard/custom-dashboard.min.js" ></script>
                <script type="text/javascript" src="/admin_files/assets/js/script.min.js" ></script>


                <script src="./admin_files/assets/pages/chart/float/jquery.flot.js" ></script>
                <script src="./admin_files/assets/pages/chart/float/jquery.flot.categories.js" ></script>
                <script src="./admin_files/assets/pages/chart/float/curvedLines.js" ></script>
                <script src="./admin_files/assets/pages/chart/float/jquery.flot.tooltip.min.js" ></script>
                <script src="./admin_files/bower_components/chartist/js/chartist.js" ></script>
                <script src="./admin_files/assets/pages/widget/amchart/amcharts.js" ></script>
                <script src="./admin_files/assets/pages/widget/amchart/serial.js" ></script>
                <script src="./admin_files/assets/pages/widget/amchart/light.js" ></script> */}
            </Helmet>


        </div>
    );
};

export default Admin_page_layout;