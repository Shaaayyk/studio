import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div id='home'>
      <Link to='/films'>View All Films</Link>
    </div>
  )
}