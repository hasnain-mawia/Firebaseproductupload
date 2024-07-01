type propsType = {
  placeholder?: string;
  onChange?: any;
  type?: string;
  className:string;
  value?: any;
  id?:any;
  name?:any;
}


function CInputField(props:propsType) {
    let {type,placeholder,className, onChange,value,id,name} = props;
  return (
    <div>
      <input id={id} name={name} value={value} type={type} placeholder={placeholder} className={className} onChange={onChange}/>
    </div>
  )
}

export default CInputField
