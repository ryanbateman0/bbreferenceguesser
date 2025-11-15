import { useState } from "react";

export default function DebutSeasonFilter({}) {
    const [rangeValue, setRangeValue] = useState(1995);

    function handleRangeChange(event) {
        setRangeValue(2025 - parseInt(event.target.value) + 1947)
    }

    return (
        <>
        <label for="lastAllStar">Debut Season</label>
        <input type="range" id="lastAllStar" name="Last All Star Appereance" min="1947" max="2025" 
            step="1" list="markers" onChange={handleRangeChange}></input>
        {/* <datalist id="markers">
            <option value="2025" label="2025"></option>
            <option value="2015" label="2015"></option>
            <option value="2005" label="2005"></option>
            <option value="1995" label="1995"></option>
            <option value="1985" label="1985"></option>
            <option value="1975" label="1975"></option>
            <option value="1965" label="1965"></option>
            <option value="1955" label="1955"></option>
        </datalist> */}
        <span>{rangeValue}</span>
        </>
    )
}