import { message } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
const Navbar = () => {
  const{user}=useSelector((state)=>state.user)
  const navigate=useNavigate()
  const logoutUser=()=>{
   localStorage.removeItem("token")
   message.success("Logout succesfully")
   return navigate("/login")
  }
  // const[user,setUser]=useState("")
  // useEffect(()=>{
  //   axios.get('/api/v1/user/auth',{
  //     headers:{
  //       Authorization:`Bearer ${localStorage.getItem("token")}`
  //     }
  //   }).then((res)=>{
  //     setUser(res.data.user)
      
  //   })
  // },[])
  return (
    <>
    <nav className="navbar navbar-light bg-light justify-content-between border sticky-top">
    {
        localStorage.getItem("token") ? (<>
         <div className="d-flex justify-content-center align-items-center "style={{marginLeft:"20px"}}> 
        <img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="" height={50} width={50} className="rounded mx-2 img"/>
       <p className="addicon"><ion-icon name="image-outline"></ion-icon></p>
        <h6>{user?.name}</h6>
     </div>
     
        </>):(<></>)
      }
    
      {
        localStorage.getItem("token") ? (<>
        <button className="mx-5 btn  text-danger" onClick={()=>logoutUser()}>
        Logout
      </button>
        </>):(<></>)
      }
   
    
 </nav>
    </>
  )
}

export default Navbar