import React, { useEffect,useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {Helmet} from "react-helmet";
import loading_img from "./../template_files/images/logo1.png"

const Customer_pages_layout = (props) => {
  
  
  useEffect(() => {
    //  console.log('customer layout')
      setTimeout(()=>{
        window.dispatchEvent(new Event('load'));
        // console.log('load event was dispatched ')

      },2500)
      return () => {
        
      }
  }, [])

  useEffect(() => {
    let script_pats=[
      // '/customer_files/js/jquery.js',
      '/customer_files/js/plugins.js',
      '/customer_files/js/plugins2.js',
      '/customer_files/js/custom.js'
    ]
    let scripts=[]
    setTimeout(()=>{
      script_pats.forEach(script_path=>{
        let script= document.createElement('script');
        script.src = script_path;
        script.type="text/javascript"
        // script.async = true;
        // script.defer  = true;


        setTimeout(()=>{
          document.body.appendChild(script);
          scripts.push(script)
        },250)
        
      })
    },50)
    

    return () => {
      scripts.forEach(script=>{
        document.body.removeChild(script);
      })
    }
  }, [])
  
    
    
    
    
    return (
        <div>
          <Helmet>
            <link rel="stylesheet" href="./customer_files/css/style.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="./customer_files/css/plugins.css" type="text/css" media="all"/>
          </Helmet>
          {/* <Helmet>
              <script type="text/javascript"  src='./customer_files/js/jquery.js'></script>              
            </Helmet> */}
          
            {/* <!--preloading--> */}
           
            <div id="preloader">
                <img className="logo" src={loading_img} alt="" width="119" height="58"/>
                <div id="status">
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* */}
            {/* <!--end of preloading--> */}
            
            <Navbar/>
            {props.Content}
            <Footer/>
            
            <Helmet>
 
            <script type="text/javascript"  src='./customer_files/js/jquery.js'></script>
            {/* <script type="text/javascript"  src='./customer_files/js/plugins.js'></script>
            <script type="text/javascript"  src='./customer_files/js/plugins2.js'></script>
            <script type="text/javascript"  src='./customer_files/js/custom.js'></script> */}
            </Helmet>
           

        </div>
    );
};

export default Customer_pages_layout;