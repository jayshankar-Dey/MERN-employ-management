/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import { setUser } from './src/user'
import axios from "axios";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
const ProtectedRoute = ({children}) => {
  const token= localStorage.getItem("token")
  const{user}=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  const getUser=async()=>{
    try {
      const res=await axios.get('/api/v1/user/auth',{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      
      })
      if(res.data.success){
        dispatch(setUser(res.data.user))
      }else{
        return <Navigate to={"/login"}/>
      }
    } catch (error) {
      console.log(error)
    }
  }
  
    useEffect(()=>{
      if(!user){
        getUser()
      }
    },[user,getUser])
 

  if(user){
    return children
  }else{
    return <Navigate to={"/login"}/>
  }
}

export default ProtectedRoute