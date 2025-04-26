
function IconTextButton({ iconPath, text, onClick }) {
  return (
    <div className="icon-text-button-container">
        <button
        className="icon-text-button"
        onClick={onClick}
      >
        <img src={iconPath} alt="" className="button-icon" />
        <span>{text}</span>
      </button>
    </div>
    
  );
}

export default IconTextButton;