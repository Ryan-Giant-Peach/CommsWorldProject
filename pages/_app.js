import Topfigure from "../components/Topfigure";
import Bottomfigure from "../components/Bottomfigure";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import dynamic from 'next/dynamic';
import { useSpeechSynthesis } from 'react-speech-kit';

const Speech = dynamic(
  () => import("react-speech"),
  { ssr: false }
)

const politicians = [
  { name: "borisface", tag: "Boris" },
  { name: "obamaface", tag: "Obama" },
  { name: "trumpface", tag: "Trump" },
];

const pokemon = [
  { name: "charmander", tag: "mander" },
  { name: "squirtle", tag: "tle", soundex:'til' },
  { name: "snorlax", tag: "lax" },
];

function MyApp({ Component, pageProps }) {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [selectedPolitician, setSelectedPolitician] = useState(0);
  const { speak } = useSpeechSynthesis();

  useEffect(()=>{
    const text = `${politicians[selectedPolitician].soundex || politicians[selectedPolitician].tag} ${pokemon[selectedPokemon].soundex || pokemon[selectedPokemon].tag}`;
    speak({ text });
  },[selectedPokemon, selectedPolitician])
  return (
      <div
      className="pageContainer"
      >


      <h1 className="title">
        {politicians[selectedPolitician].tag}
        {pokemon[selectedPokemon].tag}
      </h1>
        <div
          style={{
            height: "40%",
            width: "100%",
            position: "relative",
            zIndex: 99998,
          }}
        >
          <Topfigure
            politicians={politicians}
            onChange={(newPolitician) => setSelectedPolitician(newPolitician)}
          />
        </div>
        <div style={{height: "50%", width: "100%", position: "relative" }}>
          <Bottomfigure
            pokemon={pokemon}
            onChange={(newPokemon) => setSelectedPokemon(newPokemon)}
          />
        </div>
      </div>
  );
}

export default MyApp;
