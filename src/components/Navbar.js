




import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <AppBar position="absolute" className="navbarTrans">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">
        Maxxoto
    </Typography>
      <div className="ml-auto link">
      <NavLink to="/" className>Home</NavLink>
      <NavLink to="/skills" className>Skills</NavLink>
      <NavLink to="/experiences" className>Experiences</NavLink>
      <NavLink to="/traits" className>Traits</NavLink>
      <NavLink to="/projects" className>Projects</NavLink>
      </div>
    </Toolbar>
  </AppBar>






  //   Home
  // Skills
  // Experiences
  // Traits
  // My Projects



)

export default Navbar;
