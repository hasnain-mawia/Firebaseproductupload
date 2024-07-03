import { Button } from '@mui/material';

function CButton(props:any) {
    let {onClick,label,className} = props;
  return (
    <Button sx={{
      marginTop:3,
      backgroundColor:"#000",
      textTransform:'none',
      fontSize:18,
      "&:hover":{backgroundColor:"#3c3c3c",}
    }}
      variant="contained"
      className={className}
      onClick={onClick}>
        {label}</Button>
  )
}

export default CButton
