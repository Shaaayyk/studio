import React from 'react'
import { Link } from 'react-router-dom'
import background from '../images/background.jpg'

export default function Home(props) {
  return (
    <div id='home'>
      <img src={background} alt='background' />
      <h1>Studio Ghibli</h1>
      <Link to='/films'>View All Films</Link>
    </div>
  )
}