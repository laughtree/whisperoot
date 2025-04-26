
function IconButton({ iconPath, onClick }) {
    return (
        <div className="icon-button-container">
            <button
                className="icon-button"
                onClick={onClick}
            >
                <img src={iconPath} alt="icon" className="icon" />
            </button> 
        </div>
        
    );
}

export default IconButton;