export default function FilterButton({children, handleClick}) {
    return (
        <button className="FilterButton" onClick={() => handleClick(children)}>{children}</button>
    )
}