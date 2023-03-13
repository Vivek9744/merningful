import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addComment } from '../service/api';

export default function Comment(props){
  console.log(props)
  const d=new Date().toLocaleString()
  const [comment,setComment]=React.useState({"id":props.com._id,"user":props.user.name,"time":""})
  function handleChange(event){
   
   console.log(d)
    setComment(old=>{
      return(
        {
          ...old,
          "time":d,
          [event.target.id]:event.target.value
        }
      )
    })
    console.log(comment)

  }
  async function handleClick(){
    console.log("cloc")
    await addComment(comment)

  }
  console.log(props)
  return(<>
   <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleChange} id="comments" label="Enter Text" variant="outlined" />
      <Button onClick={handleClick} variant="contained">Comment</Button>
    </Box>
   
  {props.com.comments.map(item=>{
    return(
      <>
      <div style={{backgroundColor:"#000080",width: "18rem"}} className="card">
    <div className="card-body">
    <h5 style={{color:"#ffffff"}}className="card-title">{item.user}</h5>
   
    <p style={{backgroundColor:"#000000",color:"#ffffff"}}className="card-text">
      
      {item.content}
    </p>
   
  </div>
</div></>
    )
  })}




  </>)

}