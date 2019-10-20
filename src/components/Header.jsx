import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div id="header">
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <h1>Studio Ghibli</h1>
    </div>
  )
}