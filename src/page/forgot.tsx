import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import CButton from '../components/CButton';
import CInputField from '../components/CInputField';
import { forgotPassword} from '../config/firebasemethod';


function Forgot() {
    const [values, setvalues] = useState<any>({
        email:"",
    })
    
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        
        forgotPassword(values.email)
        setvalues({
            email:""
        })
    }

  return (
        <div className='bg-[#ededed] rounded-[30px] justify-center items-center'>
           <div>
            <div className='mt-10 max-w-[600px] mx-auto my-10'>
            <h2 className='text-center text-[30px] font-bold mb-5'>Forgot Password</h2>
            <form onSubmit={handleSubmit} className='flex flex-col m-3 sm:m-0 text-[18px]'>
            <label>Email</label>
            <CInputField onChange={(e:any)=> setvalues({...values,email:e.target.value})} value={values.email} id='email' name='email' className='bg-[#ffffff] p-2 rounded-md w-full' type="Email"/>
            <CButton onClick={handleSubmit} label="Forgot Password"/>
        </form>
      </div>
        </div> 
        
        </div>
  )
}

export default Forgot