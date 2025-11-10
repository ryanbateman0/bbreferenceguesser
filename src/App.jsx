
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

const FILTERS = [
  "Last All Star Appareance", //0
  "Debut Season", //1
  "Last Season Played", //2
  "Number Of Games Played", //3
  "Currenly Active", //4
  "Hall of Famer", //5
  "VORP", //6
  "PER", //7
  "Win Shares" //8
]

const DEFAULT_FILTER_VALUES = {
  [FILTERS[0]]: 1995,
  [FILTERS[1]]: 1995,
  [FILTERS[2]]: 1995,
  [FILTERS[3]]: 250,
  [FILTERS[4]]: true,
  [FILTERS[5]]: true,
  [FILTERS[6]]: 20,
  [FILTERS[7]]: 17,
  [FILTERS[8]]: 5
}

const STARTING_FILTERS = {
  [FILTERS[0]]: false,
  [FILTERS[1]]: false,
  [FILTERS[2]]: false,
  [FILTERS[3]]: false,
  [FILTERS[4]]: false,
  [FILTERS[5]]: false,
  [FILTERS[6]]: false,
  [FILTERS[7]]: true,
  [FILTERS[8]]: false
}

const FILTER_RESET_LIST = [
  [1, 2, 0],
  [1, 2, 0],
  [1, 2, 0],
  [null],
  [4, 5],
  [4, 5],
  [6, 7, 8],
  [6, 7, 8],
  [6, 7, 8]
]

function App() {
  const [imageURL, setImageURL] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  const [revealPlayerName, setRevealPlayerName] = useState(false);
  const [activeFilters, setActiveFilters] = useState(STARTING_FILTERS);
  const [filterValues, setFilterValues] = useState(DEFAULT_FILTER_VALUES);
  
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

  function changeFilterValues(filterName, value) {
    setFilterValues((previousValues) => {return {...previousValues, [filterName]: value}})
  }

  function activateFilter(filterName) {
    const index = FILTERS.indexOf(filterName)
    for (const resetFilterIndex of FILTER_RESET_LIST[index]) {
        const resetFilterName = FILTERS[resetFilterIndex]
        if (resetFilterName === null) {
          break;
        }
        if (resetFilterName in activeFilters) {
          setActiveFilters((previousFilters) => {return {...previousFilters, [resetFilterName]: false}});
        }
    }

    setActiveFilters((previousFilters) => {return {...previousFilters, [filterName]: !activeFilters[filterName]}});
  }

  useEffect(() => changeImage(), []);

  return (
    <>
      <Filters filterNames={FILTERS} defaultFilterValues={DEFAULT_FILTER_VALUES} activeFilterList={activeFilters} handleChangeValue={changeFilterValues} handleFilterButtonClick={activateFilter}></Filters>
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
