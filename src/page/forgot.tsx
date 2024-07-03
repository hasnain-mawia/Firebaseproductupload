import React, { useState } from 'react'
import CButton from '../components/CButton';
import CInputField from '../components/CInputField';
import { forgotPassword} from '../config/firebasemethod';


function Forgot() {
    const [errors, setErrors] = useState<any>({})
    const [values, setvalues] = useState<any>({
        email:"",
    })
    const handleSubmit = (e:any) =>{
        e.preventDefault();
      const validationErrors:any = {};
      if(!values.email.trim()){
        validationErrors.email = "Please Enter Registered Email"
      }    
      else if(!values.email.match(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/)){
        validationErrors.email = "Email Is Not Valid"
      }   
      setErrors(validationErrors)

      if(Object.keys(validationErrors).length === 0){
        forgotPassword(values.email)
        setvalues({
          email:""
        })
      }
    }

  return (
        <div className='bg-[#ededed] rounded-[30px] justify-center items-center'>
           <div>
            <div className='mt-10 max-w-[600px] mx-auto my-10'>
            <h2 className='text-center text-[30px] font-bold mb-5'>Forgot Password</h2>
            <form onSubmit={handleSubmit} className='flex flex-col m-3 sm:m-0 text-[18px]'>
            <label>Email</label>
            <CInputField onChange={(e:any)=> setvalues({...values,email:e.target.value})} value={values.email} id='email' name='email' className={`${errors.email && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="Email"/>
            {errors.email && <span className='text-[14px] text-[red]'>{errors.email}</span>}
            <CButton onClick={handleSubmit} label="Forgot Password"/>
        </form>
      </div>
        </div> 
        
        </div>
  )
}

export default Forgot