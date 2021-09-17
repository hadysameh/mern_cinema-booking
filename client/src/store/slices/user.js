import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useHistory } from "react-router-dom";

// let history = useHistory()
export const userSlice = createSlice({
    name:"user",
    initialState:{
        //local storage retrive data as string if the site is reloaded or reopened
        user:localStorage.getItem('user')=='null'?null:localStorage.getItem('user'),
        token:localStorage.getItem('token')=='null'?null:localStorage.getItem('token'),
        error:null        
    },
    reducers:{
        setUser:(state,action)=>{
            // console.log(action.payload) action.payload is exactly the passed value
            console.log(action.payload)
            localStorage.setItem('user', action.payload);
            console.log(localStorage.getItem('user'))
            state.user=action.payload
        },
        setToken:(state,action)=>{  
            console.log(action.payload)
            
            let token =(action.payload==null)?action.payload:action.payload.token
            localStorage.setItem('token', token);
            console.log(localStorage.getItem('token'))
            state.token=token

        },
        setError:(state,action)=>{  
            // console.log(action.payload)
            localStorage.setItem('error', action.payload);
            // console.log(localStorage.getItem('token'))
            state.error=action.payload
        }
    }
})
export const { setUser, setToken,setError } = userSlice.actions

export default userSlice.reducer


//actions
export const login = ({ email, password }) => async dispatch => {
    try {
      const res = await axios.post('/api/user/login', { email, password })
      let token = res.data.token
      let user = res.data.user
      dispatch(setUser({user:JSON.stringify(user)}));
      dispatch(setToken({token}));

    } catch (e) {
        let msg=e.response.data.msg
        // dispatch(setError({e.response.data.msg}));
        dispatch(setError({msg}));

      return console.error(e.message);
    }
  }
export const register = ({ email, password , repassword }) => async dispatch => {
    console.log({ email, password , repassword })
    // console.log('try to dispatch register')
    // console.log('try to use axios')
    // axios.post('/api/user/register', { email, password, repassword }).then(res=>{
    //   // console.log(res)
    //   let token = res.data.token
    //   let user = res.data.user

    //   dispatch(setToken({token}));
    //   dispatch(setUser({user:JSON.stringify(user)}));
    // }).catch((error)=> {
    //   if (error.response) { 
    //     console.log(error.response.data.msg)
    //     // this.setState({error:error.response.data.msg}) 
    //   }
    // })

    try {
      const res = await axios.post('/api/user/register', { email, password, repassword })
      let token = res.data.token
      let user = res.data.user
      dispatch(setUser({user:JSON.stringify(user)}));
      dispatch(setToken({token}));

    } catch (e) {
        let msg=e.response.data.msg
        // dispatch(setError({e.response.data.msg}));
        dispatch(setError({msg}));

      return console.error(e.message);
    }
    
    
  }

export const logout = ()=>async dispatch=>{
  try{
    const res = await axios.post('/api/user/logout')
    console.log(res)
    dispatch(setToken(res.data.token))
    dispatch(setUser(res.data.user))
  }
     

    // axios.post('/api/user/logout')
    // .then((res)=>{     
    //     console.log(res)
    //     dispatch(setToken(res.data.token))
    //     dispatch(setUser(res.data.user))   
    //     history.push('/')
    // }).catch((error)=> {
    //   if (error.response) { 
    //     console.log(error.response.data.msg)
    //   }
    // })
    catch (e) {
        let msg=e.response.data.msg
        // dispatch(setError({e.response.data.msg}));
        dispatch(setError({msg}));

        return console.error(e.message);
    }
}
