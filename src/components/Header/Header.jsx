import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const style = {
    border: '2px solid tomato',
    marginLeft: '15px',
    display: 'flex',
    gap: '50px', 
    

  }
  return (
    <div style={style}>
      <h1>this is home components</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About us</Link>
      <Link to={'/contact'}>contact us</Link>
    
      <Link to={'/user'}>User</Link>
    </div>
  );
}

export default Header