import React from 'react'
import arrietty from '../images/arrietty.jpg'
import castle from '../images/castle.jpg'
import cat from '../images/cat2.jpg'
import earthsea from '../images/earthsea2.jpg'
import grave from '../images/grave.jpg'
import howls from '../images/howls.jpg'
import kaguya from '../images/kaguya.jpg'
import kiki from '../images/kiki.jpg'
import marnie from '../images/marnie.jpg'
import neighbors from '../images/neighbors.jpg'
import poko from '../images/poko.jpg'
import porco from '../images/porco.jpg'
import ponyo from '../images/ponyo2.jpg'
import poppy from '../images/poppy3.jpg'
import princess from '../images/princess.jpg'
import spirited from '../images/spirited.jpg'
import totoro from '../images/totoro2.jpg'
import whisper from '../images/whisper.jpg'
import wind from '../images/wind.jpg'
import yesterday from '../images/yesterday2.jpg'

export default function Poster(props) {

  const showImage = () => {
    switch (props.film.title) {
      case 'Arrietty':
        return <img src={arrietty} alt={props.film.id} />;
      case 'Castle in the Sky':
        return <img src={castle} alt={props.film.id} />;
      case 'The Cat Returns':
        return <img src={cat} alt={props.film.id} />;
      case 'Tales from Earthsea':
        return <img src={earthsea} alt={props.film.id} />;
      case 'Grave of the Fireflies':
        return <img src={grave} alt={props.film.id} />;
      case "Howl's Moving Castle":
        return <img src={howls} alt={props.film.id} />;
      case 'The Tale of the Princess Kaguya':
        return <img src={kaguya} alt={props.film.id} />;
      case "Kiki's Delivery Service":
        return <img src={kiki} alt={props.film.id} />;
      case 'When Marnie Was There':
        return <img src={marnie} alt={props.film.id} />;
      case 'My Neighbors the Yamadas':
        return <img src={neighbors} alt={props.film.id} />;
      case 'Pom Poko':
        return <img src={poko} alt={props.film.id} />;
      case 'Ponyo':
        return <img src={ponyo} alt={props.film.id} />;
      case 'From Up on Poppy Hill':
        return <img src={poppy} alt={props.film.id} />;
      case 'Porco Rosso':
        return <img src={porco} alt={props.film.id} />;
      case 'Princess Mononoke':
        return <img src={princess} alt={props.film.id} />;
      case 'Spirited Away':
        return <img src={spirited} alt={props.film.id} />;
      case 'My Neighbor Totoro':
        return <img src={totoro} alt={props.film.id} />;
      case 'Whisper of the Heart':
        return <img src={whisper} alt={props.film.id} />;
      case 'The Wind Rises':
        return <img src={wind} alt={props.film.id} />;
      case 'Only Yesterday':
        return <img src={yesterday} alt={props.film.id} />;
      default:
        return null;
    }
  }


  return (
    <div id='poster'>
      {showImage()}
    </div>
  )
}