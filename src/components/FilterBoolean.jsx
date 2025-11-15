import { useState } from "react";

export default function FilterBoolean({buttonLabel, trueLabel, falseLabel, defaultValue, changeFilterValue}) {
    const [buttonValue, setButtonValue] = useState(defaultValue);

    function handleClick(buttonValue) {
        setButtonValue(buttonValue)
        changeFilterValue(buttonLabel, buttonValue)
    }

    return (
        <div>
            <span>{buttonLabel}</span>
            <span className="YesNoButtons">
                <button className="BooleanButton" onClick={() =>  (handleClick(true))} disabled={buttonValue}>{trueLabel}</button>
                <button className="BooleanButton" onClick={() =>  (handleClick(false))} disabled={!buttonValue}>{falseLabel}</button>
            </span>
        </div>
    )
}