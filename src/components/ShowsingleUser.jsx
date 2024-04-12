/* eslint-disable react/prop-types */


const ShowsingleUser = ({user}) => {
  const{name,address,image}=user
   
   console.log()
    const remove=()=>{
        document.querySelector(".show").classList.toggle("d-none")
      }
      return (
        <div className="show d-none">
        <div className="row justify-content-center align-items-center" style={{height:"600px"}}>
          <div className="col-md-9 col-9 mx-auto border p-3 bg-light rounded  ">
            <p className="text-danger btn p-0" onClick={remove}><ion-icon name="close-outline"></ion-icon></p>
            <p>Name:{name}</p>
            <p>Address:{address}</p>
           {
            image ? <img src={image.url} alt="" height={200}width={200} className="rounded mx-2 img"/>: <img src={""} alt="" height={200}width={200} className="rounded mx-2 img"/>
           }
           
          </div>
        </div>
         </div>
      )
}

export default ShowsingleUser