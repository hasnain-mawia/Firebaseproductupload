import React from 'react'
import CButton from '../components/CButton'
import { sendData } from '../config/firebasemethod'

function Home() {
  return (
    <div className='max-w-[1300px] mx-auto py-6'>
      <div className='grid grid-cols-5'>
        <div className='shadow-xl border-[1px] border-[#b0b0b0] p-2 rounded-[30px] flex flex-col justify-center items-center'>
          <img className='w-[150px]' src={require('../assets/images/p-1.png')} alt="" />
          <div className='text-center'>
          <p className='text-[19px] font-medium'>Apple Iphone 14 plus</p>
          <p className='text-[17 px] font-medium text-[green]'>RS: 420,999</p>
          <CButton onClick={sendData} label="Add to cart"/>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Home
