import { useState } from "react";

export default function FilterSlider({sliderLabel, sliderStep, minValue, maxValue, defaultValue}) {
    const [rangeValue, setRangeValue] = useState(defaultValue);

    function handleRangeChange(event) {
        setRangeValue(parseFloat(maxValue - parseFloat(event.target.value).toFixed(1) + minValue).toFixed(1))
    }

    return (
        <div className="FilterItem">
        <label for="slider">{sliderLabel}</label>
        <input type="range" id="slider" name={sliderLabel} min={String(minValue)} max={String(maxValue)} value={maxValue - rangeValue + minValue}
            step={String(sliderStep)} list="markers" onChange={handleRangeChange}></input>
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
        </div>
    )
}