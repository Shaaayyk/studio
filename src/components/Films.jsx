import React from 'react'
import { Link } from 'react-router-dom'

export default function Films(props) {
  return (
    <div id="films">
      {
        props.films.map(film => (
          <Link to={`/film/${film.id}`}>
            <h1>{film.title}</h1>
          </Link>
        ))
      }
    </div>
  )
}