import { useState } from "react"

export default function RevealNameButton({ children, playerName, revealPlayerName, handleClick }) {
    return (
        <>
            <button onClick={handleClick}>{children}</button>
            {revealPlayerName ? <p>{playerName}</p> : <p>?</p>}
        </>
    )
}