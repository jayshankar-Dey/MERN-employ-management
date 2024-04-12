
const Users = () => {
  const EditUser=()=>{
    document.querySelector(".editUser").classList.toggle("d-none")
   }
   const shoeUser=()=>{
    document.querySelector(".show").classList.toggle("d-none")
   }
  return (
    <div className="col-md-8 col-11 d-flex mx-auto border p-1  my-2 d-flex justify-content-between rounded  ">
     <div className="d-flex justify-content-center align-items-center">
     <img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="" height={50} width={50} className="rounded mx-2 img" onClick={shoeUser} style={{cursor:"pointer"}}/>
     <h6 onClick={shoeUser} style={{cursor:"pointer"}}>sabyachi</h6>
     <div className="mx-md-4 mx-2">
        <p className="m-0">Address:</p>
        <p className="m-0" style={{fontSize:"12px",color:"gray"}}>teghari jaleswar</p>
     </div>
     </div>
     <div className="w-25 d-flex">
    <button className="btn text-danger"><ion-icon name="trash-outline"></ion-icon></button>
    <button className="btn text-primary" onClick={EditUser}><ion-icon name="create-outline"></ion-icon></button>
     </div>
     
    </div>
  )
}

export default Users