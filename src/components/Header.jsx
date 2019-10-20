import React from 'react'
import logo from '../images/logo.png'

export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt="logo" />
      <h1>Studio Ghibli</h1>
    </div>
  )
}