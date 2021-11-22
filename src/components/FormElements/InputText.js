export default function InputText({ value, setValue, className, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className || "form-control"}
      value={value || ''}
      onChange={(e) => setValue && typeof setValue === "function" && setValue(e.target.value)}
    />
  );
}
