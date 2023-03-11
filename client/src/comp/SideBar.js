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
import Load from './Load';
import Post from './Post'
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
  console.log(props)
 
  function ch(){
   
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <Profile props={props.Img}/>
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
    raman
    <User email={props.Img.email}/></>
    );
  }
  function handleAbout(){
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <>
    raman
    <Message/></>
    );
  }
  function handleSeeMore(event){
   
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <>
      <Post data={event}/>
      </>
    );
    
  
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" sx={{bgcolor: 'text.primary'}} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            College Connect
          </Typography>
         
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        { Object.keys(props.Img).length===0 ?
        <div>
        <List>

       
          <ListItem onClick={handleSignIn} key={"Sign In"} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon onClick={handleSignIn}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                  
                {<img style={{height:"40px"}} src={require("../ico/user.jpg")}></img>}
               
                
               
              </ListItemIcon>
              <ListItemText primary={"Sign In"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
       
        
      </List>
      
      <List>

       
<ListItem  key={"Sign Up"} disablePadding sx={{ display: 'block' }}>
  <ListItemButton onClick={handleSignUp}
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon onClick={handleSignUp}
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
        
      {<img style={{height:"40px"}} src={require("../ico/user.jpg")}></img>}
     
      
     
    </ListItemIcon>
    <ListItemText primary={"Sign Up"} sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>


</List>

<List>

       
<ListItem onClick={handleAbout} key={"About Us"} disablePadding sx={{ display: 'block' }}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon onClick={handleAbout}
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
        
      {<img style={{height:"40px"}} src={require("../ico/about.png")}></img>}
     
      
     
    </ListItemIcon>
    <ListItemText primary={"About Us"} sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>


</List>
      </div>
      
        :

        <div>
        <List>

       
          <ListItem key={"Profile"} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon onClick={ch}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                  
                {<img style={{height:"40px"}} src={props.Img.picture}></img>}
               
                
               
              </ListItemIcon>
              <ListItemText primary={"Profile"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
       
        
      </List>
      
      <List>

       
<ListItem key={"Feed"} disablePadding sx={{ display: 'block' }} onClick={Fee}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon onClick={ch}
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
        
      {<img style={{height:"40px"}} src={require("../ico/feed.png")}></img>}
     
      
     
    </ListItemIcon>
    <ListItemText primary={"Feed"} sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>


</List>

<List>

       
<ListItem key={"Sign Out"} disablePadding sx={{ display: 'block' }}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon onClick={ch}
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
        
      {<img style={{height:"40px"}} src={require("../ico/user.jpg")}></img>}
     
      
     
    </ListItemIcon>
    <ListItemText primary={"Sign Out"} sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>


</List>
<List>

       
<ListItem onClick={Friends} key={"Friends"} disablePadding sx={{ display: 'block' }}>
  <ListItemButton
  onClick={Friends}
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon onClick={Friends} 
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
        
      {<img style={{height:"40px"}} src={require("../ico/group.png")}></img>}
     
      
     
    </ListItemIcon>
    <ListItemText primary={"Friends"} sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>


</List>
<List>

       
<ListItem key={"About Us"} disablePadding sx={{ display: 'block' }}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon onClick={ch}
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
        
      {<img style={{height:"40px"}} src={require("../ico/about.png")}></img>}
     
      
     
    </ListItemIcon>
    <ListItemText primary={"About Us"} sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>


</List>
      </div>
      }
        <Divider />
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div id="main"> 
       <SideBar1 log={props.log}Img={props.Img} />
       </div>
      </Box>
 
    </Box>

  );
}