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



export default function Otp(props) {
    const [otp,setOtp]=React.useState({})
    function handleChange(event){
        setOtp(old=>{
            return(
                {
                    ...old,
                    [event.target.id]:event.target.value,
    
                }
            )
        })
        console.log(otp)

    }
  return (
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="row w-100 m-0">
        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
          <div className="card col-lg-4 mx-auto">
            <div className="card-body px-5 py-5">
              <h3 className="card-title text-left mb-3">Enter OTP</h3>
              <form>
                <div className="form-group">
                  <label>OTP</label>
                  <input  onChange={handleChange}  id="otp5"type="number" className="form-control p_input" />
                </div>
               
              
                <div className="text-center">
                  <div
                     onClick={()=>props.handleotp({...props.data,"otp5":otp.otp5})}
                    className="btn btn-primary btn-block enter-btn"
                  >
                    Sign Up
                  </div>
                  <div id="mess"></div>
                </div>
                <div className="d-flex">
                
                </div>
              
                <p className="terms">
                  By creating an account you are accepting our
                  <a> Terms &amp; Conditions</a>
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