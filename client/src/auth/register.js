import React ,{ useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {register} from './../store/slices/user'
import { useHistory } from "react-router-dom";
import {Helmet} from "react-helmet";

const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [repassword, setrepassword] = useState('')
    const [error, seterror] = useState(null)

    useEffect(()=>{
        // console.log(useSelector((state) => state.token))
    })
    const dispatch_register=()=>{
        // console.log({email,password,repassword})
        dispatch(register({email,password,repassword})).then((res)=>{
            history.push('/')
            console.log(res)
        })
        .catch((err)=> {
            seterror(err)
            console.log(err)
          })
        
    }
    return (
        <div themebg-pattern="theme1">
            <Helmet>
            <link rel="stylesheet" href="./admin_files/bower_components/bootstrap/css/bootstrap.min.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/assets/pages/waves/css/waves.min.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/assets/icon/feather/css/feather.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/assets/icon/themify-icons/themify-icons.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/assets/icon/icofont/css/icofont.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/assets/icon/themify-icons/themify-icons.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/bower_components/chartist/css/chartist.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/assets/icon/font-awesome/css/font-awesome.min.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/assets/css/widget.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/assets/css/style.css" type="text/css" media="all"/> 
            <link rel="stylesheet" href="./admin_files/assets/css/pages.css" type="text/css" media="all"/> 
            </Helmet>

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
                            <form className="md-float-material form-material" action=''> 
                                <div className="text-center">
                                    <img src="./admin_files/assets/images/logo.png" alt="logo.png"/>
                                </div>
                                <div className="auth-box card">
                                    <div className="card-block">
                                        <div className="row m-b-20">
                                            <div className="col-md-12">
                                                <h3 className="text-center txt-primary">Sign up</h3>
                                            </div>
                                        </div>
                                        <div className="row m-b-20">
                                            <div className="col-md-6">
                                                <a href="#!" className="btn btn-facebook m-b-20 btn-block waves-effect waves-light"><i className="icofont icofont-social-facebook"></i>facebook</a>
                                            </div>
                                            <div className="col-md-6">
                                                <a href="#!" className="btn btn-twitter m-b-0 btn-block waves-effect waves-light"><i className="icofont icofont-social-twitter"></i>twitter</a>
                                            </div>
                                        </div>
                                        <p className="text-muted text-center p-b-5">Sign up with your regular account</p>
                                        
                                        <div className="form-group form-primary">
                                            <label className="">Your Email Address</label>

                                            <input type="text" name="email" className="form-control" onChange={e=>setemail(e.target.value)} required=""/>
                                            <span className="form-bar"></span>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group form-primary">
                                                    <label className="">Password</label>

                                                    <input type="password" name="password"onChange={e=>setpassword(e.target.value)} className="form-control" required=""/>
                                                    <span className="form-bar"></span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group form-primary">
                                                    <label className="">Confirm Password</label>

                                                    <input type="password" name="confirm-password" onChange={e=>setrepassword(e.target.value)} className="form-control" required=""/>
                                                    <span className="form-bar"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row m-t-25 text-left">
                                           
                                        </div>
                                        <div className="row m-t-30">
                                            <div className="col-md-12">
                                                {
                                                    error &&<h4 style={{color:'red'}}>{error}</h4>
                                                
                                                }
                                                {/* <button onClick={dispatch_register} className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign up now</button> */}
                                                <a onClick={dispatch_register} className="btn btn-primary btn-md btn-block text-white waves-effect text-center m-b-20">Sign up now</a>

                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-10">
                                                <p className="text-inverse text-left m-b-0">Thank you.</p>
                                                <p className="text-inverse text-left"><a href="../index.html"><b>Back to website</b></a></p>
                                            </div>
                                            <div className="col-md-2">
                                                <img src="./admin_files/assets/images/auth/Logo-small-bottom.png" alt="small-logo.png"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- Authentication card end --> */}
                        </div>
                        {/* <!-- end of col-sm-12 --> */}
                    </div>
                    {/* <!-- end of row --> */}
                </div>
                {/* <!-- end of container-fluid --> */}
            </section>
        </div>
    );
};

export default Register;