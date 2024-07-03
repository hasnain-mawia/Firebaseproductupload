import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CInputField from '../components/CInputField';
import CButton from '../components/CButton';
import { signupUser } from '../config/firebasemethod';

function Signup() {
    const navigate = useNavigate()
    const [errors , setErrors] = useState<any>({})
    const [values, setvalues] = useState<any>({
        email:"",
        password:"",
        cpassword:"",
    })

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
        if(!values.cpassword){
        validationErrors.cpassword = "Confirm Password Must Required"
        }
        if(values.cpassword !== values.password){
            validationErrors.cpassword = "Password Not Match"
        }
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
        signupUser(values.email, values.password,navigate)
        setvalues({
            email:"",
            password:"",
            cpassword:"",
        })
    }}
  return (
    <div className='max-w-[1300px] mx-auto my-10'>
        <div className='grid grid-cols-2 bg-[#ededed] rounded-[30px]'>
        <div className='bg-[#387EF5] py-10 rounded-[30px] flex flex-col gap-5 justify-center items-center text-white px-10 text-center'>
            <h2 className='text-[27px]'>Come Join us!</h2>
            <p className='text-[22px]'>We are so excited to have you here if you
                haven’t already, create an account to get
                access to exclusive offers, rewards, and
                discounts.</p>
                <Link to={'/login'} className="bg-[#1f4a95] p-2 rounded-[50px] text-[18px] px-4" >Already have an account? Login</Link>
            </div>
            <div>
            <div className='mt-10 max-w-[600px] mx-auto py-10'>
            <h2 className='text-center text-[30px] font-bold mb-2'>Signup</h2>
            <form onSubmit={handleSubmit} className='flex flex-col m-3 sm:m-0 text-[18px]' action="">
            <label>Email</label>
            <CInputField onChange={(e:any)=> setvalues({...values,email:e.target.value})} value={values.email} id='email' name='email' className={`${errors.email && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="Email"/>
            {errors.email && <span className='text-[14px] text-[red]'>{errors.email}</span>}
            <label>Password</label>
            <CInputField onChange={(e:any)=> setvalues({...values,password:e.target.value})} value={values.password} id='password' name='password' className={`${errors.password && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="password"/>
            {errors.password && <span className='text-[14px] text-[red]'>{errors.password}</span>}
            <label>Confirm Password</label>
            <CInputField onChange={(e:any)=> setvalues({...values,cpassword:e.target.value})} value={values.cpassword} id='cpassword' name='cpassword'className={`${errors.cpassword && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="password"/>
            {errors.cpassword && <span className='text-[14px] text-[red]'>{errors.cpassword}</span>}
            <CButton onClick={handleSubmit} label="Sign up"/>
        </form>
      </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Signup