// type 9
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CButton from '../components/CButton';
import CInputField from '../components/CInputField';
import { loginUser } from '../config/firebasemethod';
import Forgot from './forgot';

function Signin() {
    const navigate = useNavigate()
    const [errors , setErrors] = useState<any>({})
    const [forgotPassword, setForgetPassword] = useState(false)
    const [values, setvalues] = useState<any>({
        email:"",
        password:"",
    })
    const forgotpass = ()=>{
        setForgetPassword(!forgotPassword);
    }
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        const validationErrors:any = {};
        if(!values.email.trim()){
            validationErrors.email = "Email Must Required"
        }else if(!values.email.match(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/)){
            validationErrors.email = "Email Is Not Valid"

        }
        if(!values.password.trim()){
            validationErrors.password = "Password Must Required"
        }else if(values.password.length < 8){
            validationErrors.password = "Password must be atleast 8 Characters"
            
        }
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
        loginUser(values.email, values.password, navigate)}
    }

  return (
    
        <div className='max-w-[1300px] mx-auto py-10'>
        <div className='grid grid-cols-2 bg-[#ededed] rounded-[30px] justify-center items-center'>
           
           { !forgotPassword ? <div>
            <div className='mt-10 max-w-[600px] mx-auto my-10'>
            <h2 className='text-center text-[30px] font-bold mb-5'>Login</h2>
            <form onSubmit={handleSubmit} className='flex flex-col m-3 sm:m-0 text-[18px]'>
            <label>Email</label>
            <CInputField onChange={(e:any)=> setvalues({...values,email:e.target.value})} value={values.email} id='email' name='email' className={`${errors.email && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="Email"/>
            {errors.email && <span className='text-[14px] text-[red]'>{errors.email}</span>}
             <label>Password</label>
             
                <CInputField onChange={(e:any)=> setvalues({...values,password:e.target.value})} value={values.password} id='password' name='password' className={`${errors.password && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="password"/>
            {errors.password && <span className='text-[14px] text-[red]'>{errors.password}</span>}
             
                <span onClick={forgotpass} className='text-[14px] text-[#387EF5] cursor-pointer'>Forgot Password</span>
                <CButton onClick={handleSubmit} label="Login"/>
        </form>
      </div>
        </div>: <Forgot/> }
        <div className='bg-[#387EF5] py-10 rounded-[30px] flex flex-col gap-5 justify-center items-center text-white px-10 text-center h-full'>
            <h2 className='text-[27px]'>Come Join us!</h2>
            <p className='text-[22px]'>We are so excited to have you here if you
                haven’t already, create an account to get
                access to exclusive offers, rewards, and
                discounts.</p>
                <Link to={'/signup'} className="bg-[#1f4a95] p-2 rounded-[50px] text-[18px] px-4" >Create an account Sign up</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Signin