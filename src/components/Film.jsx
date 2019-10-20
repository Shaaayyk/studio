import React from 'react'
import { getFilm } from '../services/api-helper'
import Poster from './Poster'


export default class Film extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: ''
    }
  }

  async componentDidMount() {
    const film = await getFilm(this.props.filmId)
    this.setState({
      film: film
    })
  }

  render() {
    return (
      <div id="film">
        <Poster film={this.state.film} />
        <div id="info">
          <h1>{this.state.film.title}</h1>
          <p>{this.state.film.description}</p>
          <p>Director: {this.state.film.director}</p>
          <p>Release Year: {this.state.film.release_date}</p>
          <p>Rotten Tomatos Score: {this.state.film.rt_score}</p>
        </div>
      </div>
    )
  }

}