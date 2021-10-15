import { Route, Redirect } from "react-router-dom";
import {useEffect,useState} from 'react'
import axios from "axios";



const AuthProtectedeRoute =({component:Component,...rest})=>{
   const [isLoading, setisLoading] = useState(true)
   const [isAuth, setisAuth] = useState(false)
   useEffect(()=>{
    axios.post('/api/user/isauth')
    .then((res)=>{
        // console.log(res)
        if(res.data.status=='unauthorized'){
            setisAuth(false)
            setisLoading(false)
        }
        else
        {
            setisAuth(true)
            setisLoading(false)
        }
    })
    .catch(error=>{
        // console.log(error.response)
        setisAuth(false)
        setisLoading(false)
    })
   },[])
    return(
        <Route 
            {...rest}
            render ={(props)=>{
                if(!isLoading){
                    if(isAuth){
                        // console.log(isAuth)            
                        return (
                        <div>
                            {rest.ScrollToTtheTop}
                            <Component {...props} {...rest} Content={rest.Content}/>
                        </div>
                 
                )
                    }
                    else {
                        // console.log(isAuth)            
                        return <Redirect to="/login"/>;
                        // return <Redirect
                        //     to={{
                        //     pathname: "/login",
                        //     state: { path: rest.path }
                        // }}
                        ///>

                    }
                }
                else{
                    return (
                    <div className="d-flex justify-content-center align-items-center">
                            <div className="spinner-border text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    </div>
                    )
                }
            }}
            />
    )
}

export default AuthProtectedeRoute