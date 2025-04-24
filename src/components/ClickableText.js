
function ClickableText({ text, onClick }) {
  return (
    <span
      style={{ color: 'blue', cursor: 'pointer' }}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

export default ClickableText;