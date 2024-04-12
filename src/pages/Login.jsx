import {  Form ,Input, message} from 'antd'
import '../styles/register.css'
import { Link, useNavigate,Navigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { hideloding, showloding } from '../loding'
import LoadingButton from '../components/LoadingButton'
const Login = () => {
  if(localStorage.getItem("token")){
    return <Navigate to={"/"}/>
  }
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loding}=useSelector((state)=>state.loading)
    const onfinishHandler=async(values)=>{
      dispatch(showloding())
       await axios.post("/api/v1/user/login",{values}).then((res)=>{
        if(res.data.success){
          message.success(res.data.message)
          localStorage.setItem("token",res.data.token)
          dispatch(hideloding())
          navigate('/')
        }else{
          message.warning("email and password does not exiest")
          dispatch(hideloding())
        }
       })
        
    }
  return (
    <>
    <div className="form-container d-flex justify-content-center align-item-center">
   <Form layout='vertical' onFinish={onfinishHandler} className='card p-5 shadow border'>
    <h4 className='px-5 mx-auto text-primary '>Login Hear</h4>
    <Form.Item label="Email" name={"email"}>
        <Input type='email' required/>
    </Form.Item>
    <Form.Item label="Password" name={"password"}>
        <Input type='password' required/>
    </Form.Item>
    <Link className='my-2' to={"/register"}>not any account Register</Link>
    {
      loding ? <LoadingButton/>: <button type='submit' className='btn btn-primary'>login </button>
    }
   </Form>
    </div>
    </>
  )
}

export default Login