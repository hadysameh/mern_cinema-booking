import React, { useEffect,useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {Helmet} from "react-helmet";
import loading_img from "./../template_files/images/logo1.png"

// import '../template_files/css/style.css'
// import '../template_files/css/plugins.css'
const Customer_pages_layout = (props) => {
  
  
  useEffect(() => {
     
      setTimeout(()=>{
        window.dispatchEvent(new Event('load'));
      },750)
      return () => {
        
      }
  }, [])

  useEffect(() => {
    require( '../template_files/css/style.css')
    // require( '../template_files/css/plugins.css')
    
    return () => {
      
    }
  }, [])

  useEffect(() => {
    let script_pats=[
      '/customer_files/js/jquery.js',
      '/customer_files/js/plugins.js',
      '/customer_files/js/plugins2.js',
      '/customer_files/js/custom.js'
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
            <link rel="stylesheet" href="./customer_files/css/style.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="./customer_files/css/plugins.css" type="text/css" media="all"/>
          </Helmet>
          
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
            {props.content}
            <Footer/>
{/*             
            <Helmet>
              <script type="text/javascript"  src='./customer_files/js/jquery.js'></script>
              <script type="text/javascript"  src='./customer_files/js/plugins.js'></script>
              <script type="text/javascript"  src='./customer_files/js/plugins2.js'></script>
              <script type="text/javascript"  src='./customer_files/js/custom.js'></script>
            </Helmet> */}
            {/* <script type="text/javascript"  src='./customer_files/js/jquery.js'></script>
            <script type="text/javascript"  src='./customer_files/js/plugins.js'></script>
            <script type="text/javascript"  src='./customer_files/js/plugins2.js'></script>
            <script type="text/javascript"  src='./customer_files/js/custom.js'></script> */}

        </div>
    );
};

export default Customer_pages_layout;