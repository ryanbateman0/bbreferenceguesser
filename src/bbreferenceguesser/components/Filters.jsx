import FilterBoolean from "./FilterBoolean"
import FilterButton from "./FilterButton"
import FilterSlider from "./FilterSlider"

export default function Filters({filterNames, activeFilterList, handleFilterButtonClick, defaultFilterValues, handleChangeValue}) {
    return (
        <>
        <span className="FilterButtonBoard">
            {filterNames.map((filterLabel, index) => (
                <FilterButton key={index} handleClick={handleFilterButtonClick}>{filterLabel}</FilterButton>
            ))}
        </span>
        <span className="Filters">
            {activeFilterList[filterNames[0]] ? <FilterSlider sliderLabel={filterNames[0]} minValue={1951} maxValue={2025} sliderStep={1} defaultValue={defaultFilterValues[filterNames[0]]} changeFilterValue={handleChangeValue} /> : <></>}
            {activeFilterList[filterNames[1]] ? <FilterSlider sliderLabel={filterNames[1]} minValue={1947} maxValue={2025} sliderStep={1} defaultValue={defaultFilterValues[filterNames[1]]} changeFilterValue={handleChangeValue} /> : <></>}
            {activeFilterList[filterNames[2]] ? <FilterSlider sliderLabel={filterNames[2]} minValue={1947} maxValue={2025} sliderStep={1} defaultValue={defaultFilterValues[filterNames[2]]} changeFilterValue={handleChangeValue} /> : <></>}
            {activeFilterList[filterNames[3]] ? <FilterSlider sliderLabel={filterNames[3]} minValue={0} maxValue={1611} sliderStep={1} defaultValue={defaultFilterValues[filterNames[3]]} changeFilterValue={handleChangeValue} /> : <></>}
            {activeFilterList[filterNames[4]] ? <FilterBoolean buttonLabel={filterNames[4]} trueLabel={"Active"} falseLabel={"Retired"} defaultValue={defaultFilterValues[filterNames[4]]} changeFilterValue={handleChangeValue} /> : <></>}
            {activeFilterList[filterNames[5]] ? <FilterBoolean buttonLabel={filterNames[5]} trueLabel={"In The Hall"} falseLabel={"Bum"} defaultValue={defaultFilterValues[filterNames[5]]} changeFilterValue={handleChangeValue} /> : <></>}
            {activeFilterList[filterNames[6]] ? <FilterSlider sliderLabel={filterNames[6]} minValue={0} maxValue={156.6} sliderStep={0.1} defaultValue={defaultFilterValues[filterNames[6]]} changeFilterValue={handleChangeValue} /> : <></>}
            {activeFilterList[filterNames[7]] ? <FilterSlider sliderLabel={filterNames[7]} minValue={0} maxValue={273.4} sliderStep={0.1} defaultValue={defaultFilterValues[filterNames[7]]} changeFilterValue={handleChangeValue} /> : <></>}
            {activeFilterList[filterNames[8]] ? <FilterSlider sliderLabel={filterNames[8]} minValue={0} maxValue={28.5} sliderStep={0.1} defaultValue={defaultFilterValues[filterNames[8]]} changeFilterValue={handleChangeValue} /> : <></>}
        </span>
        
        </>
    )
}