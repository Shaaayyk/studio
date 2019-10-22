import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div id="header">
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <h1>STUDIO GHIBLI</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/films'>Films</Link>
      </nav>
    </div>
  )
}