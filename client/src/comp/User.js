import {getUsers} from "../service/api"
import React from "react"
import ReactDOM from 'react-dom/client';
import Message from './Message'
import Load from './Load'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import {searchUser} from '../service/api'
import Profile  from "./Profile";
export default function User(props){
    const [users,setUsers]=React.useState([])
    React.useEffect(()=>{
    getAllUsers()
    },[])
    
    const getAllUsers=async()=>{
      const root = ReactDOM.createRoot(
        document.getElementById('load')
      );
      
      root.render(
        <>
        <Load/>
        </>
      );
        let response=await getUsers();
        setUsers(response.data)
        root.render(
          <>
          
          </>
        );
        console.log(response)
        console.log(users)
    }
    function handleMessage(event){
      const root = ReactDOM.createRoot(
        document.getElementById('main')
      );
      
      root.render(
        <>
      
      <Message from={props.email} to={event.target.id}/></>
      );
    }
    const [search,setSearch]=React.useState({ "name":"","email":"","given_name":"","picture":"","token":"","family_name":"" })
    function handleChange(event){
setSearch(old=>{
  return(
    {
      ...old,
      [event.target.id]:event.target.value
    }
  )
})
console.log(search)

    }
   async function handleSearch(){
      const code= await searchUser(search)
      setUsers(code.response.data)
      const root = ReactDOM.createRoot(
        document.getElementById('search')
      );
      
      root.render(
        <>
        Search Results
        </>
      );
      console.log(code)
    }
    function handleProfile(event){

 const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <Profile user={event.email} props={event}/>
    );
    }
  return(<>
  
      <div style={{background:"#ffffff",margin:"10px",borderRadius:"10px"}}>
        <br/>
  <TextField
        onChange={handleChange}
          id="name"
          label="Search User"
          multiline
          maxRows={4}
          defaultValue=""
        />
       
       
        <Stack direction="row" spacing={2}>
          <br/>
      
      <Button style={{marginLeft:"40%"}} onClick={handleSearch} variant="contained" endIcon={<SendIcon />}>
        Search
      </Button>
    </Stack>
    </div>
  <div className="row">
    <div id="load"></div>
         
  {
                users.map(item=>{
                    const k="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    var t;
                    if(item.picture==="gfgh"){
                        t="assets/images/dashboard/Rectangle.jpg"
                    }
                    else{
                        t=[item.picture]
                    }
                    return(<>
         <div className="col-md-6 col-xl-4 grid-margin stretch-card">
           <div className="card">
             <div className="card-body">
           
               <h4 className="card-title">{item.name}</h4>
               <div
                 className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel"
                
               >
                 <div className="item">
                  
                 </div>
                
               </div>
               <div className="d-flex py-4">
                 <div className="preview-list w-100">
                 <div className="preview-thumbnail">
                      
                      <img
                        src={t}
                       
                        alt=""
                        style={{height:"110%"}}
                      />
                    </div>
                   <div className="preview-item p-0">
                     
                     <div className="preview-item-content d flex-grow">
                     <button id={item.email} onClick={handleMessage} className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Message</button><br/>
                     <button style={{width:"50%"}} onClick={()=>handleProfile(item)}  className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">View Profile</button>
        
                     </div>
                   </div>
                 </div>
               </div>
              
             
             </div>
           </div>
         </div>
         </>

)
})
}

        
       </div>
     
  </>)
}