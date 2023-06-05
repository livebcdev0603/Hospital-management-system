import React from 'react'
import {AppBar,Toolbar,IconButton,Tabs,Tab,Box,Button,useTheme,useMediaQuery,Typography} from  '@mui/material'
import Drawor from './Drawor'
import { Link, NavLink } from 'react-router-dom'


import logo from  "./assets/logo.png"






const Navbar = () => {
    const theme=useTheme()
    const [value,setValue]=React.useState()

    const ismatch=useMediaQuery(theme.breakpoints.down('md'))
  
   
   
  return (
    <>
    <AppBar sx={{background:"#edf0ed"}} position='relative' >
        <Toolbar>
        <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="primary"
      component={Link}
      to="/"
    >
        <img src={logo} alt="logo" />
    
   
    </IconButton>
        
       
    {ismatch?( <Drawor/>):(
        <>
        
  <Tabs
  value={value}
  onChange={(e,value)=>setValue(value)}
  textColor="secondary"
  indicatorColor="secondary"
 sx={{ml:"50px",flexGrow:1,justifyContent:'center',display:'flex'}}
 
>
   
    <Tab  label="Home" component={NavLink} to='/'  exact activeClassName="Mui-selected"/>
   
 
  <Tab  label="Contact us" component={NavLink} to='/contact'  />
  <Tab  label="About us" component={NavLink} to='/about'  />
  <Tab  label="Doctors" component={NavLink} to='/doctor'  />
  <Tab  label="Our Services" component={NavLink} to='/services'  />
</Tabs>
<Box sx={{marginLeft:"auto"}}>
<Button variant="outlined" color="secondary" component={Link} to='/Login'>Login</Button>
<Button variant="outlined" color="secondary" sx={{marginLeft:"20px"}}  component={Link} to='/SignUp'>Sign in</Button>
</Box>
</>

    )}



  

        </Toolbar>
       
    </AppBar>
    </>
  )
}

export default Navbar