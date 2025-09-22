import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

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

function Image() {
  const [imageURL, setImageURL] = useState(null);
  
  useEffect(() => {
      getRandomImageURLFromAPI().then(url => setImageURL(url));
  }, [])
  
  return (
    <img src={imageURL}/>
  )
}

function App() {
  return (
    <>
    <h1>Who dis?</h1>
      <Image />
    </>
  )
}

export default App
