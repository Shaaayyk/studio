import React from 'react'
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
      image: spirited,
      id: ''
    }
  }

  showImage = () => {
    switch (this.state.id) {
      case '2de9426b-914a-4a06-a3a0-5e6d9d3886f6':
        return <img src={arrietty} alt={this.state.id} />;
      case '2baf70d1-42bb-4437-b551-e5fed5a87abe':
        return <img src={castle} alt={this.state.id} />;
      case '90b72513-afd4-4570-84de-a56c312fdf81':
        return <img src={cat} alt={this.state.id} />;
      case '112c1e67-726f-40b1-ac17-6974127bb9b9':
        return <img src={earthsea} alt={this.state.id} />;
      case '12cfb892-aac0-4c5b-94af-521852e46d6a':
        return <img src={grave} alt={this.state.id} />;
      case 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa':
        return <img src={howls} alt={this.state.id} />;
      case '578ae244-7750-4d9f-867b-f3cd3d6fecf4':
        return <img src={kaguya} alt={this.state.id} />;
      case 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e':
        return <img src={kiki} alt={this.state.id} />;
      case '5fdfb320-2a02-49a7-94ff-5ca418cae602':
        return <img src={marnie} alt={this.state.id} />;
      case '45204234-adfd-45cb-a505-a8e7a676b114':
        return <img src={neighbors} alt={this.state.id} />;
      case '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c':
        return <img src={poko} alt={this.state.id} />;
      case '758bf02e-3122-46e0-884e-67cf83df1786':
        return <img src={ponyo} alt={this.state.id} />;
      case '45db04e4-304a-4933-9823-33f389e8d74d':
        return <img src={poppy} alt={this.state.id} />;
      case 'ebbb6b7c-945c-41ee-a792-de0e43191bd8':
        return <img src={porco} alt={this.state.id} />;
      case '0440483e-ca0e-4120-8c50-4c8cd9b965d6':
        return <img src={princess} alt={this.state.id} />;
      case 'dc2e6bd1-8156-4886-adff-b39e6043af0c':
        return <img src={spirited} alt={this.state.id} />;
      case '58611129-2dbc-4a81-a72f-77ddfc1b1b49':
        return <img src={totoro} alt={this.state.id} />;
      case 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3':
        return <img src={whisper} alt={this.state.id} />;
      case '67405111-37a5-438f-81cc-4666af60c800':
        return <img src={wind} alt={this.state.id} />;
      case '4e236f34-b981-41c3-8c65-f8c9000b94e7':
        return <img src={yesterday} alt={this.state.id} />;
      default:
        return null;
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Poster />
        <img src={this.state.image} alt={'spirit'} />
      </div>
    )
  }

}