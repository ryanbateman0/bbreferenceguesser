
export default function NewImageButton({ children, onSelect }) {
    return (
        <button onClick={onSelect}>
            {children}
        </button>
    )
}