import {  Form ,Input, message} from 'antd'
import '../styles/register.css'
import { Link, useNavigate,Navigate } from 'react-router-dom'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { hideloding, showloding } from '../loding'
import LoadingButton from '../components/LoadingButton'
const Register = () => {
  if(localStorage.getItem("token")){
    return <Navigate to={"/"}/>
  }
  const dispach=useDispatch()
  const{loding}=useSelector((state)=>state.loading)
  const navigate=useNavigate()
    const onfinishHandler=async(values)=>{
       dispach(showloding())
       const res= await axios.post("/api/v1/user/register",{values})
      if(res.data.success){
        message.success(res.data.message)
        navigate('/login')
        dispach(hideloding())
      }else{
        dispach(hideloding())
      }
    }
  return (
    <>
    <div className="form-container d-flex justify-content-center align-item-center">
   <Form layout='vertical' onFinish={onfinishHandler} className='card p-5 shadow border'>
    <h4 className='px-5 mx-auto text-primary '>Register Hear</h4>
    <Form.Item label="Name" name={"name"}>
        <Input type='text' required/>
    </Form.Item>
    <Form.Item label="Email" name={"email"}>
        <Input type='email' required/>
    </Form.Item>
    <Form.Item label="Password" name={"password"}>
        <Input type='password' required/>
    </Form.Item>
    <Link className='my-2' to={"/login"}>have any account please login</Link>
    {
      loding ? <LoadingButton/>:<button type='submit' className='btn btn-primary'>Register </button>
    }
   </Form>
    </div>
    </>
  )
}

export default Register