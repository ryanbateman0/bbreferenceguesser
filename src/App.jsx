
import { useEffect, useState } from 'react';
import './App.css'
import NewImageButton from './components/NewImageButton'
import RandomImage from './components/RandomImage'

async function getRandomImageURLFromAPI() {
  const APIURL = 'https://xq6nvrkjrg.execute-api.us-east-1.amazonaws.com/test/RandomImageURL';
  try {
    const response = await fetch(APIURL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.url;
  } catch (error) {
    console.error(error.message);
  }
}

function App() {
  const [imageURL, setImageURL] = useState(null);
  const [imageToBeChanged, setImageToBeChanged] = useState(true);

  function changeImage() {
    setImageURL(null);
    getRandomImageURLFromAPI().then(url => setImageURL(url));
  }

  if (imageToBeChanged) {
    changeImage();
    setImageToBeChanged(false);
  }

  return (
    <div>
      <div id='header'>
        <h1>Who dis?</h1>
      </div>
      <RandomImage imageURL={imageURL}/>
      <NewImageButton onSelect={changeImage}>Change Image</NewImageButton>
    </div>
  )
}

export default App;
