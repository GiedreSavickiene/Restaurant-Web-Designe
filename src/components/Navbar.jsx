import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images-logo.png'

const Nav = styled.nav``;

const Navbar = () => {
  return (
    <Nav>
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
    </Nav>
  )
}

export default Navbar
