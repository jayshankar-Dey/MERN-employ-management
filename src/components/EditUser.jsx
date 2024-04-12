/* eslint-disable react/prop-types */
import { useState } from "react"


const EditUser = ({user}) => {
  const{name,address}=user
   
    const remove=()=>{
        document.querySelector(".editUser").classList.toggle("d-none")
      }
      
      const[Name,setName]=useState("")
      const[Address,setAddress]=useState("")
      const[file,setFile]=useState("")
      
    
      
  return (
    <div className="editUser d-none">
    <div className="row justify-content-center align-items-center" style={{height:"600px"}}>
      {name}
      <div className="col-md-4 col-9 mx-auto border p-3 bg-light rounded  ">
        <p className="text-danger btn p-0"onClick={remove} ><ion-icon name="close-outline"></ion-icon></p>
        <input type="text" className="form-control mt-3" value={Name} placeholder="Edit name" onChange={(e)=>setName(e.target.value)} />
    <input type="text" value={Address} className="form-control mt-3" placeholder="Edit Address" onChange={(e)=>setAddress(e.target.value)}/>
    <input type="file" className="form-control mt-3" onChange={(e)=>setFile(e.target.files[0])} />
    <img src="" alt="" height={60} width={60}/>
    <button className="btn btn-primary mt-2 w-100">Edit</button>
      </div>
    </div>
     </div>
  )
}

export default EditUser