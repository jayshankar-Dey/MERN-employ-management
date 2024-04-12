/* eslint-disable react/prop-types */

import axios from "axios";
import {message} from 'antd'

const DeleteUser = ({id}) => {
    const remove=()=>{
        document.querySelector(".delete").classList.toggle("d-none");
    }
    const confermDelete=async()=>{
      await axios.delete(`/api/v1/user/delete/${id}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
       }).then((res)=>{
        message.success(res.data.message)
       })
       remove()
    }
  return (
    <div className="delete d-none">
    <div className="row justify-content-center align-items-center" style={{height:"600px"}}>
     
      <div className=" d-flex col-md-4 col-9 mx-auto border p-3 bg-light rounded justify-content-between align-items-center  ">
       <button className="btn btn-danger" onClick={remove}>Cancle</button>
       
       <button className="btn btn-success" onClick={confermDelete}>Conferm</button>
      </div>
    </div>
     </div>
  )
}

export default DeleteUser