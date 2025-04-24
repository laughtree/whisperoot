
function IconTextButton({ iconPath, text, onClick }) {
  return (
    <button
      className="icon-text-button"
      onClick={onClick}
    >
      <img src={iconPath} alt="" className="button-icon" />
      <span>{text}</span>
    </button>
  );
}

export default IconTextButton;