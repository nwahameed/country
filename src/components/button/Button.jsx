import "./button.styles.css";

function Button({ text, handleClick, color }) {
  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
export default Button;
