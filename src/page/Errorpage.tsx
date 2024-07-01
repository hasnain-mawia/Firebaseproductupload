import React from 'react'
import { BsEmojiFrown } from "react-icons/bs";
import CButton from '../components/CButton';
import { useNavigate } from 'react-router-dom';


function Errorpage() {
    const navigate = useNavigate()
  return (
    <div className='bg-[#efefef] h-screen'>
        <div className='flex flex-col justify-center items-center h-full text-[#696969]'>
        <BsEmojiFrown className='text-[120px] text-[#696969]'/>
        <h2 className='text-[90px] font-bold'>Oops!</h2>
        <h3 className='text-[30px]'>PAGE NOT FOUND</h3>
        <CButton onClick={()=> navigate('/')} className="text-[18px] text-[white] bg-[#41a6f4] p-2 mt-3 hover:bg-[#44adda] duration-100 rounded-[30px] px-3" label="GO TO HOME"/>
        </div>
    </div>
  )
}
 
export default Errorpage
