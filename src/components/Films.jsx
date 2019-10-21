import React from 'react'
import { Link } from 'react-router-dom'
import { getPoster } from '../services/api-helper'

export default function Films(props) {
  return (
    <div id="films">
      {
        props.films.map(film => (
          <Link to={`/film/${film.id}`}>
            {props.films && <img src={async () => (
              await getPoster(film.title)
            )} alt={film.id} />}
            <h1>{film.title}</h1>
          </Link>
        ))
      }
    </div>
  )
}