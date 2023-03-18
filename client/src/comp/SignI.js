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
import Load from './Load'

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

export default function SignIn(props) {
  console.log(props.Load)
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [user,setUser]=React.useState({})
  function handleChange(event){
    setUser(old=>{
        return(
            {
                ...old,
                [event.target.id]:event.target.value
            }
        )
       
    })
    console.log(user)
  }
function func(){
  console.log("cbdhbcdbhdc")
}

  return (
    <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
    <div className="card col-lg-4 mx-auto">
      <div className="card-body px-5 py-5">
    
        <h3 className="card-title text-left mb-3">Login</h3>
        <form>
          <div className="form-group">
            <label>E mail *</label>
            <input id="email"  onChange={handleChange} type="text" className="form-control p_input" />
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input 
            onChange={handleChange} id="token" type="password" className="form-control p_input" />
          </div>
      
          <div className="text-center">
            <div
               onClick={()=>props.props(user)}
              className="btn btn-primary btn-block enter-btn"
            >
              Login
            </div>
            <br/>
            <div id="mess"></div>
       
          </div>
          <div className="d-flex">
            <button className="btn btn-facebook mr-2 col">
              <i className="mdi mdi-facebook" /> Facebook{" "}
            </button>
            <button className="btn btn-google col">
              <i className="mdi mdi-google-plus" /> Google plus{" "}
            </button>
          </div>
          <p className="sign-up">
            Don't have an Account?<a href="#"> Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
  );
}