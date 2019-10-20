import React from 'react'

export default function Home(props) {
  return (
    <div>
      <select onChange={props.handleChange}>
        {
          props.films.map(film => (
            <option value={film.title} key={film.id}>{film.title}</option>
          ))
        }
      </select>
    </div>
  )
}