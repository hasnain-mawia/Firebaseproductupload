import React, { useState } from 'react'
import CInputField from '../components/CInputField';
import CButton from '../components/CButton';
import { sendData } from '../config/firebasemethod';
import { toast } from 'react-toastify';

function Upload() {
    const [errors , setErrors] = useState<any>({})
    const [values, setvalues] = useState<any>({
        title:"",
        price:"",
        category:"",
        description:"",
        upload:"",
    })

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        const validationErrors:any = {};
        if(!values.title.trim()){
            validationErrors.title = "Title Must Required"
        }
        if(!values.price.trim()){
            validationErrors.price = "Price Must Required"
  
        }
        if(!values.category.trim()){
            validationErrors.category = "Category Must Required"
        }    
        if(!values.description.trim()){
        validationErrors.description = "Description Must Required"
        }
        if(!values.upload.trim()){
        validationErrors.upload = "Please Upload product image"
        }
       
         setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
            sendData('Upload Product',values).then((res)=>{
            toast.success(`${values.title} Added Successfully`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                    });
            }).catch((err)=>{
                toast.error(`${values.title} err`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                    });
            })
            setvalues({
                title:"",
                price:"",
                category:"",
                description:"",
                upload:"",
            })
        }

      
    }

  return (
    <div className='max-w-[1300px] mx-auto my-10 bg-[#ededed] p-10 rounded-xl'>
      <h2 className='text-[27px] font-semibold mb-2'>Add Product</h2>
            <div className='mt-2 max-w-[1200px] mx-auto'>
            <form onSubmit={handleSubmit} className='flex flex-col m-3 sm:m-0 text-[18px]' action="">
            <label>Title</label>
            <CInputField onChange={(e:any)=> setvalues({...values,title:e.target.value})} value={values.title} id='Title' name='title' className=
            {`${errors.title && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="text" />
            {errors.title && <span className='text-[14px] text-[red]'>{errors.title}</span>}
            <label>Price</label>
            <CInputField onChange={(e:any)=> setvalues({...values,price:e.target.value})} value={values.price} id='price' name='price' className=
            {`${errors.price && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`}  type="number"/>
            {errors.price && <span className='text-[14px] text-[red]'>{errors.price}</span>}
            <label>Category</label>
            <CInputField onChange={(e:any)=> setvalues({...values,category:e.target.value})} value={values.category} id='category' name='category' className=
            {`${errors.category && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="text"/>
            {errors.category && <span className='text-[14px] text-[red]'>{errors.category}</span>}
            <label>Description</label>
            <textarea onChange={(e:any)=> setvalues({...values,description:e.target.value})} value={values.description} id='description' name='description' className=
            {`${errors.description && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`}></textarea>
            {errors.description && <span className='text-[14px] text-[red]'>{errors.description}</span>}
            <div className='grid grid-cols-2 gap-2'>
              <div className='w-full flex flex-col'>
              <label>Upload Image</label>
              <CInputField onChange={(e:any)=> setvalues({...values,upload:e.target.value})} value={values.upload} id='upload' name='upload' className=
                {`${errors.upload && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="text"/>
                {errors.upload && <span className='text-[14px] text-[red]'>{errors.upload}</span>}
              </div>
            <CButton onClick={handleSubmit} label="Upload Product"/>
            </div>
        </form>
      </div>
         
            
        </div>
  )
}

export default Upload