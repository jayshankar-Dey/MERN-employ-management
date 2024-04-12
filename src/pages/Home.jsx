import { useEffect, useState } from "react";
import AddUser from "../components/AddUser";
//import EditUser from "../components/EditUser";
import ShowsingleUser from "../components/ShowsingleUser";
import axios from "axios";
//import DeleteUser from "../components/DeleteUser";
//import Users from "../components/Users"
import {message} from 'antd'

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const[name,setName]=useState("")
  const[address,setAddress]=useState("")
  const[file,setFile]=useState("")
  const[image,setImage]=useState("")
  const[id,setID]=useState("")
  //formdata
  const formdata=new FormData()
 formdata.append("name",name);
 formdata.append("address",address);
 formdata.append("file",file);
 //formdata.append("id",id);
  useEffect(() => {
    axios
      .get(`/api/v1/user/getUser/${search}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUsers(res.data.users);
        console.log(users);
      });
  }, [search]);
  const addUser = () => {
    document.querySelector(".adduser").classList.toggle("d-none");
  }

  const EditeUser = () => {
    document.querySelector(".editUser").classList.toggle("d-none");
  };
  const shoeUser = () => {
    document.querySelector(".show").classList.toggle("d-none");
  };
  const showSingleUser=async(id)=>{
    
    await axios.get(`/api/v1/user/getSingleUser/${id}`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    }).then((res)=>{
      setUser(res.data.user)
      setName(res.data.user.name)
      setAddress(res.data.user.address)
      setImage(res.data.user.image.url)
      setID(res.data.user._id)
    })
  }

  //update user
  const showanupdateSingleUser=async(id)=>{
   
    await axios.post(`/api/v1/user/update/${id}`,formdata,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    }).then(()=>{
     
      axios
      .get(`/api/v1/user/getUser/${search}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUsers(res.data.users);
        remove()
      });
    })
  }
  
  const remove=()=>{
    document.querySelector(".editUser").classList.toggle("d-none")
  }
  const deleteConferm=()=> {

    document.querySelector(".delete").classList.toggle("d-none");
  }
  const removeDelete=()=>{
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
   removeDelete()
   axios
   .get(`/api/v1/user/getUser/${search}`, {
     headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`,
     },
   })
   .then((res) => {
     setUsers(res.data.users);
     console.log(users);
   });
}
 
  return (
    <div>
      <div className=" container d-flex justify-content-between">
        <div className="d-flex w-50 px-md-5 p-1  border search">
          <input
            type="text"
            className=" searchfield"
            value={search}
            placeholder="Search................"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="add btn btn-primary mt-2 mx-3" onClick={addUser}>
          <ion-icon name="add-outline"></ion-icon>
        </div>
      </div>

      <div className="container">
        {/* ////user */}
        <div className="userBody">
        {users?.map((users) => (
          <>
            <div className="row " key={users._id}>
              <div className="col-md-8 col-11 d-flex mx-auto border p-1  my-2 d-flex justify-content-between rounded  ">
                <div className="d-flex justify-content-center align-items-center"  >
                  <img
                    src={users.image.url}
                    alt=""
                    height={50}
                    width={50}
                    className="rounded mx-2 img"
                    onClick={()=>{
                      shoeUser()
                      showSingleUser(users._id)
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <h6 onClick={()=>{
                    shoeUser()
                    showSingleUser(users._id)
                  }} style={{ cursor: "pointer" }}>
                    {users.name}
                  </h6>
                  <div className="mx-md-4 mx-2">
                    <p className="m-0">Address:</p>
                    <p
                      className="m-0"
                      style={{ fontSize: "12px", color: "gray" }}
                    >
                      {users.address}
                    </p>
                  </div>
                </div>
                <div className="w-25 d-flex">
                  <button className="btn text-danger" onClick={()=>{
                    deleteConferm()
                    setID(users._id)
                  }}>
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                  <button className="btn text-primary" onClick={()=>{
                    EditeUser()
                    showSingleUser(users._id)
                  }}>
                    <ion-icon name="create-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
           
          </>
        ))}
        </div>
      {
       users? (<></>):(<>
       <div  >
       <h3 className="mx-5 my-2">User not found..</h3>
       <p className="mx-5 text-danger" style={{fontSize:"13px"}}>Please enter valide search dolor sit amet consectetur adipisicing elit.......</p>
       </div>
       </>)
      }
        {/* //enduser */}

        <ShowsingleUser user={user}/>
        <AddUser/>
        {/* delete//conferm */}
        <div className="delete d-none">
    <div className="row justify-content-center align-items-center" style={{height:"600px"}}>
     
      <div className=" d-flex col-md-4 col-9 mx-auto border p-3 bg-light rounded justify-content-between align-items-center  ">
       <button className="btn btn-danger" onClick={removeDelete}>Cancle</button>
       
       <button className="btn btn-success" onClick={confermDelete}>Conferm</button>
      </div>
    </div>
     </div>
        {/* ///end deleteconferm */}
        {/* <EditUser  user={user}/> */}
        <div className="editUser d-none">
    <div className="row justify-content-center align-items-center" style={{height:"600px"}}>
     
      <div className="col-md-4 col-9 mx-auto border p-3 bg-light rounded  ">
        <p className="text-danger btn p-0"onClick={remove} ><ion-icon name="close-outline"></ion-icon></p>
       
        <input type="text" className="form-control mt-3" value={name} placeholder="Edit name" onChange={(e)=>setName(e.target.value)} />
    <input type="text" value={address} className="form-control mt-3" placeholder="Edit Address" onChange={(e)=>setAddress(e.target.value)}/>
    <input type="hidden" value={id}/>
    <input type="file" className="form-control mt-3" onChange={(e)=>setFile(e.target.files[0])} />
   
    {
      image?<img src={image} alt="" height={60} width={60}/>:<img src="" alt="" height={60} width={60}/>
    }
    
    <button className="btn btn-primary mt-2 w-100" onClick={()=>showanupdateSingleUser(id)}>Edit</button>
      </div>
    </div>
     </div>
        {/* // */}
      </div>
    </div>
  );
};

export default Home;
