import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { getApi, getFilm, getPoster } from './services/api-helper'
import Header from './components/Header'
import Footer from './components/Footer'
import Film from './components/Film'
import Home from './components/Home'
import Films from './components/Films'


class App extends React.Component {

  state = {
    films: [],
    value: '',
  }

  async componentDidMount() {
    const films = await getApi()
    const filmsPromise = films.map(async (film) => {
      const poster = await getPoster(film.title);
      return {
        ...film,
        poster
      }
    })
    const newFilms = await Promise.all(filmsPromise)
    this.setState({
      films: newFilms,
    })
  }

  handleClick = () => {
    document.querySelector('select').style.display = "block"
    document.querySelector('#click').style.display = 'none'
  }

  handleChange = async (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = async () => {
    const film = await getFilm(this.state.value)
    this.setState({
      film: film
    })
  }

  render() {
    return (
      <div className="App">
        <Header handleClick={this.handleClick} />
        <main>
          <Route exact path="/"
            render={() => (
              <Home
                films={this.state.films}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />)}
          />
          <Route exact path="/films"
            render={() => (
              <Films
                films={this.state.films}
              />)}
          />
          <Route path="/film/:id"
            render={(props) => (
              <Film
                filmId={props.match.params.id}
                value={this.state.value}
              />)}
          />
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
