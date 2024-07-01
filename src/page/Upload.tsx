import React, { useState } from 'react'
import CInputField from '../components/CInputField';
import CButton from '../components/CButton';

function Upload() {
    const [errors , setErrors] = useState<any>({})
    const [values, setvalues] = useState<any>({
        title:"",
        price:"",
        category:"",
        description:"",
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
       
         setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
            setvalues({
                title:"",
                price:"",
                category:"",
                description:"",
            })
            alert('Product Add Successfully');
        }

      
    }


    const handleChange = (e:any) =>{
        const {name, value} =  e.target;
        setvalues({
            ...values, [name] : value
        })
     }
     console.log(values)

  return (
    <div className='max-w-[1300px] mx-auto my-10 bg-[#ededed] p-10 rounded-xl'>
      <h2 className='text-[27px] font-semibold mb-2'>Add Product</h2>
            <div className='mt-2 max-w-[1200px] mx-auto'>
            <form onSubmit={handleSubmit} className='flex flex-col m-3 sm:m-0 text-[18px]' action="">
            <label>Title</label>
            <CInputField onChange={handleChange} value={values.title} id='Title' name='title' className=
            {`${errors.title && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="text" />
            {errors.title && <span className='text-[14px] text-[red]'>{errors.title}</span>}
            <label>Price</label>
            <CInputField onChange={handleChange} value={values.price} id='price' name='price' className=
            {`${errors.price && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`}  type="number"/>
            {errors.price && <span className='text-[14px] text-[red]'>{errors.price}</span>}
            <label>Category</label>
            <CInputField onChange={handleChange} value={values.category} id='category' name='category' className=
            {`${errors.category && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="text"/>
            {errors.category && <span className='text-[14px] text-[red]'>{errors.category}</span>}
            <label>Description</label>
            <textarea onChange={handleChange} value={values.description} id='description' name='description' className=
            {`${errors.description && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`}></textarea>
            {errors.description && <span className='text-[14px] text-[red]'>{errors.description}</span>}
            <div className='grid grid-cols-2'>
              <div className='w-full flex flex-col'>
              <label>Upload Image</label>
              <input value={values.file} className='' type="file" id="file" name="file"/>
              </div>
            <CButton onClick={handleSubmit} label="Upload Product"/>
            </div>
        </form>
      </div>
         
            
        </div>
  )
}

export default Upload