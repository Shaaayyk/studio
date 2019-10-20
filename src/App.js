import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { getApi } from './services/api-helper'
import Header from './components/Header'
import Footer from './components/Footer'
import Film from './components/Film'
import Home from './components/Home'


class App extends React.Component {

  state = {
    films: [],
    id: ''
  }

  async componentDidMount() {
    const films = await getApi()
    const id = films[0].id
    this.setState({
      films: films,
      id: id
    })
    console.log(this.state.films)
    console.log(this.state.id)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" render={() => (<Home films={this.state.films} />)} />
          <Route path="/:hero_id" render={(props) => (<Film filmId={props.match.params.hero_id} />)} />
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
