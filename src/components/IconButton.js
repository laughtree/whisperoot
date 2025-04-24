
function IconButton({ iconPath, onClick }) {
    return (
        <button
            className="icon-button"
            onClick={onClick}
        >
            <img src={iconPath} alt="icon" className="icon" />
        </button>
    );
}

export default IconButton;