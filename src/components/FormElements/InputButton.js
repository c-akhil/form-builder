export default function InputButton({ value, children, className, onClick }) {
  return (
    <button
      className={className || "form-control"}
      onClick={() => onClick && typeof onClick === "function" && onClick(value)}
    >
      {children}
    </button>
  );
}
