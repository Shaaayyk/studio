import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { getApi, getFilm } from './services/api-helper'
import Header from './components/Header'
import Footer from './components/Footer'
import Film from './components/Film'
import Home from './components/Home'


class App extends React.Component {

  state = {
    films: [],
    film: [],
    value: ''
  }

  async componentDidMount() {
    const films = await getApi()
    this.setState({
      films: films,
    })
    console.log(this.state.films)
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
    console.log(film)
  }

  render() {
    console.log(this.state.value)
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/"
            render={() => (
              <Home
                films={this.state.films}
                film={this.state.film}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />)}
          />
          <Route path="/:title"
            render={(props) => (
              <Film
                filmId={props.match.params.title}
                film={this.state.film}
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
