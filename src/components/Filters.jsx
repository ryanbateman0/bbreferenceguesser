import FilterBoolean from "./FilterBoolean"
import FilterButton from "./FilterButton"
import FilterSlider from "./FilterSlider"

export default function Filters({}) {
    return (
        <>
        <span className="FilterButtonBoard">
            <FilterButton>Last All Star Appereance</FilterButton>
            <FilterButton>Debut Season</FilterButton>
            <FilterButton>Last Season Played</FilterButton>
            <FilterButton>Number Of Games Played</FilterButton>
            <FilterButton>Currently Active</FilterButton>
            <FilterButton>VORP</FilterButton>
            <FilterButton>Win Shares</FilterButton>
            <FilterButton>PER</FilterButton>
            <FilterButton>Hall of Famer</FilterButton>
        </span>
        <span className="Filters">
            <FilterSlider sliderLabel={"Last All Star Appearance"} minValue={1951} maxValue={2025} sliderStep={1} defaultValue={1995} />
            <FilterSlider sliderLabel={"Debut Season"} minValue={1947} maxValue={2025} sliderStep={1} defaultValue={1995} />
            <FilterSlider sliderLabel={"Last Season Played"} minValue={1947} maxValue={2025} sliderStep={1} defaultValue={1995} />
            <FilterSlider sliderLabel={"Number Of Games Played"} minValue={0} maxValue={1611} sliderStep={1} defaultValue={250} />
            <FilterBoolean buttonLabel={"Currently Active"} trueLabel={"Active"} falseLabel={"Retired"} defaultValue={true} />
            <FilterSlider sliderLabel={"VORP"} minValue={0} maxValue={156.6} sliderStep={0.1} defaultValue={20} />
            <FilterSlider sliderLabel={"Win Shares"} minValue={0} maxValue={273.4} sliderStep={0.1} defaultValue={25} />
            <FilterSlider sliderLabel={"PER"} minValue={0} maxValue={28.5} sliderStep={0.1} defaultValue={5} />
            <FilterBoolean buttonLabel={"Hall Of Famer"} trueLabel={"In The Hall"} falseLabel={"Bum"} defaultValue={true} />
        </span>
        
        </>
    )
}