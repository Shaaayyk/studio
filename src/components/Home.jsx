import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../images/gif.gif'

export default function Home(props) {
  return (
    <div id='home'>
      <img src={gif} alt='background' className='background' />
      <h1 className="clip-text clip-text_one">STUDIO GHIBLI</h1>
      <p>Studio Ghibli, Inc. is a Japanese animation film studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films, and has also produced several short films, television commercials, and one television film. </p>
      <Link to='/films'>View All Films</Link>
    </div>
  )
}