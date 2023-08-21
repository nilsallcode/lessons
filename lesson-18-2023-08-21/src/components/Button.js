function Button({ text, onClick }) {
    return (
        <button onClick={onClick} className="main-button">
            {text}
        </button>
    );
}

export default Button;