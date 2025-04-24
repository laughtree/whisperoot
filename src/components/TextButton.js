
function TextButton({ text, onClick }) {
  return (
    <button
      className="text-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default TextButton;