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
  return(<>   <div className="col-md-6 col-xl-4 grid-margin stretch-card">
 
  <div className="card">
    <div className="card-body">
      <div className="d-flex flex-row justify-content-between">
        
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField style={{color:"#ffffff"}}onChange={handleChange} id="comments" label="Enter Text" variant="outlined" />
      <Button onClick={()=>props.hc(comment)} variant="contained">Comment</Button>
    </Box>
   <br/>
      
      </div>
      <div className="preview-list">
       
      {props.com.comments.map(item=>{
    return(
      <>
      
        <div  class="blockquote blockquote-primary">
        <div className="preview-item border-bottom">
          <div className="preview-thumbnail">
            <img
              src="assets/images/faces/face11.jpg"
              alt="image"
              className="rounded-circle"
            />
          </div>
          <div className="preview-item-content d-flex flex-grow">
            <div className="flex-grow">
              <div className="d-flex d-md-block d-xl-flex justify-content-between">
                <h6 className="preview-subject">{item.user}</h6>
                <p className="text-muted text-small">{item.time}</p>
              </div>
              <p className="text-muted">
             {item.content}
              </p>
            </div>
          </div>
        </div>

</div>

        </>
    )
  })}


       
      </div>
    </div>
  </div>
</div></>)

}