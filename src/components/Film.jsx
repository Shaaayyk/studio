import React from 'react'
import { Link } from 'react-router-dom'
import { getFilm } from '../services/api-helper'
import Poster from './Poster'
import arrietty from '../images/arrietty.jpg'
import castle from '../images/castle.jpg'
import cat from '../images/cat.jpg'
import earthsea from '../images/earthsea.jpg'
import grave from '../images/grave.jpg'
import howls from '../images/howls.jpg'
import kaguya from '../images/kaguya.jpg'
import kiki from '../images/kiki.jpg'
import marnie from '../images/marnie.jpg'
import neighbors from '../images/neighbors.jpg'
import poko from '../images/poko.jpg'
import porco from '../images/porco.jpg'
import ponyo from '../images/ponyo.jpg'
import poppy from '../images/poppy.jpg'
import princess from '../images/princess.jpg'
import spirited from '../images/spirited.jpg'
import totoro from '../images/totoro.jpg'
import whisper from '../images/whisper.jpg'
import wind from '../images/wind.jpg'
import yesterday from '../images/yesterday.jpg'

export default class Film extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: ''
    }
  }

  async componentDidMount() {
    console.log(this.props.value)
    const film = await getFilm(this.props.value)
    this.setState({
      film: film
    })
  }

  showImage = () => {
    switch (this.state.film.title) {
      case 'Arrietty':
        return <img src={arrietty} alt={this.state.id} />;
      case 'Castle in the Sky':
        return <img src={castle} alt={this.state.id} />;
      case 'The Cat Returns':
        return <img src={cat} alt={this.state.id} />;
      case 'Tales from Earthsea':
        return <img src={earthsea} alt={this.state.id} />;
      case 'Grave of the Fireflie':
        return <img src={grave} alt={this.state.id} />;
      case "Howl's Moving Castle":
        return <img src={howls} alt={this.state.id} />;
      case 'The Tale of the Princess Kaguya':
        return <img src={kaguya} alt={this.state.id} />;
      case "Kiki's Delivery Service":
        return <img src={kiki} alt={this.state.id} />;
      case 'When Marnie Was There':
        return <img src={marnie} alt={this.state.id} />;
      case 'My Neighbors the Yamadas':
        return <img src={neighbors} alt={this.state.id} />;
      case 'Pom Poko':
        return <img src={poko} alt={this.state.id} />;
      case 'Ponyo':
        return <img src={ponyo} alt={this.state.id} />;
      case 'From Up on Poppy Hill':
        return <img src={poppy} alt={this.state.id} />;
      case 'Porco Rosso':
        return <img src={porco} alt={this.state.id} />;
      case 'Princess Mononoke':
        return <img src={princess} alt={this.state.id} />;
      case 'Spirited Away':
        return <img src={spirited} alt={this.state.id} />;
      case 'My Neighbor Totoro':
        return <img src={totoro} alt={this.state.id} />;
      case 'Whisper of the Heart':
        return <img src={whisper} alt={this.state.id} />;
      case 'The Wind Rises':
        return <img src={wind} alt={this.state.id} />;
      case 'Only Yesterday':
        return <img src={yesterday} alt={this.state.id} />;
      default:
        return null;
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div id="poster">
          {this.showImage()}
        </div>
      </div>
    )
  }

}