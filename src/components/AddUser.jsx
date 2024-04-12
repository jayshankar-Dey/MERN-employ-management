import { useState } from "react"
import axios from 'axios'
import { message } from "antd"
import{useDispatch,useSelector} from "react-redux"
import{showloding,hideloding} from '../loding'
import LoadingButton from '../components/LoadingButton'
const AddUser = () => {
  const remove=()=>{
    document.querySelector(".adduser").classList.toggle("d-none")
  }
  const[name,setName]=useState("")
  const[address,setAddress]=useState("")
  const[file,setFile]=useState("")
const dispatch=useDispatch()
const{loding}=useSelector((state)=>state.loading)
  const formdata=new FormData()
 formdata.append("name",name);
 formdata.append("address",address);
 formdata.append("file",file);
const handleSubmit=async(e)=>{
e.preventDefault()
dispatch(showloding())
 await axios.post('/api/v1/user/addUser',formdata,{
  headers:{
    Authorization:`Bearer ${localStorage.getItem("token")}`
  }
 }).then((res)=>{
  message.success(res.data.message)
  setName("")
 setAddress("")
 setFile("")
 dispatch(hideloding())
})
 
}
  return (
    <div className="adduser d-none">
    <div className="row justify-content-center align-items-center" style={{height:"600px"}}>
      <div className="col-md-4 col-9 mx-auto border p-3 bg-light rounded  ">
        <p className="text-danger btn p-0" onClick={remove}><ion-icon name="close-outline"></ion-icon></p>
        <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mt-3" placeholder="Enter name"value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" className="form-control mt-3" value={address} placeholder="Enter Address"onChange={(e)=>setAddress(e.target.value)}/>
        <input type="file"  className="form-control mt-3"onChange={(e)=>setFile(e.target.files[0])} />
        {
          loding ? <button className="btn btn-primary mt-2 w-100"><LoadingButton/></button>: <button className="btn btn-primary w-100 mt-2">Add</button>
        }
        </form>
      </div>
    </div>
     </div>
  )
}

export default AddUser