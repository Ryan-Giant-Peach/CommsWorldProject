import Topfigure from '../components/Topfigure'
import Bottomfigure from '../components/Bottomfigure'
import '../styles/globals.css'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const politicians = [
  { name: "borisface", tag: "Boris" },
  { name: "obamaface", tag: "Obama" },
  { name: "trumpface", tag: "Trump" },
];

const pokemon = [
  { name: 'charmander', tag: 'mander' },
  { name: 'squirtle', tag: 'tle' },
  { name: 'snorlax', tag: 'lax' },
]




function MyApp({ Component, pageProps }) {

  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [selectedPolitician, setSelectedPolitician] = useState(0);

  return (
    <>
    <h1>{politicians[selectedPolitician].tag}{pokemon[selectedPokemon].tag}</h1>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly',  height: '100vh' }}>
      <div style={{  height: '50%', width: '100%', position: 'relative', zIndex: 900 }}>
        <Topfigure  politicians={politicians} onChange={(newPolitician) => (setSelectedPolitician(newPolitician))}/>
      </div>
      <div style={{ height: '50%', width: '100%', position: 'relative' }}>
        <Bottomfigure pokemon={pokemon} onChange={(newPokemon) => (setSelectedPokemon(newPokemon))} />
      </div>
    </div>
    </>)
}

export default MyApp



