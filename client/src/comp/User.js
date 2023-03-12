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
      raman
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
  return(
    <>
   
    <TextField
        onChange={handleChange}
          id="name"
          label="Search User"
          multiline
          maxRows={4}
          defaultValue=""
        />
       
       
        <Stack direction="row" spacing={2}>
      
      <Button onClick={handleSearch} variant="contained" endIcon={<SendIcon />}>
        Search
      </Button>
    </Stack>
    <section className="text-gray-600 body-font">
      <div id="load"></div>
      <div id="search"></div>
        <div className="container px-5 py-24 mx-auto">
          
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {
                users.map(item=>{
                    const k="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    var t;
                    if(item.picture==="gfgh"){
                        t="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    else{
                        t=[item.picture]
                    }
                    return(
                        <>
                         <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={t} />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{item.name}</h2>
              <p className="leading-relaxed text-base">{item.email}</p>
              <button id={item.email} onClick={handleMessage} className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Message</button>
            </div>
            
                        </>
                    )
                })
            }
           
          </div>
        </div>
      </section>
    </>
    )
}