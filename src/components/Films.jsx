import React from 'react'
import { Link } from 'react-router-dom'

export default function Films(props) {
  return (
    <div id="films">
      {
        props.films.map(film => (
          <div className='film' key={film.id}>
            <Link to={`/film/${film.id}`}>
              <img src={film.poster} alt={film.id} />
              <h1>{film.title}</h1>
            </Link>
          </div>
        ))
      }
    </div>
  )
}