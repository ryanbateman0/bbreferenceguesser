
import { useEffect, useState } from 'react';
import './App.css'
import NewImageButton from './components/NewImageButton'
import RandomImage from './components/RandomImage'
import RevealNameButton from './components/RevealNameButton';
import Filters from './components/Filters';

async function getRandomImageURLFromAPI() {
  const APIURL = 'https://xq6nvrkjrg.execute-api.us-east-1.amazonaws.com/test/RandomImageURL';
  try {
    const response = await fetch(APIURL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

function App() {
  const [imageURL, setImageURL] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  const [revealPlayerName, setRevealPlayerName] = useState(false);
  

  function changeImage() {
    setImageURL(null);
    setRevealPlayerName(false);
    getRandomImageURLFromAPI().then(result => {
      setImageURL(result.url);
      setPlayerName(result.name);
  });
  }

  function revealName() {
    setRevealPlayerName(true);
  }

  useEffect(() => changeImage(), []);

  return (
    <>
      <Filters></Filters>
      <header>
        <h1>Who dis?</h1>
      </header>
      <RandomImage imageURL={imageURL}/>
      <RevealNameButton handleClick={revealName} playerName={playerName} revealPlayerName={revealPlayerName}>Reveal Name</RevealNameButton>
      <NewImageButton onSelect={changeImage}>Change Image</NewImageButton>
    </>
  )
}

export default App;
