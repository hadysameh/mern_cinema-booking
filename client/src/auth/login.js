import React ,{ useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {login} from './../store/slices/user'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState(null)
   
    // const token = useSelector((state) => state.user.token)
    const dispatch_login=()=>{
        console.log({email,password})
        dispatch(login({email,password})).then((res)=>{
            // console.log(res)
            history.goBack()

        })
        .catch((error)=> {
            // console.log(error)
            seterror(error)
          })
    
    }
    // useEffect(() => {
    //     console.log(history.location.state);
        
    // }, []);
    return (
        <div themebg-pattern="theme1">
            <link rel="stylesheet" href="../files/bower_components/bootstrap/css/bootstrap.min.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/assets/pages/waves/css/waves.min.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/assets/icon/feather/css/feather.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/assets/icon/themify-icons/themify-icons.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/assets/icon/icofont/css/icofont.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/assets/icon/themify-icons/themify-icons.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/bower_components/chartist/css/chartist.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/assets/icon/font-awesome/css/font-awesome.min.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/assets/css/widget.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/assets/css/style.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="../files/assets/css/pages.css" type="text/css" media="all"/> 
            <div className="theme-loader">
                <div className="loader-track">
                    <div className="preloader-wrapper">
                        <div className="spinner-layer spinner-blue">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="spinner-layer spinner-red">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                        
                        <div className="spinner-layer spinner-yellow">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                        
                        <div className="spinner-layer spinner-green">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Pre-loader end --> */}
                <section className="login-block">
                    {/* <!-- Container-fluid starts --> */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <!-- Authentication card start --> */}
                                <form className="md-float-material form-material" action='#'>
                                    <div className="text-center">
                                        <img src="../files/assets/images/logo.png" alt="logo.png"/>
                                    </div>
                                    <div className="auth-box card">
                                        <div className="card-block" >
                                            <div className="row m-b-20">
                                                <div className="col-md-12">
                                                    <h3 className="text-center txt-primary">Sign In</h3>
                                                </div>
                                            </div>
                                            <div className="row m-b-20">
                                                <div className="col-md-6">
                                                    <button className="btn btn-facebook m-b-20 btn-block"><i className="icofont icofont-social-facebook"></i>facebook</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button className="btn btn-twitter m-b-20 btn-block"><i className="icofont icofont-social-twitter"></i>twitter</button>
                                                </div>
                                            </div>
                                            <p className="text-muted text-center p-b-5">Sign in with your regular account</p>
                                            <div className="form-group form-primary">
                                                <label className="">Email</label>

                                                <input type="text" name="user-name" onChange={e=>setemail(e.target.value)} className="form-control" required=""/>
                                                <span className="form-bar"></span>
                                            </div>
                                            <div className="form-group form-primary">
                                                <label className="">Password</label>

                                                <input type="password" name="password"  onChange={e=>setpassword(e.target.value)} className="form-control" required=""/>
                                                <span className="form-bar"></span>
                                            </div>
                                            <div className="row m-t-25 text-left">
                                                <div className="col-12">
                                                    <div className="checkbox-fade fade-in-primary">
                                                        <label>
                                                            <input type="checkbox" value=""/>
                                                            <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                                            <span className="text-inverse">Remember me</span>
                                                        </label>
                                                    </div>
                                                    <div className="forgot-phone text-right float-right">
                                                        <a href="auth-reset-password.html" className="text-right f-w-600"> Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row m-t-30">
                                                <div className="col-md-12">
                                                    {
                                                        
                                                            error &&<h4 style={{color:'red'}}>{error}</h4>
                                                        
                                                        
                                                    }
                                                    <button type="button" onClick={dispatch_login } className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN</button>
                                                    
                                                </div>
                                            </div>
                                            <p className="text-inverse text-left">Don't have an account?<Link to='/register'><b>Register here </b></Link>for free!</p>
                                        </div>
                                        
                                    </div>
                                </form>
                                    {/* <!-- end of form --> */}
                                </div>
                                {/* <!-- Authentication card end --> */}
                            </div>
                            {/* <!-- end of col-sm-12 --> */}
                        {/* <!-- end of row --> */}
                    </div>
                    {/* <!-- end of container-fluid --> */}
                </section>
                {/* <script type="text/javascript" src="../files/bower_components/jquery/js/jquery.min.js"></script> */}
  
        </div>
    );
};

export default Login;