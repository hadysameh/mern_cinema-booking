import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../../store/slices/user'
import { useHistory } from "react-router-dom";

// import './../../template_files/css/style.css'

import site_logo from "./../../template_files/images/logo1.png"
// let site_logo = require("./../../template_files/images/logo1.png")

const Navbar = () => {
    const token = useSelector((state) => state.user.token)
    const dispatch = useDispatch()
    const history = useHistory()

    const dispatch_logout=()=>{
        dispatch(logout())
        .then(res=>{
            // console.log(res)
            history.push('/')
        })
        .catch(error=>{
            // console.log(error)
        })
    }
    return (
        <div>
                {/* <!-- BEGIN | Header --> */}
                <header className="ht-header">
                    <div className="container">
                        <nav className="navbar navbar-default navbar-custom">
                                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                <div className="navbar-header logo">
                                    <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                        <span className="sr-only">Toggle navigation</span>
                                        <div id="nav-icon1">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    {/* <a href="index-2.html"><img className="logo" src={site_logo} alt="" width="119" height="58"/></a> */}
                                    <Link to='/'><img className="logo" src={site_logo} alt="" width="119" height="58"/></Link>
                                </div>
                                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                                <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav flex-child-menu menu-left">
                                        {/* <li className="hidden">
                                            <a href="#page-top"></a>
                                        </li>
                                        <li className="dropdown first">
                                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                                            Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu level1">
                                                <li><a href="index-2.html">Home 01</a></li>
                                                <li><a href="homev2.html">Home 02</a></li>
                                                <li><a href="homev3.html">Home 03</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown first">
                                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                            movies<i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu level1">
                                                <li className="dropdown">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Movie grid<i className="ion-ios-arrow-forward"></i></a>
                                                    <ul className="dropdown-menu level2">
                                                        <li><a href="moviegrid.html">Movie grid</a></li>
                                                        <li><a href="moviegridfw.html">movie grid full width</a></li>
                                                    </ul>
                                                </li>			
                                                <li><a href="movielist.html">Movie list</a></li>
                                                <li><a href="moviesingle.html">Movie single</a></li>
                                                <li className="it-last"><a href="seriessingle.html">Series single</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown first">
                                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                            celebrities <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu level1">
                                                <li><a href="celebritygrid01.html">celebrity grid 01</a></li>
                                                <li><a href="celebritygrid02.html">celebrity grid 02 </a></li>
                                                <li><a href="celebritylist.html">celebrity list</a></li>
                                                <li className="it-last"><a href="celebritysingle.html">celebrity single</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown first">
                                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                            news <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu level1">
                                                <li><a href="bloglist.html">blog List</a></li>
                                                <li><a href="bloggrid.html">blog Grid</a></li>
                                                <li className="it-last"><a href="blogdetail.html">blog Detail</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown first">
                                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                            community <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu level1">
                                                <li><a href="userfavoritegrid.html">user favorite grid</a></li>
                                                <li><a href="userfavoritelist.html">user favorite list</a></li>
                                                <li><a href="userprofile.html">user profile</a></li>
                                                <li className="it-last"><a href="userrate.html">user rate</a></li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                    
                                    <ul className="nav navbar-nav flex-child-menu menu-right">
                                        {/* <li className="dropdown first">
                                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                            pages <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                            <ul className="dropdown-menu level1">
                                                <li><a href="landing.html">Landing</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                                <li className="it-last"><a href="comingsoon.html">Coming soon</a></li>
                                            </ul>
                                        </li>  */}
                                        {
                                            token
                                            ?(
                                                <>
                                                    <li className="btn signupLink"><a href="#" onClick={dispatch_logout}>sign out</a></li>
                                                </>
                                            )
                                            :(
                                                <>
                                                    <li className=""><Link to='/login' style={{color:'#fff'}}>Login</Link></li>
                                                    <li className=""><Link to='/register'  style={{padding: '11px 25px',background:'#dd003f',borderRadius:'10px',color:'#fff'}}>sign up</Link></li>
                                                </>
                                            )
                                        }               
                                        
                                    </ul>
                                </div>
                       
                       
                            {/* <!-- /.navbar-collapse --> */}
                        </nav>
                        
                        {/* <!-- top search form --> */}
                        <div className="top-search">
                            <select>
                                <option value="united">TV show</option>
                                <option value="saab">Others</option>
                            </select>
                            <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for"/>
                        </div>
                    </div>
                </header>
                {/* <!-- END | Header --> */}
                <div className="hero common-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-ct">
                                    <h1>WELCOME TO BLOCK BUSTER</h1>
                                    {/* <ul className="breadcumb">
                                        <li className="active"><a href="#">Home</a></li>
                                        <li> <span className="ion-ios-arrow-right"></span> movie listing</li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;