import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Makeclub from './Makeclub';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SideBar1 from './SideBar1'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';
import Feed from './Feed'
import SignU from './SignU'
import SignI from './SignI'
import User from './User'
import Message from './Message';
import logo from '../logo.jpg'
import Load from './Load';
import Post from './Post'
import About from './About'
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function SideBar(props) {
  const navigate = useNavigate();
  React.useEffect(()=>{
    if(Object.keys(props.Img).length===0)
    navigate("/")
  },[])
 
  console.log(props)
 
  function ch(){
   console.log("clikked")
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <Profile user={props.Img.email} props={props.Img}/>
    );
  }
  function Fee(){
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <Feed see={handleSeeMore} props={props.Img}/>
    );

  }
  
 
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  function handleSignUp(){
    
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <SignU props={props.sufun}/>
    );


  }
  function handleSignIn(){
    
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <SignI props={props.sifun} load={props.load}/>
    );


  }
  function Friends(){
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <>
    
    <User email={props.Img.email}/></>
    );
  }
  function handleAbout(){
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <>
  
    <About/></>
    );
  }
  function handleSeeMore(event){
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    root.render(
      <>
      <Post user={props.Img}data={event}/>
      </>
    );
  }
  async function handleLike(event){
   // await addLike({"id":event,"user":props.props.email})
}
  return (<div className="container-scroller">
  {/* partial:partials/_sidebar.html */}
  <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
      <a className="sidebar-brand brand-logo">
        <img style={{height:"150%"}}src={logo} alt="logo" />
      </a>
      <a className="sidebar-brand brand-logo-mini">
        <img src="assets/images/logo-mini.svg" alt="logo" />
      </a>
    </div>
    <ul className="nav">
      <li className="nav-item profile">
        <div className="profile-desc">
          <div onClick={ch} className="profile-pic">
            <div className="count-indicator">
              <img
                className="img-xs rounded-circle "
                src={props.Img.picture}
              
                alt=""
              />
              <span className="count bg-success" />
            </div>
            <div className="profile-name">
              <h5 className="mb-0 font-weight-normal">{props.Img.name}</h5>
              <span></span>
            </div>
          </div>
          <a id="profile-dropdown" data-toggle="dropdown">
            <i className="mdi mdi-dots-vertical" />
          </a>
        
        </div>
      </li>
      <li className="nav-item nav-category">
        <span className="nav-link">Navigation</span>
      </li>











      
   

      <li onClick={Fee} className="nav-item menu-items">
        <a className="nav-link" >
          <span className="menu-icon">
            <i className="mdi mdi-playlist-play" />
          </span>
          <span className="menu-title">Feed</span>
        </a>
      </li>
      <li onClick={Friends} className="nav-item menu-items">
        <a className="nav-link">
          <span className="menu-icon">
            <i className="mdi mdi-table-large" />
          </span>
          <span className="menu-title">Friends</span>
        </a>
      </li>
      <li  onClick={handleAbout} className="nav-item menu-items">
        <a className="nav-link" >
          <span className="menu-icon">
            <i className="mdi mdi-chart-bar" />
          </span>
          <span className="menu-title">About Us</span>
        </a>
      </li>
      <li onClick={props.log} className="nav-item menu-items">
        <a className="nav-link">
          <span className="menu-icon">
            <i className="mdi mdi-contacts" />
          </span>
          <span className="menu-title">Log Out</span>
        </a>
      </li>
    
     










    </ul>
  </nav>
  {/* partial */}
  <div className="container-fluid page-body-wrapper">
    {/* partial:partials/_navbar.html */}
    <nav className="navbar p-0 fixed-top d-flex flex-row">
      <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
        <a className="navbar-brand brand-logo-mini">
          <img src="assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu" />
        </button>
        
        <ul className="navbar-nav navbar-nav-right">
      
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              id="profileDropdown"
              
              data-toggle="dropdown"
            >
              <div className="navbar-profile">
                <img
                  className="img-xs rounded-circle"
                  src={props.Img.picture}
                  alt=""
                />
                <p className="mb-0 d-none d-sm-block navbar-profile-name">
                  {props.Img.name}
                </p>
                <i className="mdi mdi-menu-down d-none d-sm-block" />
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="profileDropdown"
            >
              <h6 className="p-3 mb-0">Profile</h6>
              <div className="dropdown-divider" />
            
              <div className="dropdown-divider" />
              <a  onClick={Fee}  className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-playlist-play" />
                  </div>
                </div>
                <div  className="preview-item-content">
                  <p className="preview-subject mb-1">Feeds</p>
                </div>
              </a>
              <a  onClick={Friends}  className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-contacts" />
                  </div>
                </div>
                <div  className="preview-item-content">
                  <p className="preview-subject mb-1">Friends</p>
                </div>
              </a>
              <a  onClick={handleAbout}  className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-chart-bar" />
                  </div>
                </div>
                <div  className="preview-item-content">
                  <p className="preview-subject mb-1">About Us</p>
                </div>
              </a>
              <a  onClick={props.log}  className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-logout text-danger" />
                  </div>
                </div>
                <div  className="preview-item-content">
                  <p className="preview-subject mb-1">Log out</p>
                rf</div>
              </a>
              
              
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-format-line-spacing" />
        </button>
      </div>
    </nav>
    {/* partial */}
    <div className="main-panel">
      <div className="content-wrapper">
       
<div id="main"> {Object.keys(props.Img).length===0  ? <SideBar1 fbb={props.fbb}  log={props.log}Img={props.Img} />:<Feed see={handleSeeMore} props={props.Img}/>}
</div>
      </div>
      {/* content-wrapper ends */}
      {/* partial:partials/_footer.html */}
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
            Copyright © College Connect 2023
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            {" "}
            {" "}
            <a
              
            >
              
            </a>{" "}
           
          </span>
        </div>
      </footer>
      {/* partial */}
    </div>
    {/* main-panel ends */}
  </div>
  {/* page-body-wrapper ends */}
</div> );
}