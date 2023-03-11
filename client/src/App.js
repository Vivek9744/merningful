import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import React, { useCallback } from "react"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from './NavBar'
import SideBar from './comp/SideBar'
import SideBar1 from './comp/SideBar1'
import jwt_decode from 'jwt-decode'

import {addUser} from "./service/api"
import {isUser} from "./service/api"
import SignU from './comp/SignU'
import ReactDOM from 'react-dom/client';
//const socket=io.connect("http://172.31.139.237:3001/")
//const socket=io.connect("https://mern1-8ka4.onrender.com/")

const socket=io.connect("chatrmn.eu-4.evennode.com")

function App() {
  var userObject
  const [Img,setImg]=React.useState({})
  async function handleCallbackResponse(response){
console.log(response.credential)
userObject=jwt_decode(response.credential)
console.log(userObject)
setImg(userObject)


document.getElementById("hide").hidden=true;
console.log(Img.aud)
const k={
  "token":Img.aud,
"given_name":Img.given_name,
"family_name":Img.family_name,

"name":Img.name,
"email":Img.email,
"picture":Img.picture,

}
console.log(k)
await addUser(k)
  }
  React.useEffect(()=>{
    /*global google*/
    google.accounts.id.initialize({
      client_id:"305937744211-8v5vok62adns8jiok8dcrqltdmlhoqkl.apps.googleusercontent.com",
      callback:handleCallbackResponse
    
    })
    google.accounts.id.renderButton(
      document.getElementById('sign1'),
      {
        theme:"outline",size:"large"
      }
    );
  },[])
  function Log(){
      setImg({})
      document.getElementById("hide").hidden=false;
  }
  async function handleSignUp(user){
    const k={
        "token":user.token,
      "given_name":user.given_name,
      "family_name":user.family_name,
      
      "name":`${user.given_name}${user.family_name}`,
      "email":user.email,
      "picture":"gfgh",
      
      }
      console.log(k)
      console.log(await addUser())
     const code= await addUser(k)
  
     if(Object.keys(code.response.data).length===0){
        console.log("submitted")
        setImg(k)
      
       
     }else
    console.log("not Submitted")
}
async function handleSignIn(user){
  const k={
      "token":user.token,
    "given_name":"l",
    "family_name":"l",
    
    "name":"k",
    "email":user.email,
    "picture":"gfgh",
    
    }
    console.log(k)
    console.log(await isUser())
   const code= await isUser(k)

   if((code.response.data)===0){
      console.log("Please check your credential")
    
     
   }else{
    setImg(code.response.data)
    
    const root = ReactDOM.createRoot(
      document.getElementById('mess')
    );
    
    root.render(
      <>
      Please check your credentials
      </>
    );
   }
 
  
  
}

 
  return (
    <div className="App">
 <div id="home">
     <SideBar Img={Img} sifun={handleSignIn} sufun={handleSignUp} log={Log}/>
     </div>
     <div id="sign"></div>
     
    </div>
  );
}

export default App;
