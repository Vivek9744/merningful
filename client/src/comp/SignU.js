import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {addUser} from '../service/api'
import ReactDOM from 'react-dom/client';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignU(props) {
 const [user,setUser]=React.useState({})
function handleChange(event){
    setUser(old=>{
        return(
            {
                ...old,
                [event.target.id]:event.target.value,

            }
        )
    })
    console.log(user)

}
function    Log(){
    console.log("Logout")
}
async function handleClick(){
    const k={
        "token":user.token,
      "given_name":user.given_name,
      "family_name":user.family_name,
      
      "name":`${user.given_name}${user.family_name}`,
      "email":user.email,
      "picture":"https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      
      }
      console.log(k)
      console.log(await addUser())
     const code= await addUser(k)
  
     if(Object.keys(code.response.data).length===0){
        console.log("submitted")
       
      
       
     }else
    console.log("not Submitted")
}
console.log(props.props)
  return (
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="row w-100 m-0">
        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
          <div className="card col-lg-4 mx-auto">
            <div className="card-body px-5 py-5">
              <h3 className="card-title text-left mb-3">Register</h3>
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input  onChange={handleChange}  id="given_name"type="text" className="form-control p_input" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input  onChange={handleChange} id="family_name"type="text" className="form-control p_input" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input  onChange={handleChange} id="email"type="email" className="form-control p_input" />
                </div>
                <div   className="form-group">
                  <label>Password</label>
                  <input  onChange={handleChange} type="password"id="token" className="form-control p_input" />
                </div>
              
                <div className="text-center">
                  <div
                     onClick={()=>props.props(user)}
                    className="btn btn-primary btn-block enter-btn"
                  >
                    Sign Up
                  </div>
                  <div id="mess"></div>
                </div>
                <div className="d-flex">
                
                </div>
                <p className="sign-up text-center">
                  Already have an Account?<a href="#"> Sign Up</a>
                </p>
                <p className="terms">
                  By creating an account you are accepting our
                  <a href="#"> Terms &amp; Conditions</a>
                </p>
              </form>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* row ends */}
    </div>
    {/* page-body-wrapper ends */}
  </div>
  );
}