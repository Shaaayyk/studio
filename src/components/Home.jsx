import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div>
      <select onChange={props.handleChange}>
        <option disabled selected={true}>Select Film</option>
        {
          props.films.map(film => (
            <option value={film.id} key={film.id}>{film.title}</option>
          ))
        }
      </select>
      <Link
        to={`/${props.film.title}`}
        key={props.film.title}
        onClick={props.handleSubmit}>
        Click Me
      </Link>
    </div>
  )
}