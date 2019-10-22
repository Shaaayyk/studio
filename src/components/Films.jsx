import React from 'react'
import { Link } from 'react-router-dom'

export default function Films(props) {
  window.scrollTo(0, 0)
  return (
    <div id="films">
      {
        props.films.map(film => (
          <div className='film' key={film.id}>
            <Link to={`/film/${film.id}`}>
              <img src={film.poster} alt={film.id} />
              <p className='film-title'>{film.title}</p>
            </Link>
          </div>
        ))
      }
    </div>
  )
}